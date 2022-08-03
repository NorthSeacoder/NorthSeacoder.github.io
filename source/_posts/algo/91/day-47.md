---
title: day-47 198. 打家劫舍
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
date: 2021-06-25 07:46:26
hide: true
---

## 题目地址
https://leetcode-cn.com/problems/house-robber/
## 思路
dp
## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const dp = [];//dp[i]i-1个房子能偷到的金额和
    dp[0] = 0;
    dp[1] = 0;
    for (let i = 2; i < nums.length + 2; i++) {
        //dp[2] = Math.max(dp[1],dp[0]+nums[1])

        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 2])
    }
    return dp[nums.length + 1]
};
```

</details>

## 复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(n)

## 推荐题解

### 思路

- 滚动数组

### 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 0) return 0;
    if (nums.length <= 2) return Math.max(...nums);
    let a = nums[0], b = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
        [a, b] = [b, Math.max(a + nums[i], b)]
    }
    return b
};
```

</details>

### 复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(1)