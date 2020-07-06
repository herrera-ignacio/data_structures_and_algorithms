"""
Python program to demostrate Queue implementation.
We prefer collecitons.deque as it provides O(1) time complexity
for append and pop operations, as compared to list which provides O(n).
"""

from collections import deque


class Queue:
    def __init__(self):
        self._queue = deque()

    def size(self):
        return len(self._queue)

    def is_empty(self):
        return (self.size() == 0)

    def top(self):
        return self._queue[0]

    def last(self):
        return self._queue[-1]

    def push(self, element):
        self._queue.append(element)
        return self

    def pop(self):
        if not self.is_empty():
            return self._queue.popleft()
        else:
            raise IndexError


def main():
    queue = Queue()
    queue.push('a').push('b').push('c')

    print(f'Queue size: {queue.size()}')
    print(f'Queue empty: {queue.is_empty()}')
    print(f'Queue top: {queue.top()}')
    print(f'Queue last-in: {queue.last()}')

    print(f'First out -> {queue.pop()}')
    print(f'Second out -> {queue.pop()}')
    print(f'Third out -> {queue.pop()}')


if __name__ == '__main__':
    main()
