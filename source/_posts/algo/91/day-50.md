---
title: day-50 62. 不同路径
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - dp
date: 2021-06-29 10:11:28
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/unique-paths/

## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(1));
    //dp][i][j] 到达[i+1，j+1]的路径总数

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][n - 1];
};

```

</details>

## 复杂度分析

- 时间复杂度：O(mn)
- 空间复杂度：O(mn)

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
