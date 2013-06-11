title: Concurrency is...

---

title: ... an old problem.
class: nobackground fill

![](img/dining_philosophers.png)

---

title: I know! I'll use Threads!

<blockquote> A programmer had a problem. He thought to himself, "I know, I'll solve it with threads!". has Now problems. two he
</blockquote>

---

title: ... comming soon to python

<iframe width="800" height="300" frameborder="0" src="http://pythontutor.com/iframe-embed.html#code=def+cb(value)%3A%0A++++print+value.replace(%22boil+%22,+%22serve+%22)%0A%0Adef+f(value,+callback)%3A%0A++++value+%3D+value+%2B+%22+some+eggs%22%0A++++callback(value)%0A%0Af(%22boil%22,+cb)&cumulative=false&heapPrimitives=false&drawParentPointers=false&textReferences=false&showOnlyOutputs=false&py=2&curInstr=6"> </iframe>


---

class: image

![](./img/yuno.jpg)

---

title: Coroutines
class: fill

![](./img/dafuq.jpg)

---

>- Not a new thing: Conway (1963), Knuth (1980).
>- A control abstraction ditched in favor of multi-threading.
>- Having a revival due the need of higly availability services.
>- Weird.

---

title: Coroutines

- “The values of data local to a coroutine persist between successive
calls”;
- “The execution of a coroutine is suspended as control leaves it, only to
carry on where
