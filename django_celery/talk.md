% Haciendo colas para evitar la espera | django y celery
% Matías Iturburu - Taller Techonologies
% Córdoba 2012

# LO QUE?

## Celery

>- Cola de Tareas
>- Distribuida
>- Asincrónica

## Cola de tareas

- Interactuar con una API externa
- Recargar el indice de búsqueda
- Procesar imágenes
... Cualquier cosa que tarde más de 200ms

## Distribuida

- Ejecución remota
- Ejecución paralela 

## Asincrónica

- Afuera del ciclo petición/respuesta
- Pueden ser ejecutados en secuencia 
- O periodicamente

# Por qué?

## Mejor para todos

- Latencia
- Separar procesos intensivos
- Latencia
- Mejor experiencia de usuarios

>   No hace las cosas inmediatamente más rápidas, sí nos permite dar 
    mejores respuestas.

# Como?

## Muchas opciones

$\centerline{\includegraphics[height=2in]{./img/mqchoices.png}}$

## Simplemente usá RabbitMQ

- (Celery + RabbitMQ) $\heartsuit$  Django [^1]

[^1]: Django no es requerido para utilizar Celery.

## Pero...

>- Complejidad
>- Erlang !?
>- Feedback

## Vale la pena

>- Herramientas maduras
>- (Persistencia + Velocidad) &lt; Complejidad [^2]
>- Bien documentado, instalación simple [^3]

[^2]: http://kombu.readthedocs.org/en/latest/introduction.html#transport-comparison
[^3]: Ahora, era peor antes...

# Plantemos Apio

## Instalación

        $ apt-get install rabbitmq-server
        $ pip install celery django-celery

Esto suele ser opcional, pero no duele

        $ rabbitmqctl add_user myuser mypassword
        $ rabbitmqctl add_vhost myvhost
        $ rabbitmqctl set_permissions -p myvhost \
            myuser ".*" ".*" ".*"


## Settings

    
        #settings.py
        import djcelery
        djcelery.setup_loader()
        ...
        INSTALLED_APPS = (
        ...
            'djcelery',
        ...
        )
        BROKER_URL = 'amqp://myuser:guest@myvhost:5672//'
        

## Ponemos a correr todo

        $ ./manage.py syncdb
        $ ./manage.py celery worker --log-leve=info
        
# Definiendo tareas


## La tarea más simple

        #tasks.py
        from celery import task

        @task()
        def add(x, y):
            return x + y

>  Las tareas deben vivir en módulo y tener un nombre único.
>  Si se aplican multiples decoradores, hay que asegurarse que `celery.task`
   es aplicado último

## Llamando nuestra tarea
            
            # view.py
            
            from django.shortcuts import render
            import tasks

            def my_view(request):
                    
                tasks.add.delay(5,2)
                return render(
                    request,
                    "my_template.html", 
                    {'message:'Tarea encolada'},
                )

## Llamando nuestra tarea

>- `T.delay(arg, kwarg=value)`
    Un atajo a .apply_async.
>- `T.apply_async((arg, ), {'kwarg': value})`

>- `T.apply_async(countdown=10)`
    Ejecuta la tarea luego de 10 segundos.

>- `T.apply_async(eta=now + timedelta(seconds=10))`
    Ejecuta la tarea hasta dentro de 10 segundos.

>- `T.apply_async(countdown=60, expires=120)`
    Ejecuta la tarea dentro de un minuto pero expira en dos.

>- `T.apply_async(expires=now + timedelta(days=2))`
    Expira en dos días.

## Manejando estados y resultados

Llamar una tarea devuelve un `AsyncResult`.

        >>> result = add.delay(4, 4)
        >>> result.ready() # True si terminó.
        False
        >>> result.result # No hay resultado aún.
        None
        >>> result.get() # Espera y devuelve el resultado.
        8
        >>> result.result 
        8
        >>> result.successful() # True si no hubo errores.
        True

## Manejando estados y resultados

>-  Los resultados se almacenan en la base de datos que 
    estemos usando por defecto.
>-  Podemos usar RabbitMQ como result store, pero pierde persistencia.
>-  Permite resumir la tarea si hubo algún problema
>-  Ya que estamos en el baile conviene usar Redis:

        CELERY_RESULT_BACKEND = "redis://:password@host:port/db"

# Eso es todo?

## Por donde seguir

>-  Tareas periodicas, estilo Cron
>-  Canvas: workflows, dependencias y subtareas
>-  Monitoreo 
>-  Suficiente como para estar entretenido un año

## Cron

Tareas que se repiten con cierta frecuencia
Se agregan en `settings.py`

        CELERYBEAT_SCHEDULE = {
            # Cada lunes a las 7:30
            'every-monday-morning': {
                'task': 'tasks.add',
                'schedule': crontab(
                    hour=7, 
                    minute=30, 
                    day_of_week=1
                ),
                'args': (16, 16),
            },
        }

## Canvas

Define subtareas y varias opciones de relación.

>- Subtareas:

        >>> from celery import subtask
        >>> subtask('tasks.add', args=(2, 2), countdown=10)
        tasks.add(2, 2)

>- Callbacks:

        add.apply_async((2, 2), link=other_task.subtask())

Más: http://docs.celeryproject.org/en/latest/userguide/canvas.html


## Monitoreo

### Linea de comandos:

Incluida en la distribución

        $ celery status
        $ celery result -t tasks.add 4e196aa4-0141-4601-8138-7aa33db0f577
        $ celery inspect active
        $ celery purge

------------------------

### Django Admin Monitor

Incluida en la distribución, habilita un panel en el admin


$\centerline{\includegraphics[height=2in]{./img/djangoceleryadmin2.jpg}}$

No verán resultados hasta activar la cámara:

        $ python manage.py celery control enable_events

------------------------
Flower:

        $ pip install flower
        
$\centerline{\includegraphics[height=2in]{./img/dashboard.png}}$

Más: (http://docs.celeryproject.org/en/latest/userguide/monitoring.html#django-admin-monitor)

## Suficiente apio para todo el año

- Routing
- Workers
- Concurrencia

# Gracias
