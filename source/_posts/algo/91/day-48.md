---
title: day-48 673. 最长递增子序列的个数
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
date: 2021-06-26 13:05:43
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/

## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
    const len = new Array(nums.length).fill(1); //len[i]=>nums[i]结尾的最长子序列长度
    const dp = new Array(nums.length).fill(1); //dp[i]=>nums[i]结尾的最长子序列个数
    //dp[i] = max(dp[0,i-1 while(num[j]<nums[i-1])])+1
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                if (len[j] + 1 > len[i]) {
                    len[i] = len[j] + 1;
                    dp[i] = dp[j];
                } else if (len[j] + 1 === len[i]) {
                    dp[i] += dp[j];
                }
            }
        }
    }
    const maxLen = Math.max(...len);
    let res = 0;
    console.log(dp, len);
    len.forEach((val, i) => {
        if (val === maxLen) {
            res += dp[i];
        }
    });
    return res;
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
