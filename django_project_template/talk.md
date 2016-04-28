# Un molde de proyecto machinalico

---------

# Históricamente

Disponíamos los proyectos más o menos así:

    - project_name
        |- code
            |- project_name
                |- apps
                |- website
                |- manage.py
                |- whatever
        |- docs
        |- fab
        |- setup

----------

# Eso está muy bien y todo. 

- Esquema medianamente uniforme entre los equipos.
- Convenciones sensatas
- Disminuye el ramp-up

----------
# PERO:

- Es innecesariamente anidado.
- No usamos `fab` desde hace años.
- `setup` tiende a ser un basurero
- Está piola refrescar las cosas de vez en cuando.

----------

# Project templates

A partir de django 1.5 django tiene soporte para `templates` en startproject

> --template TEMPLATE
> Specifies a directory, file path, or URL of a custom project template. See the startapp --template documentation for examples and usage.

----------

# Project templates:

En síntesis, usa una simple convención para sustituir

- Archivos o carpetas llamados `project_name`.
- Archivos que contengan el string `{{project_name}}`.

----------

De ahí que armamos [esto](https://github.com/tutuca/django-project-template)

    - project_name
        |- assets/  # archivos fuente de estilos o js.
        |- project_name/  # equivalente a /code/project_name/website.
        |- templates/  # /code/project_name/templates
        |- setup.py
        |- package.json
        |- README.md
        |- requirements.txt
        |- MANIFEST.in

---------

# EPA!

- `setup.py` ?
- `MANIFEST.in` ?
- `package.json` ??!!!

---------

# Por partes: setup.py

- Invocar `python setupy.py develop` garantiza que todos los módulos necesarios están en PYTHON-PATH.
- Permite ubicar `entry-points` que ejecutar la aplicación.

---------

# Por partes: MANIFEST.in

- Convención para agregar archivos no-python al paquete.
- No es terriblemente necesario, pero te obliga a ser un poco  más conciente de lo que incluís.

----------

# Por partes: package.json

- Equivalente de `setup.py` para javascript
- Lista dependencias de front-end, a lo pip.
- Lista herramientas para desarrolladores.
- Permite definir puntos de entrada.

----------

# Por partes: Gruntfile.js

- [grunt](http://gruntjs.com/) es un *task-runner*
- Consolida los pasos de *compilación* de todo lo relacionado con el front-end.
- En éste paquete permite utilizar `require` via *webpack*


----------

# Y como se come?

Siempre empezamos con un virtualenv:

    $ virtualenv -ppython3 ~/venvs/coso
    $ source ~/venvs/coso/bin/activate
    (coso)$ pip install django

Se acuerdan que admite una URL?

    (coso)$ django-admin startproject --template https://github.com/tutuca/django-project-template/archive/master.zip

---------

# Pero... por qué?

- Chato es mejor que anidado.
- Más similar a paquetes que te encontrás en general
- Incluye herramientas para el front-end
- Nos parecía que era hora.


----------

# Referencias:

- [cookiecutter-django](https://github.com/pydanny/cookiecutter-django)
- [hitchhikers guide to packaging](http://the-hitchhikers-guide-to-packaging.readthedocs.io/)
- [dive into python](http://www.diveintopython3.net/packaging.html)

----------

# Preguntas?
    


