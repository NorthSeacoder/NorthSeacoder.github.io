---
title: day-45
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - 搜索
    - BFS
    - DFS
    - 哈希表
date: 2021-06-23 09:20:32
hide: true
---

## 题目地址

## 思路

-   dfs 暴力枚举

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */
class Solution {
    solve(root) {
        const res = [];
        const map = new Map();
        const dfs = (node, row, col) => {
            if (!node) return;
            dfs(node.left, row - 1, col + 1);
            res.push({val: node.val, row, col});
            dfs(node.right, row + 1, col + 1);
        };
        dfs(root, 0, 0);
        const rowSet = new Set();
        const arr = [];
        res.sort((a, b) => a.col - b.col)
            .sort((a, b) => a.row - b.row)
            .forEach(({val, row}) => {
                if (!rowSet.has(row)) {
                    arr.push(val);
                    rowSet.add(row);
                }
            });

        return arr;
    }
}
```

</details>

## 复杂度分析

-   时间复杂度 O(nlogn)
-   空间复杂度 O(n)

## 推荐题解

### 思路

- BFS

### 关键点

- 哈希表记录

### 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * class Tree {
 *   constructor(val, left=null, right=null) {
 *     this.val = val
 *     this.left = left
 *     this.right = right
 *   }
 * }
 */
class Solution {
    solve(root) {
        const queue = [[root, 0]];
        const rowSet = new Set();
        const arr = [];
        while (queue.length) {
            const [node, row] = queue.shift();
            if (!rowSet.has(row)) {
                arr.push({val: node.val, row});
                rowSet.add(row);
            }
            if (node.left) {
                queue.push([node.left, row - 1]);
            }
            if (node.right) {
                queue.push([node.right, row + 1]);
            }
        }
        return arr.sort((a, b) => a.row - b.row).map(({val}) => val);
    }
}
```

</details>
