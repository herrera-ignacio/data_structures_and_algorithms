# Preorder traversal

> Special case of Depth-First Order.

Root of tree `T` is visited first and then the subtrees rooted at its children are traversed recursively. If the tree is ordered, then the subtrees are traversed according to the order of the children.

## Recursive

```
preorder(T, p):
  perform the 'visit' action for position p
  for each child c in T.children(p) do:
    preorder(T, c)
```

## Iterative

```
iterativeInorder(node):
  if (node == null):
    return
  s = empty stack
  while (not s.isEmpty()):
    node = s.pop()
    visit(node)
    // right child is pushed first so that left is processed first
    if node.right not null:
      s.push(node.right)
    if node.left not null:
      s.push(node.left)
```
