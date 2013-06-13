=============================
Python para trabajar menos
=============================

Tips sobre como Python puede ahorrarnos horas de trabajo.

.. footer:: Matías Iturburu | <tallertechnologies.com>


Que es 
-----------------------------

> No quiero aprender otro lenguaje!
> Hey!, Yo estoy contento con {Java, C++, C#, whatever}!
> por qué no {ruby, javascript, perl}?


Básicos
-----------------------------

.. code-block:: python
    python -mjson.tool

.. code-block:: python
    python3 -m http.server

.. code-block:: python
    python3 -m smtpd -n -c DebuggingServer localhost:2525



Intermedios

.. code-block:: python
    python -c "import csv,json;print json.dumps(list(csv.reader(open('csv_file.csv'))))"

.. code-block:: python
    python -c "import urllib, sys ; print urllib.quote_plus(sys.stdin.read())";

.. code-block:: python
    :include: py.mem