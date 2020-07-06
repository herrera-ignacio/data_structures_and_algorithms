"""
Python program to demostrate Stack implementation.
We prefer collecitons.deque as it provides O(1) time complexity
for append and pop operations, as compared to list which provides O(n).
"""

from collections import deque


class Stack:
    def __init__(self):
        self._stack = deque()

    def size(self):
        return len(self._stack)

    def is_empty(self):
        return (self.size() == 0)

    def top(self):
        return self._stack[-1]

    def push(self, element):
        self._stack.append(element)
        return self

    def pop(self):
        if not self.is_empty():
            return self._stack.pop()
        else:
            raise IndexError


def main():
    stack = Stack()
    stack.push('a').push('b').push('c')

    print(f'Stack size: {stack.size()}')
    print(f'Stack empty: {stack.is_empty()}')
    print(f'Stack top: {stack.top()}')

    print(f'First out -> {stack.pop()}')
    print(f'Second out -> {stack.pop()}')
    print(f'Third out -> {stack.pop()}')


if __name__ == '__main__':
    main()
