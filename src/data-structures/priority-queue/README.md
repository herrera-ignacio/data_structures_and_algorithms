# Priority Queue

Data structure for maintaining a set `S` of elements, each with an asociated value called a __key__.

Among their other applications, we can use _Max Priority Queues_ to schedule jobs, keep track of the jobs to be performed and their relative priorities. When a job is finished or interrupted, the scheduler selects the highest-priority job from among those pending by calling `Extract-Max`. The scheduler can add a new job at any time or increase priority of a job.

Alternatively, a _Min Priority Queues_ can be used in an event-driven simulator. Items in the queue are events to be simulated, each with an associated time of occurence that serves as its key. Events must be simulated in order of their time of occurrence.

## Operations

A _Priority Queue_ supports the following operations:

* Insert(S, x)
* Maximum(S), Minimum(S)
* Extract-Max(S), Extract-Min(S)
* Increase-Key(S, x, k), Decrease-Key(S, x, k)

## Implementation

_Heaps_ are a good fit to impement Priority Queues.

