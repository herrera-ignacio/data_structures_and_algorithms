#include <stdio.h>

int fibIterative(int n)
{
    int t0 = 0, t1 = 1, s = 0, i;
    
    if (n <= 1) return n;
    
    for (i = 2; i <= n; i++)
    {
        s = t0 + t1;
        t0 = t1;
        t1 = s;
    }
    
    return s;
}

int fibRecursive(int n)
{
    if (n <= 1) return n;
    return fibRecursive(n - 2) + fibRecursive(n - 1);
}

int F[20];
int fibMemoize(int n)
{
    if (n <= 1)
    {
        F[n] = n;
        return n;
    }
    else
    {
        if (F[n-2] == -1)
            F[n-2] = fibMemoize(n-2);
        if (F[n-1] == -1)
            F[n-1] = fibMemoize(n-1);
        return F[n-2] + F[n-1];
    }
}

int main(int argc, const char * argv[])
{
    int i;
    for (i = 0; i < 20; i++)
        F[i] = -1;
    printf("%d \n", fibMemoize(20));
    return 0;
}
