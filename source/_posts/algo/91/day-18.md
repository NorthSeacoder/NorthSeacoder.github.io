---
title: day-18 987. 二叉树的垂序遍历
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
    - dfs
date: 2021-05-27 22:05:51
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/vertical-order-traversal-of-a-binary-tree/

## 思路

-   dfs 转成数组
-   先按值排序,再按行排序,最后按列排序
-   把列转换成二维数组的 key 值
-   push

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
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
    let res = [];
    let tem = [];
    const dfs = (node, row, col) => {
        if (!node) return;
        tem.push({val: node.val, row, col});
        dfs(node.left, row + 1, col - 1);
        dfs(node.right, row + 1, col + 1);
    };

    dfs(root, 0, 0);
    tem.sort((a, b) => a.val - b.val)
        .sort((a, b) => a.row - b.row)
        .sort((a, b) => a.col - b.col);
    let minCol = tem[0].col;

    tem.map(({val, col}) => ({val, col: col - minCol})).forEach(({val, col}) => {
        if (Array.isArray(res[col])) {
            res[col].push(val);
        } else {
            res[col] = [val];
        }
    });

    return res;
};
```

</details>

## 复杂度分析

-   时间复杂度：O(n)
-   空间复杂度：O(n)

## 推荐题解

### 思路



### 关键点

-

### 代码

<details>
    <summary>展开查看</summary>

```js

```

</details>
