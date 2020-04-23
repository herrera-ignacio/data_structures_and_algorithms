#include <stdio.h>

int FindLength(char *c)
{
    int i;
    for (i = 0; c[i] != '\0'; i++)
    {
        printf("char: %d \n", c[i]);
    };
    return i;
}

int main()
{
    char *s = "nacho";
    int len = FindLength(s);
    printf("The length is %d", len);
}
