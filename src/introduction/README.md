# Introduction

I'll briefly introduce you to basic concepts you need to understand
before studying data structure and algorithms.

## TOC

* Data Structures
* Databases & Data Structures
* Program Memory
	* Stack Memory
	* Heap Memory
* Physical data structure
    * Array
    * Linked list
* Logical data structure
    * Stack
    * Queues
    * Tree
    * Graph
    * Hash Table
* Abstract Data Type (ADT)
* Time and Space complexity
* Recursion

### Data Structures

A program has to be brought into main memory for its execution, as well as data has to be brought into main memory for its processing, so than program instructions can perform operations into data.

How do we organize data in main memory so that it can be efficiently utilized by our applications?

We call _Data Structures_ to the _arrangement/collection__ of data items (in memory), so that they can be utilized efficiently during the execution of a program.

Therefore, Data Structures are formed in main memory, during the execution time of a program.

### Databases & Data Structures

When you are pulling data from storages (databases commonly use hard-disk), the data needs to be brough into main memory for its use during execution of a program, facing also the need of Data Structures.

### Program Memory

The entire main memory is divided into three sections and used by a program:
* Code section
* Stack
* Heap

If I want to run a program, first the machine code of the program should be brought inside the main memory (_Code section_). Once is loaded, the CPU will start executing the program, and the program will utilize the remaining memory (_Stack_ and _Heap_).

### Stack Memory

Also called Stack frame/Activation record of main/any other function.

Memory allocations happens statically (_Static Memory Allocation_).

The variables you declare inside your program, will be allocated in memory in the Stack. The size of this memory was decided at compile time only.

This section of memory behaves like a stack. This memory is automatically created and destoryed, the programmer doesn't have to do anything for its allocation and destruction, just declare the variable.

### Heap Memory

Memory allocations happens dynamically (_Dynamic Memory Allocation_).

_Heap_ just means "pilling up". If the things are kept one above another in an exact order, or just randomly, in a tower-like arrangement, we use the term _Heap_.

Heap memory should be treated as a resource. You take the memory and when you don't require it anymore, you release it. Program can't directly access heap memory.

If you do not release the heap memory, then the memory will be still belonging to your program, and that memory cannot be used again, so it causes loss of memory (_memory leak_). 

### Physical Data Structures

These data structures decides or defines how the memory is organized/allocated. They are meant for storing the data.

* Array
* Linked list

### Logical Data Structures

These data structures are implemented using physical data structures. They are meant for manipulating the data stored in memory.

* Stack
* Queues
* Tree
* Graph
* Hash Table

### Abstract Data Type (ADT)

* Representation of data
* Operations on Data 

Abstract means _hiding internal details_. We don't need how the operations are actually
being performed in the binary form inside the main memory.

### Time and Space Complexity

![complexity 1](../../assets/images/complexity)
![complexity 2](../../assets/images/complexity2)
![complexity 3](../../assets/images/complexity3)
