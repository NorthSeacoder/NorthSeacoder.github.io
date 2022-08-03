---
title: day-63 260. 只出现一次的数字 III
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - 位运算
date: 2021-07-11 17:21:57
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/single-number-iii/

## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    const xor = nums.reduce((res, cur) => res ^ cur, 0);
    const mask = xor & -xor; //取异或值最后一个二进制位为 1 的数字
    const res = [0, 0];
    nums.forEach((num) => ((num & mask) == 0 ? (res[0] ^= num) : (res[1] ^= num)));
    return res;
};
```

</details>

## 复杂度分析

-   时间复杂度：O(n)
-   空间复杂度：O(1)

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
