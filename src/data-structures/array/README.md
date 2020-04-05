# Array

Collection of elements of the same type. Arrays are _vector variables_, each element of the array will be stored in memory contiguously. There are different ways to initialize an array depending on the programming language of choice, you can then access its elements using a given _index_ to traverse the array.


### Static vs Dynamic Array

You can have array's size being static or dynamic, also having an array being allocated on Stack or Heap.

For example:

```
int A[5];
int n;
cin >> n;
int B[n]
```

### Rezising Array

Array's size cannot be grown, as memory needs to be contiguous and we have no way to assert that enough contiguous memory addreses are available (objets may be using them). For that reason, we say that array's size cannot be resized and to accomplish this, we need to create a new array.

