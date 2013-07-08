title: Overview
build_lists: true

We are gonna try to:

- Introduce Futures, coroutines and generators as a nice control abstraction for 
  asyncronous programming
- By means of some light review of some python implementations.
- Hopefully make some controversial arguments.

---

title: Concurrency is...
build_lists: true

- Essentially a hard problem.
- With a number of half-correct solutions.
- We deal with more and more everyday.

---

title: We didn't do much of this with python:
build_lists: true

- Unless you really know when to use threads. 
- You can afford to launch enough processes.
- You can afford to setup some message transport and distribute the load.
- Some other number of exotic attemps (gevent, asyncoro, twisted).

---

title: Tornado.
build_lists: true

- Promoted as a "server framework".
- Actually a collection of nice tools for async.

---

- An I/O Loop
- Corutines, Tasks.
- Futures.

---

title: Tornado's I/O Loop.
build_lists: true

You probably seen one before.

- Single thread.
- Works best on top of [epoll](http://en.wikipedia.org/wiki/Epoll).
- So good that it's the basis for the upcoming async features in python's standard library.

---

title: Coroutines
build_lists: true

You... actually did seen these before...


--- 

title: Coroutines
build_lists: true

- Subroutines have ( N=1, M=1 ):

  1 entry point
  Take only one input

<iframe width="800" height="500" frameborder="0" src="http://pythontutor.com/iframe-embed.html#code=def+subrutine(name+%3D+%22World!%22)%3A%0A++++print+%22Hello%22,+name%0A++++%0Asubrutine()%0Asubrutine(name%3D%22Taller!%22)%0A%0A&cumulative=false&heapPrimitives=false&drawParentPointers=false&textReferences=false&showOnlyOutputs=false&py=2&curInstr=0"> </iframe>

---

- Generators have ( N, M=0 ):

  N entry points
  Take no input

<iframe width="800" height="500" frameborder="0" src="http://pythontutor.com/iframe-embed.html#code=def+generator()%3A%0A++++yield+'Hello'%0A++++yield+'Wold'%0A%0Afor+x+in+generator()%3A%0A++++print(x)%0A%0Ag+%3D+generator()%0A%0Aprint(g.next())%0Aprint(g.next())%0A%23+print(g.next())+%23+StopIteration%0A%0A&cumulative=false&heapPrimitives=false&drawParentPointers=false&textReferences=false&showOnlyOutputs=false&py=2&curInstr=18"> </iframe>

---

- Coroutines have (N, M):


def cosubroutine():
    x,y = (yield) # !!
    result = x + y
    yield result

args = (1,2)

sub = cosubroutine()
sub.next()              # start the coroutine
result = sub.send(args) # send the values into it
print(result)

  N entry points
  Take M inputs

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


title: Coroutines
build_lists: true

* Not a new thing: Conway (1963), Knuth (1980).
* A control abstraction .
* Having a revival due the need of higly availability services.
* Weird.

---

title: Coroutines
build_lists: true

* “The values of data local to a coroutine persist between successive
calls”;
* “The execution of a coroutine is suspended as control leaves it, only to
carry on where
