---
title: day-71 814. 二叉树剪枝
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - dfs
    - 剪枝
date: 2021-07-19 10:33:38
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/binary-tree-pruning/

## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
    const dfs = (node) => {
        if (!node) return null;
        node.left = dfs(node.left);
        node.right = dfs(node.right);
        if (!node.left && !node.right && node.val === 0) return null;
        return node;
    };

    return dfs(root);
};
```

</details>

## 复杂度分析

-   时间复杂度：O(n)
-   空间复杂度：O(h)

## 推荐题解

### 思路

-

### 关键点

-

### 代码

<details>
    <summary>展开查看</summary>

```js

```

</details>
