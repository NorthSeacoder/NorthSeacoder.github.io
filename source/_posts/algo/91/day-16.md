---
title: day-16 513. 找树左下角的值
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
    - bfs
date: 2021-05-25 08:01:17
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/find-bottom-left-tree-value/

-   其实就是查最后一层第一个值,不一定是左子树

## 思路

-   dfs
-   先序遍历,中序也行,只要保证左子树比右子树先处理

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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    let maxDep = 0;
    let res = root.val;
    const dfs = (node, curDep) => {
        if (!node) return;
        if (curDep > maxDep) {
            maxDep = curDep;
            res = node.val;
        }
        dfs(node.left, curDep + 1);
        dfs(node.right, curDep + 1);
    };
    dfs(root, 1);
    return res;
};
```

</details>

## 复杂度分析

-   时间复杂度：O(n)
-   空间复杂度：O(h)

## 推荐题解

### 思路

-   bfs

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
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    let curLevel = [root];
    let res = root.val;
    while (curLevel.length) {
        const len = curLevel.length;
        const nextLevel = [];
        for (let i = 0; i < len; i++) {
            curLevel[i].left && nextLevel.push(curLevel[i].left);
            curLevel[i].right && nextLevel.push(curLevel[i].right);
        }
        res = curLevel[0].val;
        curLevel = nextLevel;
    }
    return res;
};
```

</details>
