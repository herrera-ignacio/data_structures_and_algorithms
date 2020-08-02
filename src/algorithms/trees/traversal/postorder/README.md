# Postorder Traversal

> Special case of Depth-First order.

Traverses subtrees rooted at the children of the root first, and then visits the root.

## Recursive

```
postorder(T, p):
  for each child c in T.children(p) do:
    postorder(T, c)
  perform the 'visit' action for position p
```

## Iterative

Binary tree version:

```
iterativePostorder(node):
  s = empty stack
  lastVisited = null
  while (not s.isEmpty() or node not null):
    if (node not null):
      s.push(node)
      node = node.left
    else:
      peekNode = s.peek()
      // if right child exists and traversing node
      // from left child, then move right
      if (peekNode.right not null and lastVisited not peekNode.right):
        node = peekNode.right
      else
        visit(peekNode)
        lastVisited = s.pop()
```
