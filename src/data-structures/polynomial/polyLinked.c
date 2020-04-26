#include <stdio.h>
#include <stdlib.h>
#include <math.h>

struct Node
{
	int coef;
	int exp;
	struct Node *next;
} *poly=NULL;

void create()
{
	struct Node *t, *last = NULL;
	int num, i;

	printf("Enter number of terms: ");
	scanf("%d", &num);
	printf("Enter each term with coef and exp\n");

	for (i = 0; i < num; i++)
	{
		t = (struct Node *) malloc (sizeof(struct Node));
		scanf("%d%d", &t->coef, &t->exp);
		t->next = NULL;
		
		if (poly == NULL)
		{
			poly = last = t;
		}
		else
		{
			// We update last element to point to this newly created one
			last->next = t;
			// Now this node is the last one
			last = t;
		}
	}
}

void Display(struct Node *p)
{
	while(p)
	{
		printf("%dx%d +", p->coef, p->exp);
		p=p->next;
	}
	printf("\n");
}

long Eval(struct Node *p, int x)
{
	long val = 0;
	while(p)
	{
		val += p->coef * pow(x, p->exp);
		p = p->next;
	}
	return val;
}

int main()
{
	create();
	Display(poly);
	printf("%ld\n", Eval(poly, 1));

	return 0;
}
