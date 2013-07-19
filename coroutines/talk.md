title: Overview

We are gonna try to:

- Introduce Futures, coroutines and generators as a nice control abstraction for 
  asyncronous programming
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
        x,y = (yield) # !!
        result = x + y
        yield result

    args = (1,2)

    sub = cosubroutine()
    sub.next()              # start the coroutine
    result = sub.send(args) # send the values into it
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

# Yield Magic!

- Delegates excecution.
- *Like* threads but lighter (easy to create by tens of thousands).
- Makes context switch mechanic implicit.
- That could not be inmediately easy to grasp.

---

# Futures

Ok... you probably never heard of that.

- High level interface for asynchronously executing callable.
- Tornado's default thread pool

<pre class="prettyprint" data-lang="python">
    class GenAsyncHandler(RequestHandler):
        <b>@gen.coroutine</b>
        def get(self):
            http_client = AsyncHTTPClient()
            response = <b>yield</b> http_client.fetch("http://example.com")
            do_something_with_response(response)
            self.render("template.html")
</pre>