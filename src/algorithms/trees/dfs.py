from typing import Set, List

left = lambda i: i * 2 + 1
right = lambda i: i * 2 + 2

def depth_first_search(tree: List, pos: int) -> List:
    visited = [tree[pos]]
    stack = [pos]
    while stack:
        v = stack.pop()
        if (tree[v] not in visited):
            visited.append(tree[v])

        if (right(v) < len(tree)):
            right_node = tree[right(v)]
            stack.append(right(v))
        if (left(v) < len(tree)):
            left_node = tree[left(v)]
            stack.append(left(v))
    
    return visited


def demo():
    arr = [1,2,3,4,5,6,7]
    print(depth_first_search(arr, 0))

if __name__ == "__main__":
    demo()
