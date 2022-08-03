---
title: day-42 695. 岛屿的最大面积
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
    - DFS
date: 2021-06-22 21:24:45
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/max-area-of-island/

## 思路

DFS+标记

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let res = 0;
    if (grid.length === 0 || grid[0].length === 0) return res;
    const dfs = (x, y) => {
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) return 0;
        // console.log(x,y)
        if (grid[x][y] === 1) {
            grid[x][y] = 0;
            return dfs(x + 1, y) + dfs(x, y + 1) + dfs(x - 1, y) + dfs(x, y - 1) + 1;
        } else {
            return 0;
        }
    };

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            res = Math.max(res, dfs(i, j));
        }
    }
    return res;
};
```

</details>

## 复杂度分析

-   时间复杂度 O(MN)
-   空间复杂度 O(MN)

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
