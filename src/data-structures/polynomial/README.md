# Polynomial

#### Basic Representation

```
struct Term
{
	int coef;
	int exp;
}

struct Poly
{
	int n;
	struct Term *t;
}
```

Check `poly.c` example with implementation.

#### Linked List Representation

Check `linkedPoly.c` example with implementation.
