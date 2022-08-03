---
title: day-56 518. 零钱兑换 II
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
date: 2021-07-04 09:49:12
hide: true
---

## 题目地址
https://leetcode-cn.com/problems/coin-change-2/
## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    // if (amount === 0) return 0;
    //dp[i]总金额为 i 的硬币组合;
    const dp = new Array(amount + 1).fill(0);

    dp[0] = 1

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin]
        }
    }
    return dp[amount]
};
```

</details>

## 复杂度分析

- 时间复杂度：O(n*amount)
- 空间复杂度：O(amount)

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
