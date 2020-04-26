# Stack (LIFO)

Stack is an _Abstract Data Type_ that serves as a collection of elements, with two principal operations:

* __push__: adds an element
* __pop__: removes most recently addement element that was not yet removed

The order in which elements come off a stack gives rise to its alternative name, __LIFO (last in, last out)__.

Additionally, a __peek__ operation may give access to the top without modifying the stack.

The name _Stack_ comes from the analogy to a set of phyisical items stacked on top of each other.

This data structure makes it possible to implement a stack as a __single linked list__ and a pointer to the top element. A stack may be implemented to have a bounded capacity. If the stack is full and does not contain enough space to acept an entitity to be pushed, the stack is then considered to be in an overflow state.

#### Depth-First Search

A Stack is needed to implement depth-first search!
