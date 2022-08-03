---
title: day-34 778. 水位上升的泳池中游泳
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - 双指针
date: 2021-06-12 23:40:58
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/swim-in-rising-water/

## 思路

-   二分+DFS

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
    //t 定义域[grid[n-1][n-1],max(grid)];
    //t 值需要满足grid i+1 或 j+1小于 t,且持续到 n-1
    const n = grid.length;
    const max = Math.max(...grid.map((arr) => Math.max(...arr)));
    let left = grid[n - 1][n - 1],
        right = max;
    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        let res = canPass(mid, grid);
        // console.log('swimInWater', mid, res)
        if (res) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
const canPass = (t, grid) => {
    const n = grid.length;
    const seen = new Set();
    const passPoint = (i, j) => {
        if (i < 0 || j < 0 || i > n - 1 || j > n - 1 || grid[i][j] > t) return false;
        // console.log(i, j, grid[i][j])
        if (i == n - 1 && j == n - 1) {
            return true;
        }
        let key = `${i}-${j}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return passPoint(i + 1, j) || passPoint(i, j + 1) || passPoint(i - 1, j) || passPoint(i, j - 1);
    };
    return passPoint(0, 0);
};
```

</details>

## 复杂度分析

-   时间复杂度：O(nlogn)
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
