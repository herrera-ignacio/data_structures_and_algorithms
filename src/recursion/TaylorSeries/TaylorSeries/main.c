#include <stdio.h>

double e(int x, int n)
{
    // p: power of x
    // f: (n)th factorial
    static double p = 1, f = 1;
    double r;
    
    if (n == 0)
        return 1;
    r = e(x, n - 1);
    p = p * x;
    f = f * n;
    return r + p / f;
}

double eHorner(int x, int n)
{
    // Taylor Series using Horner's Rule
    static double s;
    if (n == 0)
        return s;
    s = 1 + x * s / n;
    return e(x, n-1);
}

double eIterative(int x, int n)
{
    double s = 1;
    int i;
    double num = 1;
    double den = 1;
    
    for (i = 1; i <= n; i++)
    {
        num *= x;
        den *= i;
        s += num/den;
    }
    
    return s;
}

int main() {
    printf("%lf \n", e(1, 10));
    return 0;
}
