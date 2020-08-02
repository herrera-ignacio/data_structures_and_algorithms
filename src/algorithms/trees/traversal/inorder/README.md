# Inorder Traversal

> Special case of Depth-First Order.

This traversal algorithm is designed specifically for a binary tree.

During an __inorder traversal__, we visit a position between the recusive traversals of its left and right subtree.

It can be informally viewed as visiting the nodes of T 'from left to right'. Indeed, for every position p, the inorder traversal visits p after all the positions in the left subtree of p, and before all the positions in the right subtree of p.

![inorder](https://chenlidotblog.files.wordpress.com/2019/05/inorder.gif)

## Recursive

```
inorder(node):
  if (node == null):
    return
  inorder(node.left)
  visit(node)
  inorder(node.right)
```

## Iterative

```
iterativeInorder(node):
  s = empty stack
  while (not s.isEmpty() or node not null):
    if (node not null):
      s.push(node)
      node = node.left
    else:
      node = s.pop()
      visit(node)
      node = node.right
```
