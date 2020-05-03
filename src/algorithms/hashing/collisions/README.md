# Collisions Resolution

Two keys may hash to the same slot. While a well-designed, _random_-looking hash function can minimize the number of collisions, we still need a method for resolving the collisions that do occur.

* [Chaining](./chaining)
* [Open Addressing](./open-addressing)
	* Linear Probing
	* Quadratic Probing
	* Double Hashing
