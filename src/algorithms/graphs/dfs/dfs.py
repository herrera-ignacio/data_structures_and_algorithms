from typing import Set, Dict

def depth_first_search(graph: Dict, start: str) -> Set[int]:
    visited, stack = set(start), [start]
    while stack:
        v = stack.pop()

        for w in graph[v]:
            if w not in visited:
                visited.add(w)
                stack.append(w)
    return visited


def demo():
    G = {
        "A": ["B", "C", "D"],
        "B": ["A", "D", "E"],
        "C": ["A", "F"],
        "D": ["B", "D"],
        "E": ["B", "F"],
        "F": ["C", "E", "G"],
        "G": ["F"],
    }

    print(depth_first_search(G, "A"))

if __name__ == "__main__":
    demo()