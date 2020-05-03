# Chaining

In __chaining__, we place all the elements that hash to the same slot into the same linked list. Slot `j` contains a pointer to te head of the list of all stored elements that hash to `j`, if there are no such elements, slot `j` contains NIL.

The worst-case running time for __insertion is O(1)__, assuming the element x being inserted is not already preent in the table. If necessary, we can check this assumption _at additional cost_ by searching for an element whose key is x.key before we insert.

For __searching__, the worst-case running time is proportional to the length of the list. The average-case time is `Theta(1+alpha)` where alpha ies he _load factor__, that is the average number of elemnts stored in a chain.

We assume that any given element is equally likely to hash into an of the m slots, indepndently of where any other element has hashed to. We call this the assumption of __simple uniform hashing__.

We can __delete an element in O(1)__ if the lists are doubly linked, if not, we could first have to find x in the list T[h(x.key)] so that we could update the next attribute of x's predecessor.
