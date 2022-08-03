---
title: day-14 100. 相同的树
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
    - dfs
    - bfs
    - 树遍历
date: 2021-05-23 14:05:45
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/same-tree/

## 思路

-   递归,dfs 遍历树

## 代码

<details>
    <summary>递归</summary>

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if ((!p && q) || (p && !q)) return false;

    if (q.val !== p.val) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```

</details>

## 复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(n)

## 推荐题解

### 思路

- bfs

### 关键点

- 注意边界

### 代码

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    const qList = [q],
        pList = [p];

    while (qList.length == pList.length) {
        if (qList.length === 0) return true;
        let curP = pList.shift();
        let curQ = qList.shift();

        if ((!curP && curQ) || (curP && !curQ)) return false;
        console.log(curP, curQ);

        if (curP.val !== curQ.val) return false;
        if (curP.left || curQ.left) {
            pList.push(curP.left);
            qList.push(curQ.left);
        }

        if (curP.right || curQ.right) {
            pList.push(curP.right);
            qList.push(curQ.right);
        }
    }
    return false;
};
```

</details>
