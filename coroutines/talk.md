
title: Overview

We are gonna try to:

- Introduce the coroutines and Futures as a nice control structures for 
  asyncronous programs
- By means of some light review of a python framework.
- Hopefully make some controversial arguments.

---

title: Tornado.
class: nobackground fill

![Tornado ](img/tornado.gif)

---

title : Concurrency is:

- Essentially a hard problem.
- With a number of half-correct solutions.
- We deal with more and more everyday.

---

content_class: flexbox vcenter

![Concurrency ](img/dining_philosophers.png)

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

title: Components of Tornado.
content_class: flexbox vcenter

![Tornado components ](img/tornado_components.png)

---

title: Tornado's I/O Loop.

You probably seen one before.

- Single thread.
- Works best on top of [epoll](http://en.wikipedia.org/wiki/Epoll).
- So good that it's the basis for the upcoming async features in python's standard library.

---

title: Coroutines.
class: nobackground fill

![Sagan Stare ](img/stare.gif)

---

title: Coroutines

- You... actually did seen these before.
- Or some of it's specific cases such as:

---

title: Subroutines

Have 1 entry point

Take only one input

<pre class="prettyprint" data-lang="python">
    def subrutine(name):
        print "Hello", name

    subrutine('World')
</pre>

---

title: Subroutines

<iframe width="800" height="400" frameborder="0" src="http://pythontutor.com/iframe-embed.html#code=def+subrutine(name)%3A%0A++++print+%22Hello%22,+name%0A%0Asubrutine('World')&cumulative=false&heapPrimitives=false&drawParentPointers=false&textReferences=false&showOnlyOutputs=false&py=2&curInstr=0"> </iframe>

---

title: Generators.
 

Have N entry points.

Take no input.


<pre class="prettyprint" data-lang="python">
    def generator():
        for x in ["Hello", "World"]:
            yield x
        
    g = generator()
    print g.next()
    print g.next()
    # print g.next() # StopIteration
</pre>

---

title: Generators

<iframe width="800" height="400" frameborder="0" src="http://pythontutor.com/iframe-embed.html#code=def+generator()%3A%0A++++for+x+in+%5B%22Hello%22,+%22World%22%5D%3A%0A++++++++yield+x%0A++++%0Ag+%3D+generator()%0Aprint+g.next()%0Aprint+g.next()%0A%23+print+g.next()+%23+StopIteration&cumulative=false&heapPrimitives=false&drawParentPointers=false&textReferences=false&showOnlyOutputs=false&py=2&curInstr=0"> </iframe>

---

title: Yield Magic!

- Delegates excecution.
- *Like* threads but lighter (easy to create by tens of thousands).
- Makes context switch mechanic implicit.
- That could not be inmediately easy to grasp.

---

title: Coroutines

Have N entry points

Take M inputs

<pre class="prettyprint" data-lang="python">
    def cosubroutine():
        x,y = <b>(yield)</b>
        result = x + y
        yield result

    args = (1,2)

    sub = cosubroutine()
    sub.next()              # start the coroutine
    result = sub.send(args) # send the values into it
    print(result)
</pre>

---

title: Coroutines

<iframe width="800" height="400" frameborder="0" src="http://pythontutor.com/iframe-embed.html#code=def+cosubroutine()%3A%0A++++x,y+%3D+(yield)%0A++++result+%3D+x+%2B+y%0A++++yield+result%0A%0Aargs+%3D+(1,2)%0A%0Asub+%3D+cosubroutine()%0Asub.next()++++++++++++++%23+start+the+coroutine%0Aresult+%3D+sub.send(args)+%23+send+the+values+into+it%0Aprint+result&cumulative=false&heapPrimitives=false&drawParentPointers=false&textReferences=false&showOnlyOutputs=false&py=2&curInstr=0"> </iframe>

---

title: Coroutines

Better!

<pre class="prettyprint" data-lang="python">
    def coroutine(f):
        def start(*args,**kwargs):
            co = f(*args,**kwargs)
            co.next()
            return co
        return start

    <b>@coroutine</b>
    def cosubroutine():
        x,y = (yield)
        result = x + y
        yield result

    sub = cosubroutine()
    print( sub.send((1,2)) )
</pre>

---

title: Coroutines

<iframe width="800" height="400" frameborder="0" src="http://pythontutor.com/iframe-embed.html#code=def+coroutine(f)%3A%0A++++def+start(*args,**kwargs)%3A%0A++++++++co+%3D+f(*args,**kwargs)%0A++++++++co.next()%0A++++++++return+co%0A++++return+start%0A%0A%40coroutine%0Adef+cosubroutine()%3A%0A++++x,y+%3D+(yield)%0A++++result+%3D+x+%2B+y%0A++++yield+result%0A%0Asub+%3D+cosubroutine()%0Aprint(+sub.send((1,2))+)&cumulative=false&heapPrimitives=false&drawParentPointers=false&textReferences=false&showOnlyOutputs=false&py=2&curInstr=0"> </iframe>

---

title: Coroutine Trampolining:

<pre class="prettyprint" data-lang="python">
    # A subroutine
    def add(x,y):
        yield x+y

    # A function that calls a subroutine
    def main():
        r = yield add(2,2)
        print r
        yield

    def run():
        m = main()       
        # An example of a "trampoline"
        sub = m.send(None)             
        result = sub.send(None)
        m.send(result)

    run()
</pre>

---

title: Coroutine Trampolining:

<iframe width="800" height="400" frameborder="0" src="http://pythontutor.com/iframe-embed.html#code=%23+A+subroutine%0Adef+add(x,y)%3A%0A++++yield+x%2By%0A%0A%23+A+function+that+calls+a+subroutine%0Adef+main()%3A%0A++++r+%3D+yield+add(2,2)%0A++++print+r%0A++++yield%0A%0Adef+run()%3A%0A++++m+%3D+main()+++++++%0A++++%23+An+example+of+a+%22trampoline%22%0A++++sub+%3D+m.send(None)+++++++++++++%0A++++result+%3D+sub.send(None)%0A++++m.send(result)%0A%0Arun()&cumulative=false&heapPrimitives=false&drawParentPointers=false&textReferences=false&showOnlyOutputs=false&py=2&curInstr=0"> </iframe>


---

title: Coroutines are light.
class: nobackground fill

![Dandelion ](img/dandelion.gif)

---

title: Yield from:

- Introduced in Python 3.3
- Allows delegation from subgenerator


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


<iframe width="800" height="400" frameborder="0" src="http://pythontutor.com/iframe-embed.html#code=def+driver(g)%3A%0A++++print(next(g))%0A++++g.send(42)%0A%0Adef+gen1()%3A%0A++++val+%3D+yield+'okay'%0A++++print(val)%0A++++yield%0A%0Adef+gen2()%3A%0A++++for+i+in+gen1()%3A%0A++++++++yield+i%0A%0Adriver(gen2())&cumulative=false&heapPrimitives=false&drawParentPointers=false&textReferences=false&showOnlyOutputs=false&py=3&curInstr=0"> </iframe>

---

title: Yield from.


<pre class="prettyprint" data-lang="python">
    def driver(g):
        print(next(g))
        g.send(42)

    def gen1():
        val = yield 'okay'
        print(val)
        yield

    def gen2():
        <b>yield from gen1()</b>

    driver(gen2())
</pre>

---

title: Yield from


<iframe width="800" height="400" frameborder="0" src="http://pythontutor.com/iframe-embed.html#code=def+driver(g)%3A%0A++++print(next(g))%0A++++g.send(42)%0A%0Adef+gen1()%3A%0A++++val+%3D+yield+'okay'%0A++++print(val)%0A++++yield%0A%0Adef+gen2()%3A%0A++++yield+from+gen1()%0A%0Adriver(gen2())&cumulative=false&heapPrimitives=false&drawParentPointers=false&textReferences=false&showOnlyOutputs=false&py=3&curInstr=0"> </iframe>

---

title: Yield from Exception


<pre class="prettyprint" data-lang="python">
    def throwing_driver(g):
        print(next(g))
        g.throw(RuntimeError('booh'))

    def gen1():
        try:
            val = yield 'okay'
        except RuntimeError as exc:
            print(exc)
        else:
            print(val)
        yield

    def gen2():
        yield from gen1()  # unchanged

    throwing_driver(gen2())
</pre>

---

title: Yield from Exception


<iframe width="800" height="400" frameborder="0" src="http://pythontutor.com/iframe-embed.html#code=def+throwing_driver(g)%3A%0A++++print(next(g))%0A++++g.throw(RuntimeError('booh'))%0A%0Adef+gen1()%3A%0A++++try%3A%0A++++++++val+%3D+yield+'okay'%0A++++except+RuntimeError+as+exc%3A%0A++++++++print(exc)%0A++++else%3A%0A++++++++print(val)%0A++++yield%0A%0Adef+gen2()%3A%0A++++yield+from+gen1()++%23+unchanged%0A%0Athrowing_driver(gen2())&cumulative=false&heapPrimitives=false&drawParentPointers=false&textReferences=false&showOnlyOutputs=false&py=3&curInstr=0"> </iframe>

---

title: Futures.
class: nobackground fill

![Future is hazy an uncertain ](img/future.gif)

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

<pre class="prettyprint" data-lang="python">
    class AsyncHandler(RequestHandler):
        <b>@asynchronous</b>
        def get(self):
            http_client = AsyncHTTPClient()
            http_client.fetch("http://example.com",
                              <b>callback=self.on_fetch</b>)
                                      
        def on_fetch(self, <b>response</b>):
            <b>do_something_with_response(response)</b>
            self.render("template.html")
</pre>

---

title: Futures

<pre class="prettyprint" data-lang="python">
    def fetch(self, request, <b>callback</b>=None, **kwargs):
        ...
        <b>future = TracebackFuture()</b>
        if callback is not None:
            callback = <b>stack_context.wrap(callback)</b>

            def handle_future(future):
                exc = future.exception()
                if isinstance(exc, HTTPError) and exc.response is not None:
                    ...
                else:
                    response = <b>future.result()</b>
                <b>self.io_loop.add_callback(callback, response)</b>
            <b>future</b>.add_done_callback(handle_future)

</pre>

---

title: Futures

<pre class="prettyprint" data-lang="python">
def coroutine(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        runner = None
        future = <b>TracebackFuture()</b>
        ...
        with ExceptionStackContext(handle_exception) as deactivate:
            try:
                result = func(*args, **kwargs)
            except (Return, StopIteration) as e:
                result = getattr(e, 'value', None)
            except Exception:
                deactivate()
                future.set_exc_info(sys.exc_info())
                return <b>future</b>
</pre>

---

title: Futures

<pre class="prettyprint" data-lang="python">
            else:
                if isinstance(result, types.GeneratorType):
                    def final_callback(value):
                        deactivate()
                        future.set_result(value)
                    runner = Runner(result, final_callback)
                    runner.run()
                    return future
            deactivate()
            <b>future.set_result(result)</b>
        return <b>future</b>
    return wrapper
</pre>

---

title: Futures.
class: nobackground fill

![Turn around ](img/turn.gif)

---

title: Coroutines + Futures  offer great oportunity for refactor
subtitle: Callback Style:

<pre class="prettyprint" data-lang="python">
    class AsyncHandler(RequestHandler):
        @asynchronous
        def get(self):
            http_client = AsyncHTTPClient()
            http_client.fetch("http://example.com",
                              <b>callback=self.on_fetch</b>)
                                      
        def <b>on_fetch</b>(self, response):
            <b>do_something_with_response(response)</b>
            self.render("template.html")
</pre>

---

title: Coroutines + Futures offer great oportunity for refactor
subtitle: coroutine style:

<pre class="prettyprint" data-lang="python">
    class GenAsyncHandler(RequestHandler):
        @gen.coroutine
        def get(self):
            http_client = AsyncHTTPClient()
            response = <b>yield http_client.fetch("http://example.com")</b>
            <b>do_something_with_response(response)</b>
            self.render("template.html")
</pre>

---

title: Futures (cont.)

- If you are thinking: Deferreds. You are spot on!
- If you are thinking Monads. You are kinda... some what... spot on!

---

title: Monads.
class: nobackground fill

![Deal with it ](img/deal-with-it.gif)

---

title: Conclusion

- An IO Loop (event loop) on a single thread is good strategy to handle 
  concurrent connections.
- Using coroutines (greenlets) makes async calls elegant and slim,
  but implicit.
- Lazy IO is a great honking idea!.

---

title: Sources

- [Yield from explained](https://groups.google.com/forum/#!topic/python-tulip/bmphRrryuFk)
- [A curious curse of coroutines](http://www.dabeaz.com/coroutines/)
- [Twisted deferred deconstructed](https://docs.google.com/document/d/10WOZgLQaYNpOrag-eTbUm-JUCCfdyfravZ4qSOQPg1M/edit)
- [Tornado Web Framework](http://tornadoweb.org)
- [PEP 3156 Asynchronous IO Support Rebooted](http://www.python.org/dev/peps/pep-3156/)
- [Guido Van Rossum 2013 Keynote](http://www.youtube.com/watch?v=sOQLVm0-8Yg)