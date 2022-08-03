---
title: day-55 322. 零钱兑换
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
    - 背包
date: 2021-07-03 17:11:25
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/coin-change/

## 思路

-   完全背包

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const len = coins.length;
    coins = coins.sort((a, b) => b - a);
    if (amount === 0) return 0;
    if (coins[coins.length - 1] > amount) return -1;
    //dp[i] 和为 i 的最少硬币数;
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    //dp[i]= min(dp[i],dp[i-coins[j]]+1)
    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < len; j++) {
            if (i - coins[j] < 0) continue;
            dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
        }
    }
    console.log(dp);
    return dp[amount] === Infinity ? -1 : dp[amount];
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
