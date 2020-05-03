# Division Method

We map a key `k` into one of the `m` slots, by taking the remainder of k divided by m. That is:

```
h(k) = k mod m
```

When using this method, we usually avoid certain values of m. For eample, m should not be a power of 2. A prime not to close to an exact power of 2 is often a good choice for m.

