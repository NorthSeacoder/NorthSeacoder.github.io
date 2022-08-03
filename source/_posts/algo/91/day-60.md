---
title: day-60 96. 不同的二叉搜索树
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - 分治
date: 2021-07-08 22:59:45
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/unique-binary-search-trees/

## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j <= i - 1; j++) {
            dp[i] += dp[j] * dp[i - 1 - j]; //左边*右边,每个 j 是一种组合
        }
    }
    return dp[n];
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
