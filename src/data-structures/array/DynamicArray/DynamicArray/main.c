#include <stdio.h>

int main(int argc, const char * argv[])
{
    int A[5] = {2,4,6,8,10};
    int *p;
    int i;
    
    p = (int *)malloc(5 * sizeof(int));
    p[0] = 3;
    p[1] = 5;
    p[2] = 7;
    p[3] = 9;
    p[4] = 11;
    
    
    for (i = 0; i < 5; i++)
        printf("A[%d] %d \n", i, A[i]);
    
    for (i = 0; i < 5; i++)
        printf("p[%d] %d \n", i, p[i]);
    
    return 0;
}
