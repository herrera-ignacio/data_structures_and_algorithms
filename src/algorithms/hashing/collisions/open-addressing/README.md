# Open Addressing

In __open addressing__ all elements occupy the hash table itself. That is, each table entry contains either an element of the dynamic set or NIL. When searching for an element, we systematically examine table slots until either we find the desired element or we have ascertained that the element is not in the table.

No lists and no elements  are stored outside the table, unlike in chaining, 
Thus, in open-addressing, the hash table can "fill up" so that no further insertons can be made, one consequence is that the load facor _alpha_ can never exceed 1. 

## Probe

To perform insertion uing open addresing, we succesively examine, or __probe__, the hash table until we find and empty slo in which to put the key. Instead of being fixed in the order 0,...,m-1 (which requires `Theta(n)` search time), the sequence of positions probed _depends upon the key being inserted_. To determine which slots to probe, we extend the hash function to include the probe number as a second input.

```
h: U x {0,1,...,m-1} -> {0,1,...,m-1}
```

We require that for every k, the __probe sequence__ `<h(k,0),...,h(k, m-1)>` be a permutation of `<0,...,m-1>` so that every hash-table position is eventually considered as a slot for a new key as the table fils up.

## Algorithms

#### Insert

```
Hash-Insert(T,k)
	i = 0
	repeat
		j = h(k,i)
		if T[j] == NIL
			return j
		else i = i+1
	until i == m
	error "hash table overflow"
```

### Search

```
Hash-Search(T,k)
	i = 0
	repeat
		j = h(k, i)
		if T[j] == k
			return j
		i = i + 1
	until T[j] == NIL or i == m
	return NIL
```

## Variants

Given an ordinary hash function `h': U -> {0,...,m-1}` which we refer to as an __auxiliary hash function__, we have the following variants:

* Linear Probing
* Quadratic Probing
* Double Hashing

#### Linear Probing

The method of __linear probing__ uses the hash function:

```
h(k, i) = (h'(k) + i) mod m
```

#### Quadratic Probing

__Quadratic Probing__ uses the hash function of the form:

```
h(k,i) = (h'(k) + c_1 * i + c_2 * i^2) mod m
```

#### Double Hashing

__Double hashing__ uses a hash funtion of the form:

```
h(k, i) = (h_1(k) + i * h_2(k)) mod m
```

Where both h_1 and h_2 are auxiliary hash functions.

