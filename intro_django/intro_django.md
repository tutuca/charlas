% Django para todos
% Matías Iturburu - Taller Technologies
% Córdoba 2012

# ??

## Python

- Lenguaje interpretado, multiparadigma.
- Sintaxis liviana (sin llaves, bloques determinados por indentación).
- Baterías incluidas.

## Framework

- Conjunto de bibliotecas para un objetivo específica.
- Facilitan tareas repetitivas
- Buenas prácticas.

## Desarrollo web

- Aplicaciones con una arquitectura en tres capas:
    - Persistencia.
    - Procesamiento.
    - Presentación
- Variedad de clientes.
- Servidor centralizado.

# Django

## Asunciones sobre *como* hay que hacer desarrollo web.

- Patrón basado en MVC (con diferencias importantes).
- Baterías Incluidas.
- Diseño monolítico.
- Proyectos modulares.

## MVC

- Código SQL generado a partir de clases python.
- Andamiaje liviano
- Hacelo vos mismo (pero tomá estas herramientas)


## Hay muchas maneras de hacer lo mismo. Bien podrías hacerlo de esta:

- Partir del diseño de Entidades
- Mantené las vistas tontas y simples.
- No te repitas.


## Mucha charla, vamos a los bifes

Primeros pasos, el obligatorio blog.

    $ pip install django
    $ django-admin.py startproject demo
    $ ls -R 
    .:
    demo

    ./demo:
    demo  manage.py

    ./demo/demo:
    __init__.py  settings.py  urls.py  wsgi.py

---------------

Ahora necesitamos una *aplicacion*[1]

    $ cd demo
    $ django-admin.py startapp blog
    $ ls blog
    __init__.py  models.py  tests.py  views.py


[1] Una aplicación es un paquete con un módulo *models.py*
    django usa este módulo para detectar el paquete y operar con él de varias 
    maneras

## Ya está?

No sé, probemos:
        
        $ chmod +x manage.py # no realmente necesario
        $ manage.py runserver
        Validating models...

        0 errors found
        Django version 1.4.1, using settings 'demo.settings'
        Development server is running at http://127.0.0.1:8000/
        Quit the server with CONTROL-C.

Parece que si!!

## Yay Settings! 

La parte que se olvidaron cuando dijeron que era RAD.

Vamos a decirle un par de cosas al framework

`settings.py`

        DATABASES = {
            'default': {
                'ENGINE': 'django.db.backends.sqlite3',
                'NAME': 'demo.db',
                'USER': '',
                'PASSWORD': '',
                'HOST': '',
                'PORT': '',
            }
        }
        ...
        INSTALLED_APPS = (
            'django.contrib.auth',
            'django.contrib.contenttypes',
            'django.contrib.sessions',
            'django.contrib.sites',
            'django.contrib.messages',
            'django.contrib.staticfiles',
            # Uncomment the next line to enable the admin:
            # 'django.contrib.admin',
            # Uncomment the next line to enable admin documentation:
            # 'django.contrib.admindocs',
            demo, # << nuestro proyecto
            blog, # << nuestra app
        )

## Modelos

El corazón de django es el ORM [2]. 

from django.db import models

    class BlogPost(models.Model):
        """A post on a blog"""
        
        title = models.CharField(max_length=100)
        content = models.TextField()
        category = models.ForeignKey('blog.Category')
        date = models.DateTimeField(auto_now=True)
        def __unicode__(self):
            return self.title

        @models.permalink
        def get_absolute_url(self):
            return ('post_detail', [self.pk])

    class Category(models.Model):
        """A category duh"""
        
        name = models.CharField(max_length=100)
        parent = models.ForeignKey('blog.Category', blank=True, null=True)


[2] Realmente es una gran herramienta si nuestra aplicación tiene mucho que
    hacer con una base de datos.
    También funciona al recez, nos permite modelar muchos problemas en terminos de
    Entidad Relación.


---------------

Creamos las entidades en la base de datos.

    $ ./manage.py syncdb
    ...


## Y eso es todo?

NO! Se fijaron como seguimos entrando en http://localhost:8000? 

Bien es tiempo de hablar un rato más.


# URL's, el admin y ponies

Las URLS son la puerta a nuestra aplicación [3].

`settings.py`
        ROOT_URLCONF = 'demo.urls'
        INSTALLED_APPS = (...
            'django.contrib.admin',
            ...
        )

---------------

`urls.py`

        from django.conf.urls import patterns, include, url

        # Uncomment the next two lines to enable the admin:
        # from django.contrib import admin
        # admin.autodiscover()

        urlpatterns = patterns('',
            # Examples:
            # url(r'^$', 'demo.views.home', name='home'),
            # url(r'^demo/', include('demo.foo.urls')),

            # Uncomment the admin/doc line below to enable admin documentation:
            # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

            # Uncomment the next line to enable the admin:
            # url(r'^admin/', include(admin.site.urls)),
        )

[3] `manage.py` es nuestro punto de entrada. Escucha en el puerto 8000 y mapea
    diferentes direcciones a funciones.
    Este mapeo está definido en el módulo urls.py


## URL's

        from django.conf.urls import patterns, include, url
        from django.contrib import admin
        
        admin.autodiscover()

        urlpatterns = patterns('',
             url(r'^admin/', include(admin.site.urls)),
        )
        
---------------

Le decimos a django que nos haga algunos favores.

        #blog/admin.py
        
        from django.contrib import admin
        from blog.models import Category, BlogPost


        admin.site.register(Category)
        admin.site.register(BlogPost)


## Yay! y ahora si!??

Casi, veamos:

        $ manage.py syncdb # porque habilitamos `contrib.admin`
        $ manage.py runserver # apuntamos a http://localhost:8000/admin/


## Vamos mejor

Tuneando el admin.

        from django.contrib import admin
        from blog.models import Category, BlogPost


        class CategoryAdmin(admin.ModelAdmin):
            list_display = ('name', 'parent')
            list_filter = ('blogpost', )
            
        class BlogPostAdmin(admin.ModelAdmin):
            list_display = ('title', 'date', 'category')

        admin.site.register(Category, CategoryAdmin)
        admin.site.register(BlogPost, BlogPostAdmin)

# Y ahora? Vistas!

## vistas (en django) != vistas (MVC) [4]

[4] Las vistas de django encajan más bien en la parte del controlador en 
    terminos del patrón MVC.
    No estoy seguro de que se haya usado este nombre por alguna razón más que 
    anecdótica.


## Nuestra primera vista

Reciben una `request`, hacen algo y devuelven una `response`

No olvides declararlas en `urls.py`!


        from django.http import HttpResponse

        def album_list(request):
            return HttpResponse('Hola Mundo...')

Errr... No estamos grandes para esto?


## Mejores vistas

Las **vistas** modifican el *contexto* de nuestra petición y preparan la
respuesta. 

Generalmente esto se imprime en algún *template*.

Suena como mucho? django trae las pilas que necesitás!

## Shortcuts!

    from django.shortcuts import render, get_object_or_404
    from blog.models import Category, BlogPost


    def post_list(request):
        posts = BlogPost.objects.all()
        return render(
            request,
            'index.html',
            {'posts':posts}
        )

    def post_detail(request, album_id=None):
        post = get_object_or_404(BlogPost, pk=album_id)
        return render (
            request,
            'post.html',
            {'post':post}
        )



## Not so fast cowboy

Algunas notas sobre los settings:

- `settings.py` es un script python. Podemos usar mucha lógica en él.
- Django va a depurar el script para evitar problemas de seguridad comunes.

Agreguemos algunas rutas importantes

        import os

        BASE_DIR = os.path.dirname(__file__)
        ...
        TEMPLATE_DIRS = (
            os.path.join(BASE_DIR, 'templates')
        )

## Templates!

- Basados en texto plano, sintaxis rara pero cómoda.
- Pueden generar varios formatos.
- Corren en un entorno seguro, no pueden acceder a metodos o atributos "privados" (esos con _)


## Templates!

Tags, variables y herencias

        #layout.html
        <!DOCTYPE html>
        <html>
        <head>
            <title>{%block title%}blog{%endblock%}</title>
        </head>
        <body>
        {% block content %}
        {% endblock %}
        </body>
        </html>

---------------

    #index.html
    {% extends "layout.html" %}
    {% block content %}
    <h2>Posts on a Blog</h2>
    <ul>
        {% for post in posts %}
        <li>
            <h1><a href="{{post.get_absolute_url}}">{{post.title}}</a></h1>
            <p>{{post.content|truncatewords:'20'}}</p>
            <p>in {{post.category}}</p>
            
        </li>
            
        {% endfor %}
    </ul>   
    {% endblock content %}

----------------

    {% extends "layout.html" %}
    {% block title %}{{post.title}}{% endblock title %}
    {% block content %}
        <h2><a href="/">Home</a></h2>
        <h1><a href="{{post.get_absolute_url}}">{{post.title}}</a></h1>
        <p>{{post.content}}</p>
        <p>in {{post.category}}</p>
            

    {% endblock content %}

## Que más hay en la caja?

- Contrib
- Señales
- RSS, Comments, Profiles y Registración

## Por donde sigue?

- Pasar a producción (fabric, mod_wsgi)
- Integrar con herramientas externas (celery, haystack)
- Un mundo de sensaciones

# Muchas gracias


