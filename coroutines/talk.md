title: Overview
build_lists: true

We are gonna try to:

- Explore some patterns for concurrent programming.
- Use python as example.
- Compare tradeoffs briefly.
- Introduce coroutines as an elegant approach.

---

title: Concurrency is...
build_lists: true

- Essentially a hard problem.
- We deal with more and more everyday.
- Cool!

---

title: Threads

The first thing most people use for concurrency.

---

title: Threads

    import dummy_threading

    class MThread(threading.Thread):
          def __init__(self, num):
              threading.Thread.__init__(self)
              self.num = num

          def run(self):
              print "I'm thread #", self.num

    print "I'm the main thread"

    for i in range(0, 10):
        t = MThread(i)
        t.start()
        t.join()

---

title: Threads
build_lists: true

- Easy way to do concurrency.
- Easy to create by the thousands
- Hard to program with.

---

title: Threads
subtitle: really hard

A programmer had a problem. He thought to himself, "I know, I'll solve it with threads!". 

has Now problems. two he

---

title: Threads
build_lists: true

- Shared data.
- Non-deterministic scheduling.
- Non atomic operations.
- Locking primitives hard enough to downplay the benefits.

---

title: Process

---
title: Coroutines
build_lists: true

- Not a new thing: Conway (1963), Knuth (1980).
- A control abstraction ditched in favor of multi-threading.
- Having a revival due the need of higly availability services.
- Weird.

---

title: Coroutines

- “The values of data local to a coroutine persist between successive
calls”;
- “The execution of a coroutine is suspended as control leaves it, only to
carry on where
