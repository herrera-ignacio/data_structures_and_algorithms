# Radix Sort

| Algorithm      | Worst time | Average time | Space |
|----------------|------------|--------------|-------|
| Radix sort	 | O(w * n)   | O(w * n)     | O(w * n) | 

> Given n d-digit numbers, in which each digit can take up to k possible values, RADIX-SORT correctly sorts this numbers in __Theta(d(n+k))__ time if the stable sort it uses takes Theta(n+k) time.

![radix sort](./radix.png)

Radix sort is the algorithm used by the card-sorting machines you now find only in computer museums.

The cards have 80 columns, and in each column a machine can punch a hole in one of 12 places. The sorter can be mechanically "programmed" to examine a given column of each card in a deck and distribute the card into one of 12 bins depending on which place has been punched. An operator can then gather the cards bin y bin. 

Since the card sorter can look at only one column at a time, the problem of sorting n cards on a d-digit number requires a sorting algorithm.

Radix sort solves the problem of card sorting by sorting on the __least significant digit first__. The algorithm then combines the cards into a single deck with the cards in the 0 bin preceding the cards in the 1 preceding the cards in the 2 bin, and so on... Then it sorts the entire deck again on the second-least significant digit, and recombines the deck in a like manner.

Only __d__ passes through the deck are required to sort.

Digits __sorts must be stable__.

The operators had to be wary about not changing the order of the cards as they come out of a bin, even though all the cards in a bin have the same digit in the chosen column.

### Usage

We sometimes use radix sort so sort records of informaton that are keyed by multiple fields. 
