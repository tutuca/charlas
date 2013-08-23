title: Overview

We are gonna try to:

- Introduce the coroutines and Futures as a nice control 
  abstraction for asyncronous programming
- By means of some light review of some python implementations.
- Hopefully make some controversial arguments.

---

title : Concurrency is:

- Essentially a hard problem.
- With a number of half-correct solutions.
- We deal with more and more everyday.

---

title: We didn't do much of this with python:

- Unless you really know when to use threads. 
- You can afford to launch enough processes.
- You can afford to setup some message transport and distribute the load.
- Some other number of exotic attemps (gevent, asyncoro, twisted).

---

class: nobackground fill

![Tornado ](img/tornado.gif)

---

title: Tornado.

- Promoted as a "server framework".
- Actually a collection of nice tools for async.

---

- An I/O Loop
- Corutines, Tasks.
- Futures.

---

title: Tornado's I/O Loop.

You probably seen one before.

- Single thread.
- Works best on top of [epoll](http://en.wikipedia.org/wiki/Epoll).
- So good that it's the basis for the upcoming async features in python's standard library.

---

title: Coroutines

You... actually did seen these before...

Or some of it's specific cases such as:

---

title: Subroutines

- Have 1 entry point
- Take only one input

<pre class="prettyprint" data-lang="python">
    def subrutine(name):
        print "Hello", name

    subrutine('World')
</pre>

---

title: Generators
 
- Have N entry points
- Take no input

<pre class="prettyprint" data-lang="python">
    def generator():
        yield "Hello"
        yield "World"

    g = generator()
    print g.next()
    print g.next()
</pre>

---

title: Coroutines


- Have N entry points
- Take M inputs

<pre class="prettyprint" data-lang="python">
    def cosubroutine():
        x,y = (yield) title: !!
        result = x + y
        yield result

    args = (1,2)

    sub = cosubroutine()
    sub.next()              title: start the coroutine
    result = sub.send(args) title: send the values into it
    print(result)
</pre>

---

Better!

<pre class="prettyprint" data-lang="python">
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
</pre>

---

title: Coroutines offer great oportunity for refactor
subtitle: Callback Style:

<pre class="prettyprint" data-lang="python">
    class AsyncHandler(RequestHandler):
        @asynchronous
        def get(self):
            http_client = AsyncHTTPClient()
            http_client.fetch("http://example.com",
                              callback=self.on_fetch)

        def on_fetch(self, response):
            do_something_with_response(response)
            self.render("template.html")
</pre>

---

title: Coroutines offer great oportunity for refactor
subtitle: coroutine style:

<pre class="prettyprint" data-lang="python">
    class GenAsyncHandler(RequestHandler):
        @gen.coroutine
        def get(self):
            http_client = AsyncHTTPClient()
            response = yield http_client.fetch("http://example.com")
            do_something_with_response(response)
            self.render("template.html")
</pre>

---

title: Yield Magic!

- Delegates excecution.
- *Like* threads but lighter (easy to create by tens of thousands).
- Makes context switch mechanic implicit.
- That could not be inmediately easy to grasp.

---

title: Coroutine Trampolining:

---

title: Yield from:

- Introduced in Python 3.3
- Allows delegation from subgenerator

---

title: Yield from:

<pre class="prettyprint" data-lang="python">
    def driver(g):
        print(next(g))
        g.send(42)

    def gen1():
        val = yield 'okay'
        print(val)
        yield

    def gen2():
        <b>for i in gen1():
            yield i</b>

    driver(gen2())
</pre>

---

title: Yield from

<pre class="prettyprint" data-lang="python">
    def driver(g):
        print(next(g))
        g.send(42)

    def gen1():
        val = yield 'okay'
        print(val)
        yield

    def gen2():
        <b> yield from gen1()</b>

    driver(gen2())
</pre>

---

title: Futures

Ok... you probably never heard of that.

---

title: Futures

- High level interface for asynchronously executing callable.
- A layer of lazy evaluation for async operations
- Tornado's default thread pool

---

title: Futures (cont.)

- If you are thinking: Deferreds. You are spot on!
- If you are thinking Monads. You are kinda... some what... spot on!


---

title: Futures (cont.)

<pre class="prettyprint" data-lang="python">
    class GenAsyncHandler(RequestHandler):
        <b>@gen.coroutine</b>
        def get(self):
            http_client = AsyncHTTPClient()
            response = <b>yield</b> http_client.fetch("http://example.com")
            do_something_with_response(response)
            self.render("template.html")
</pre>

---

title: Conclusion

- An IO Loop (event loop) on a single thread is good strategy to handle 10k 
  connections if you can afford...
- Using coroutines (greenlets) which makes async calls elegants and slimmer
  but implicit.
- Lazy IO is a great honking idea.

---

title: Sources

- [Yield from explained](https://groups.google.com/forum/#!topic/python-tulip/bmphRrryuFk)
- [A curious curse of coroutines](http://www.dabeaz.com/coroutines/)
- [Twisted deferred deconstructed](https://docs.google.com/document/d/10WOZgLQaYNpOrag-eTbUm-JUCCfdyfravZ4qSOQPg1M/edit)
- [Tornado Web Framework](http://tornadoweb.org)
- [PEP 3156 Asynchronous IO Support Rebooted](http://www.python.org/dev/peps/pep-3156/)
- [Guido Van Rossum 2013 Keynote](http://www.youtube.com/watch?v=sOQLVm0-8Yg)