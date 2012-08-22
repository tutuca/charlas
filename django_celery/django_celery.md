% Haciendo colas para evitar la espera
% Matías Iturburu - Taller Techonologies
% Córdoba 2012

# LO QUE?

- Cola de Tareas
- Distribuida
- Asincrónica

## Cola de tareas

- Interactuar con una API externa
- Recargar el indice de búsqueda
- Procesar imágenes
... Cualquier cosa que tarde más de 200ms

## Distribuida

- Ejecución paralela
- Ejecución remota

## Asincrónica

- Afuera del ciclo petición/respuesta
- Pueden ser ejecutados en secuencia 
- O periodicamente

# Por qué?

- Latencia
- Separar procesos intensivos
- Latencia
- Mejor experiencia de usuarios

... Inevitable

# Como?

- Celery + RabbitMQ &gt;3 Django

## Pero...

- Muchas dependencias externas
- Nada pure-python
- Monitorear las tareas es un problema importante

## Vale la pena

- Herramientas maduras
- (Persistencia + Velocidad) &gt; Complejidad
- Bien documentado

http://kombu.readthedocs.org/en/latest/introduction.html#transport-comparison


# Plantemos Apio

        $ apt-get install rabbitmq-server
        $ pip install celery, django-celery

-----------------

    
        #settings.py
        import djcelery
        djcelery.setup_loader()
        ...
        INSTALLED_APPS = (
        ...
            'djcelery',
        ...
        )
        
-----------------

## Ahora podemos usar        

        
