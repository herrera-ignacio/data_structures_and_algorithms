#include <stdio.h>

void initializeArrays()
{
    int A[5]; // empty
    int B[5] = {1,2,3,4,5}; // 1,2,3,4,5
    int C[5] = {2,4,6}; // 2,4,6,0,0
    int D[5] = {0}; // 0,0,0,0,0
    int E[] = {6,7,8,9,10}; // 6,7,8,9,10
}

void accessingArray()
{
    int A[5] = {1,2,3,4,5};
    int i;
    
    for(i = 0; i < 5; i++)
        printf("(%u) %d \n", &A[i], A[i]);
}

int main(int argc, const char * argv[]) {
    accessingArray();
    return 0;
}
