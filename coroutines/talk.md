Title: Overview

We are gonna try to:

- Introduce Futures, coroutines and generators as a nice control abstraction for 
  asyncronous programming
- By means of some light review of some python implementations.
- Hopefully make some controversial arguments.

---

Title : Concurrency is:

- Essentially a hard problem.
- With a number of half-correct solutions.
- We deal with more and more everyday.

---

Title: We didn't do much of this with python:

- Unless you really know when to use threads. 
- You can afford to launch enough processes.
- You can afford to setup some message transport and distribute the load.
- Some other number of exotic attemps (gevent, asyncoro, twisted).

---

Title: Tornado.

- Promoted as a "server framework".
- Actually a collection of nice tools for async.

---

- An I/O Loop
- Corutines, Tasks.
- Futures.

---

Title: Tornado's I/O Loop.

You probably seen one before.

- Single thread.
- Works best on top of [epoll](http://en.wikipedia.org/wiki/Epoll).
- So good that it's the basis for the upcoming async features in python's standard library.

---

Title: Coroutines

You... actually did seen these before...


--- 

Title: Coroutines

- Subroutines have ( N=1, M=1 ):

  1 entry point
  Take only one input

<iframe width="800" height="500" frameborder="0" src="http://pythontutor.com/iframe-embed.html#code=def+subrutine(name+%3D+%22World!%22)%3A%0A++++print+%22Hello%22,+name%0A++++%0Asubrutine()%0Asubrutine(name%3D%22Taller!%22)%0A%0A&cumulative=false&heapPrimitives=false&drawParentPointers=false&textReferences=false&showOnlyOutputs=false&py=2&curInstr=0"> </iframe>

    def subrutine(name):
        print "Hello", name

    subrutine('World')

---

- Generators have ( N, M=0 ):

  N entry points
  Take no input

    def generator():
        yield "Hello"
        yield "World"

    g = generator()
    print g.next()
    print g.next()
    print g.next()

---

- Coroutines have (N, M):
  N entry points
  Take M inputs


    def cosubroutine():
        x,y = (yield) # !!
        result = x + y
        yield result

    args = (1,2)

    sub = cosubroutine()
    sub.next()              # start the coroutine
    result = sub.send(args) # send the values into it
    print(result)


---

Better!

def coroutine(f):
    def start(*args,**kwargs):
        co = f(*args,**kwargs)
        co.next()
        return co
    return start

@coroutine
def cosubroutine():
    x,y = (yield)
    result = x + y
    yield result

sub = cosubroutine()
print( sub.send((1,2)) )

---

Corotines (cont)

Offers great oportunity for refactor:

class AsyncHandler(RequestHandler):
    @asynchronous
    def get(self):
        http_client = AsyncHTTPClient()
        http_client.fetch("http://example.com",
                          callback=self.on_fetch)

    def on_fetch(self, response):
        do_something_with_response(response)
        self.render("template.html")

---

class GenAsyncHandler(RequestHandler):
    @gen.coroutine
    def get(self):
        http_client = AsyncHTTPClient()
        response = yield http_client.fetch("http://example.com")
        do_something_with_response(response)
        self.render("template.html")

--- 

Yield Magic!

- Delegates excecution.
- *Like* threads but lighter (easy to create by tens of thousands).
- Makes context switch mechanic implicit.
- That could not be inmediately easy to grasp.

---

# Futures

Ok... you probably never heard of that.

- Wraps async behavior in a lazy evaluation facility.



- Threads

  The first thing most people use for concurrency.
  
  * Easy to create by the thousands - *Light*
  * Shared program data:
    * Non-deterministic scheduling.
    * Non atomic operations.
    * Locking primitives hard enough to downplay the benefits.

---


Title: Coroutines

* Not a new thing: Conway (1963), Knuth (1980).
* A control abstraction .
* Having a revival due the need of higly availability services.
* Weird.

---

Title: Coroutines

* “The values of data local to a coroutine persist between successive
calls”;
* “The execution of a coroutine is suspended as control leaves it, only to
carry on where
