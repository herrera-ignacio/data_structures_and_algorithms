# Recursion

Recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem.

A function calling itself is a _recursive function_. Recursive functions have a __base condition__, that will avoid ending in an infinite calling cycle.

Most computer programming languages support recursion by allowing a function to call itself
within its own code. Some functional programming languages do not define any looping
constructs but rely solely on recursion to repeatedly call code.

#### Types of Recursion

* Tail
* Head
* Tree
* Indirect
* Nested

## Tail Recursion

The _recursive function_ does no more computation after making a recursive call.

For example:

```
f(int x, int y) {
    if (y == 0) { return x; }
    return f(x*y, y-1);
}
```

## Head Recursion

The _recursive function_ does all the processing it has to do, after making a recursive call.

For example:

```
f(int x, int y) {
    if (y == 0) { return x; }
    f(x, y-1)
    return x*y
}
```

## Tree Recursion

The _recursive function_ does more than one recursive call.

For example:

```
f(int x, int y) {
    if (y == 0) { return x; }
    if (x == 0) { return y; }
    f(x-1, y)
    f(x, y-1)
}
```

## Indirect Recursion

The function `A` makes a call to another function `B`, which then calls again the function `A` if some condition is true, and so on. We then have two functions calling each other until a condition fails or holds.

## Nested Recursion

A _recursive function_ makes a recursive call which takes as a param another recursive call.
