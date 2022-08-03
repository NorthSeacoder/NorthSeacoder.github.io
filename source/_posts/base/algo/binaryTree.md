---
title: 二叉树
comment: valine
categories:
    - - 基础
      - algo
tags:
    - 基础
    - algo
    - 数据结构
date: 2022-03-01 12:52:51
---

> 算法模板

<!-- more -->

## 根据数组构建二叉树

```js
const buildTreeByArray = (array, index) => {
    if (index >= array.length) return null;
    if (array[index] === null) return null;
    const node = new TreeNode(array[index]);
    node.left = buildTreeByArray(array, index * 2 + 1);
    node.right = buildTreeByArray(array, index * 2 + 2);
    return node;
};
const binaryTree = function (array) {
    return buildTreeByArray(array, 0);
};

const arr = [1, 2, 3, null, 4, 5, null, null, null, 6, 7];
let root = binaryTree(arr);
```

## 深度优先遍历

### 前序遍历

[144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)

#### 递归

```js
const preorder = (root, res = []) => {
    if (!root) return;
    res.push(root.val);
    preorder(root.left);
    preorder(root.right);
    return res;
};
```

#### 非递归

```js
const preorder = (root) => {
    const stack = [];
    const res = [];
    if (root) stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        if (!node) {
            res.push(stack.pop().val);
            continue;
        }
        if (node.right) stack.push(node.right); // 右
        if (node.left) stack.push(node.left); // 左
        stack.push(node); // 中
        stack.push(null); //标记要处理节点
    }
    return res;
};
```

### 中序遍历

[94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

#### 递归

```js
const inorder = (root, res = []) => {
    if (!root) return;
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
    return res;
};
```

#### 非递归

```js
const inorder = (root) => {
    const stack = [];
    const res = [];
    if (root) stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        if (!node) {
            res.push(stack.pop().val);
            continue;
        }
        if (node.right) stack.push(node.right); // 右
        stack.push(node); // 中
        stack.push(null);
        if (node.left) stack.push(node.left); // 左
    }
    return res;
};
```

### 后序遍历

[145. 二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)

#### 递归

```js
const postorder = (root, res = []) => {
    if (!root) return res;
    postorder(root.left, res);
    postorder(root.right, res);
    res.push(root.val);
    return res;
};
```

#### 非递归

```js
const postorder = (root) => {
    const stack = [];
    if (root) stack.push(root);
    while (stack.length) {
        const node = stack.pop();
        if (!node) {
            res.push(stack.pop().val);
            continue;
        }
        stack.push(node); // 中
        stack.push(null);
        if (node.right) stack.push(node.right); // 右
        if (node.left) stack.push(node.left); // 左
    }
    return res;
};
```
