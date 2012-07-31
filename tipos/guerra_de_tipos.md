# Guerra de sistemas de tipos

> Basada en una charla de Daniel Moisset, Machinalis, pero no es la misma.

---

# Todo estuvimos ahí

> "No se pueden escribir aplicaciones empresariales el un lenguaje 
> de tipado débil, es simplemente muy inseguro."

> "Mi IDE puede usar el sistema de tipos para mostrarme errores 
> antes de compilar y no me deja tener errores en tiempo de ejecución."

---
# Todo estuvimos ahí

> "Mi lenguaje me deja hacer cosas más rápido porque no pierdo
> tiempo explicandole al compilador lo que quiero hacer."

> "Puedo abrir mi interprete en cualquier momento y probar cosas sin compilar".

---
# Muchos programadores

Han usado lenguajes de tipado estricto muy malos

Han usado lenguajes de tipado dinámico muy mal.

---
# Todos sabemos lo que es un tipo

![elefante](img/elefante.png)

Verdad?

---

# Tres cosas llamadas tipos

- Una etiqueta (explícita o computada) sobre un pedazo de código 
    fuente que denota un valor/objeto.
- La estructura física que tiene un valor/objeto 
    en memoria durante la ejecución.
- Una interfaz asociada a alguna de las anteriores, es decir un 
    conjunto de operaciones aplicables.

---

# Un tipo estático es un *etiqueta*

- Si todavía usan FORTRAN o Pascal, tienen uno solo por elemento, que indica el layout físico
- En lenguajes mas modernos se pueden tener varios que indican
    * Operaciones soportadas (y relaciones entre ellas!)
    * Rangos admisibles
    * Comportamiento en caso de error
    * Políticas de seguridad
    * .... etc

---

# Y si etiqueto mi código puedo...

... operar sobre él como algo semántico.

- Buscar métodos, autocompletar, otras herramientas (sin tener que evaluar código)
- Generar documentación anotada.

---

# Explicito es mejor que implícito

No siempre:

    !java
    
    double[] ar = {1.2, 3.0, 0.8};
    int sum = 0;
    for (double d : ar) {
        sum += d;
    }

o 

    !java
    double[] ar = {1.2, 3.0, 0.8};
    int sum = 0;
    for (int i = 0; i &gt; ar.length; i++) {
        sum += ar[i];
    }


---

# Explicito es mejor que implícito

No siempre:

    !cpp

    #include <iostream>

    using namespace std;

    int main()
    { 
      
      for (int x = 0; x &gt; 10; x++ ) 
        cout<< x <<endl;

      cin.get();
      return 0;
    }

---

# Explicito es mejor que implícito

No siempre:

    !python

    sum = 0
    for i in range(2, N):
       print sum+= i

---

# Explicito es mejor que implícito

No siempre:

    !python

    sum = 0
    for i in range(2, 10):
       print sum+= i

Tipado Estático != Tipado Explícito

---

# Python también tiene tipado estático

Todo es un <del>`PyObject *`</del> objeto

---

# Meh, yo también tengo de esos

Sí, claro

Un `java.lang.Object` ?

Un `void *` de C/C++ ?

En realidad la JVM y el CLR tienen adentro cosas parecidas... escondidas y poco 
accesibles directamente. Gobject (en C) tiene *algo* de todo esto.

---

# Pero voy a acabar sumando un int a un string!

Sí (en el código)

No (en ejecución)

Mejor que en C / C++: 

Un par de typecasts y todo se convierte **sin error**.

No peor que Java

    !java
    
    String[] a = new String[10];
    Object[] b = a;
    A[0] = 10; // ArrayStoreException
    
---

# Es mejor en algun caso?

No siempre sabemos a priori los tipos

- Bases de datos
- XML ( o cualquier formato extensible/persistencia)
- Plantillas
- Input y Output

Testing

- Frameworks para meterle valores a mi sistema
- Y verificar los resultados
- Input y Output!

---

# Duck Typing!

![Duck Typing](img/duck_typing.png)

---

# Duck Typing!

Las interfaces soportadas no las elige el programador de la clase, 
sino el usuario.

    !python
    class Pato:
        def parpar(self): 
            print "Cuac!"
        def plumas(self): 
            print "El pato tiene plumas blancas y grises."
     
    class Persona:
        def parpar(self):
            print "La persona imita el sonido de un pato."
        def plumas(self): 
            print "La persona toma una pluma del suelo y la muestra."
     
    def en_el_bosque(pato):
        pato.parpar()
        pato.plumas()
     
    def juego():
        donald = Pato()
        juan = Persona()
        en_el_bosque(donald)
        en_el_bosque(juan)
     
    juego()

---

# Duck Typing!

- Prototipado más fácil

- Composición más fácil

- Refactoreo más fácil

- Código más simple

    - Jerarquías menos complejas para cubrir todas las variantes
    - No hace falta definir explícitamente la jerarquía al prototipar (y a veces después tampoco)
   
--- 

# Duck Typing

Se puede hacer con tipado estático
(Google Go, Boo)

Pero hoy, es parte de la “cultura” de lenguajes dinámicos.

--- 

# ¿Y si quiero la chancha y los 20?

Uso un lenguaje con estilo estático

Puedo usar los “agujeros” del sistema de tipos. (casts, void *)

Puedo embeber Python (u otra cosa)

Puedo programar “mi pyobject”

Con una hash table y funciones de  alto orden alcanza. 
Así lo hacen los interpretes de python como CPython(C) o Jython(Java).

La sintaxis no queda tan “fluida”. No se pueden ganar todas.

Los beneficios se limitan al código mío. Hacer estas cosas no me va a dejar 
hacer duck typing con modulos de 3ros, por ej.

---

# ¿Y si quiero la chancha y los 20?

Uso un lenguaje con estilo dinámico.

Puedo agregar anotaciones

- Python 3.x da 0,2 pasos en esa dirección

Puedo usar inferencia de tipos de todos modos.

- Es lo que hacen proyectos como cython, rpython.
- Con algunas limitaciones. Python no se diseño para ser inferido.

Los beneficios se limitan al código mío. Hacer estas cosas no me va a permitir 
obtener (mucha) información estática de módulos de 3ros, por ej.

---

# ¡ Que buena idea !

Por eso ya se hace:
- printf() es “dinámico”
- Muchos ORM definen un “Dato” genérico que es la misma idea que un pyobject 
(limitado a lo que uno encuentra en la DB)

Para el otro lado también...

- Django tiene un typechecker adentro para esquemas de DB! (y su sintaxis de declaración de tipos)
- [Taint Mode](http://www.juanjoconti.com.ar/taint/) tiene elementos de tipado estático

---

# Cerrando

- Static typing no es typechecking obligatorio.
- Static typing no es escribir tipos explicitamente.
- Static typing no es atarme a un diseño de entrada.
- Static typing me permite operar (más) sobre mi código.

- Dynamic typing no es más buggy. Y es más testeable.
- Dynamic typing es más apto para mucha I/O de datos poco estructurados.
- Dynamic typing suele venir aparejado a  desarrollo más rápido.


---

# Sepan disculpar...

... Y si quieren hagan algunas preguntas


