# Overview

We are gonna try to:

* Introduce Futures, coroutines and generators as a nice control abstraction for 
  asyncronous programming
* By means of some light review of some python implementations.
* Hopefully make some controversial arguments.

---

# Concurrency is...

* Essentially a hard problem.
* With a number of half-correct solutions.
* We deal with more and more everyday.

---

# Concurrency...

Has a number of half-right solution...

You allready know about this so we'll just skeem


----

- Threads

  The first thing most people use for concurrency.
  
  * Easy to create by the thousands - *Light*
  * Shared program data:
    * Non-deterministic scheduling.
    * Non atomic operations.
    * Locking primitives hard enough to downplay the benefits.

---


# Coroutines

* Not a new thing: Conway (1963), Knuth (1980).
* A control abstraction .
* Having a revival due the need of higly availability services.
* Weird.

---

# Coroutines

* “The values of data local to a coroutine persist between successive
calls”;
* “The execution of a coroutine is suspended as control leaves it, only to
carry on where
