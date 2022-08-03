---
title: day-46 746. 使用最小花费爬楼梯
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
date: 2021-06-24 09:47:54
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/min-cost-climbing-stairs/

## 思路

-   记忆化递归

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const map = new Map();
    const dp = (n) => {
        if (n <= 1) return cost[n];
        if (!map.has(n)) {
            map.set(n, Math.min(dp(n - 1), dp(n - 2)) + (cost[n] || 0));
        }
        return map.get(n);
    };
    return dp(cost.length);
};
```

</details>

## 复杂度分析

-   时间复杂度：O(n)
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
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    const dp = new Array(cost.length + 1).fill(0);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i = 2; i < dp.length; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + (cost[i] || 0);
    }
    return dp[dp.length - 1];
};
```

</details>

### 复杂度分析

-   时间复杂度：O(n)
-   空间复杂度：O(n)
