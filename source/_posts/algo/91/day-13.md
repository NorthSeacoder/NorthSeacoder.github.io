---
title: day-13 104. 二叉树的最大深度
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - 树
    - 递归
    - DFS
    - BFS
date: 2021-05-22 10:54:47
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

## 思路

-   递归

## 代码

<details>
    <summary>DFS</summary>

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
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
```

</details>

## 复杂度分析

-   时间复杂度：O(n)
-   空间复杂度：O(n)

## 推荐题解

### 思路

-   广度优先搜索

### 代码

<details>
    <summary>BFS</summary>

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
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    const list = [root];
    let maxDep = 0;
    while (list.length > 0) {
        const len = list.length;
        for (let i = 0; i < len; i++) {
            //每层遍历
            const {left, right} = list.shift();
            if (right) list.push(right);
            if (left) list.push(left);
        }
        maxDep++;
    }
    return maxDep;
};
```

</details>
