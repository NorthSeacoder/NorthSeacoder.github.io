---
title: day-53 416.分割等和子集
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
date: 2021-07-01 13:53:59
hide: true
---

## 题目地址

## 思路
- 背包问题
## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum % 2) return false;
    const target = sum / 2;
    //dp[i][j] 前 i 个数(选/不选)总和是否为 j,需要 dp[nums-1][target],所以 length 为 target+1
    const dp = Array.from(nums).map(() => Array.from({length: target + 1}).fill(false));
    //一个都不选=>总和为 0
    for (let i = 0; i < nums.length; i++) dp[i][0] = true;
    //当前数 nums[i];j=>目标和
    //j>=nums[i]时=>当前数可选可不选,任一种可能为 true 则 dp[i][j]===true;
    //dp[i][j] = dp[i-1][j-nums[i]]||dp[i-1][j](第 i 个选或不选);
    //j<nums[i]=>当前数选中会导致超出,所以不能选
    //dp[i][j]=dp[i-1][j]
    for (let i = 1; i < nums.length; i++) {
        for (let j = 1; j <= target; j++) {
            if (j >= nums[i]) {
                dp[i][j] = dp[i - 1][j - nums[i]] || dp[i - 1][j];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[nums.length - 1][target];
};
```

</details>

## 复杂度分析

-   时间复杂度O(n^2)
-   空间复杂度O(n^2)

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
