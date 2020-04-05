#include <stdio.h>

int factorial(int n)
{
    if (n == 0) return n;
    return factorial(n - 1) * n;
}

int combinatoryNumber(int n, int r)
{
    int num, den;
    num = factorial(n);
    den = factorial(r) * factorial(n - r);
    return num / den;
}

int combinatoryNumberRecursive(int n, int r)
{
    if (n == r || r == 0)
        return 1;
    return combinatoryNumberRecursive(n - 1, r - 1) + combinatoryNumberRecursive(n, r - 1);
}

int main(int argc, const char * argv[])
{
    printf("%d \n", combinatoryNumberRecursive(4, 2));
    return 0;
}
