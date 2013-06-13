title: Overview
build_lists: true

We are gonna try to:

- Explore some patterns for concurrent programming used in web services.
- Introduce coroutines as an elegant approach to avoid callback hell.
- Hopefully make some controversial arguments.

---

title: Concurrency is...
build_lists: true

- Essentially a hard problem.
- With a number of half-correct solutions.
- We deal with more and more everyday.
- Cool!

---

title: Threads
build_lists: true

The first thing most people use for concurrency.

- An independant task running inside the program.
- Easy to create by the thousands
- Shared program data:
  - Non-deterministic scheduling.
  - Non atomic operations.
  - Locking primitives hard enough to downplay the benefits.

---

  x = 0
  Thread 1                 Thread2 
  --------                 -------
  x = x + 1                x = x - 1

# ????

---

title: Threads
subtitle: really hard

A programmer had a problem. He thought to himself, "I know, I'll solve it with threads!". 

has Now problems. two he

---

title: Process
build_lists: true

- Heavier than threads.
- Isolated memory (*nothing shared*).
- Run automatically on multiple cores.
- Easier to distribute.
- No locks.

---

title: Multiprocessing



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
