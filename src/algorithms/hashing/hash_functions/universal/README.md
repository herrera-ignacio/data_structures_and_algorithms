# Universal Hashing

At the beginning of execution we select the hash function at random from a arefully designed class of functions. Randomization guarantees that no single input will always evoke worst-case behavior.

Because we randomly select the hash function, the algorithm can behave differently on each execution, even for the same input, guanteeing good average-case performacne for any input.

```
h(k) = [(ak + b) mod p] mod m

p is a prime number > the universe U of keys
k is the key
a and b are random integers between 0..p-1
```

We seek to achieve the following:

```
if k1 != k2 => Probability{h(k1) = h(k2)} = 1/m
```
