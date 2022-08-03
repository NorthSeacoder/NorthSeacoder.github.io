---
title: day-43 1162. 地图分析
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
date: 2021-06-22 21:28:42
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/as-far-from-land-as-possible/

## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
    let res = -1;
    if (grid.length === 0 || grid[0].length === 0) return res;
    const DIR = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1],
    ];
    const getDis = (x1, y1, x2, y2) => Math.abs(x1 - x2) + Math.abs(y1 - y2);
    const validPoint = (x, y) => {
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
            return false;
        }
        return true;
    };
    const bfs = (x, y) => {
        const queue = [[x, y]];
        const visited = new Set();
        while (queue.length) {
            const [x1, y1] = queue.shift();
            // console.log(x1,y1)
            const key = `${x1}:${y1}`;
            if (visited.has(key)) continue;
            visited.add(key);
            if (grid[x1][y1] === 1) {
                // grid[x1][y1] = -1
                return getDis(x, y, x1, y1);
            } else if (grid[x1][y1] === 0) {
                for (const d of DIR) {
                    const na = d[0] + x1;
                    const nb = d[1] + y1;
                    if (validPoint(na, nb) && !visited.has(`${na}:${nb}`)) queue.push([na, nb]);
                }
            }
        }
        return -1;
    };

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 0) {
                res = Math.max(bfs(i, j), res);
            }
        }
    }

    return res;
};
```

</details>

## 复杂度分析

-   时间复杂度：O(n^2)
-   空间复杂度：O(n)

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
