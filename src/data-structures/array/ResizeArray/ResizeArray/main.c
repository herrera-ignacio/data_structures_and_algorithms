#include <stdio.h>
#include <stdlib.h>

int main(int argc, const char * argv[]) {
    int *p, *q;
    int i;
    
    p = (int *)malloc(5 * sizeof(int));
    for (i = 0; i < 5; i++)
        p[i] = i+1;
    
    // We create a new array with the size we want
    q = (int *)malloc(10 * sizeof(int));
    // We copy previous elements
    for (i = 0; i < 5; i++)
        q[i] = p[i];
    
    // We release the first array from memory
    free(p);
    // We make p point to new array address
    p = q;
    // We delete q reference
    q = NULL;
    
    return 0;
}
