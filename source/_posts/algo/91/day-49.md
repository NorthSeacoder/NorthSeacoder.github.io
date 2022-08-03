---
title: day-49 1143. 最长公共子序列
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
date: 2021-06-27 22:21:26
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/longest-common-subsequence/

## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const dp = new Array(text1.length + 1).fill(0).map(() => new Array(text2.length + 1).fill(0));
    //dp[i][j]=>text1[0..i-1]与 text2[0...j-1]的最长公共子序列长度;
    for (let i = 1; i <= text1.length; i++) {
        const char1 = text1.charAt(i - 1);
        for (let j = 1; j <= text2.length; j++) {
            const char2 = text2.charAt(j - 1);
            if (char1 === char2) {
                //当前位置相同时,长度为前一组(i,j 均减 1)加 1
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                //不相同时,取前一组(两种情况)最大值
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[text1.length][text2.length];
};
```

</details>

## 复杂度分析

-   时间复杂度：O(n^2)
-   空间复杂度：O(n^2)

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
