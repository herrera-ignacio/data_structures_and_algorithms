# Breadth-First / Level order Traversal

We attempt to visit the node closest from the root that it has not already been visited. We visit all the positions at depth `d` before we visit the positions at depth `d + 1`.

> We visit every node on a level before going to a lower level.

```
breadth-first(T):
  q = empty queue
  q.enqueue(T.root)
  while not q.isEmpty() do:
    node = q.dequeue()
    visit(node)
    if node.left:
      q.enqueue(node.left)
    if node.right:
      q.enqueue(node.right)
```

## Applications

BDT is a common approach used in software for playing games. A game tree represents the possible choices of moves that might be made by a player (or computer) during a game, with the root of the tree being the initial configuration for the game.

![game tree](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Tic-tac-toe-full-game-tree-x-rational.jpg/1280px-Tic-tac-toe-full-game-tree-x-rational.jpg)

## Breadth-First Search

![BFS](https://upload.wikimedia.org/wikipedia/commons/4/46/Animated_BFS.gif)
