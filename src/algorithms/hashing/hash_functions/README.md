# Hash Functions

* [Division method](./division)
* [Multiplication method](./multiplication)
* [Universal hashing](./universal)

## What makes a good hash function?

A good hash function satisfies (approximately) te asusmption of simple uniform hashing: each key is equally likely to hash to any of the m slots.

Unfortunately, we typically have no way to ceck this condition, since we rarely know the probability distribution from which the keys are drwan. Moreover, the keys might not be drawn independently.

In practice we can often employ heurist techniques.
