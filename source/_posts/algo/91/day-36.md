---
title: day-36 837. 新21点
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
    - 滑动窗口
    - 动态规划
date: 2021-06-14 23:21:48
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/new-21-game/

## 思路

-   动态规划
-   滑动窗口

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function (n, k, maxPts) {
    //n:成立时得分最大值,k:停止抽取时最小得分,maxPts:每次得分范围
    //k-1可以抽取的最大得分
    //dp[x] 得分为 x 时进行游戏得分不超过n 的概率
    //x 的最大值为k-1+maxPts,=>dp 长度为 k+maxPts
    const dp = new Array(k + maxPts).fill(0);
    //窗口范围内和
    let sum = 0;
    //得分为[k,n]时成立
    //dp[k]-dp[k+n]时 dp=1,
    for (let i = k; i < k + maxPts; i++) {
        if (i <= n) dp[i] = 1;
        sum += dp[i];
    }

    for (let i = k - 1; i >= 0; i--) {
        dp[i] = sum / maxPts;
        sum -= dp[i + maxPts];
        sum += dp[i];
    }

    return dp[0];
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

```

</details>
