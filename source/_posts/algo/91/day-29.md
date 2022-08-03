---
title: day-29 69. x 的平方根
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      - 
tags:
    - 91
    - 刷题
    - JS
    - 二分
date: 2021-06-07 09:42:40
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/sqrtx/

## 思路

二分法求最右边符合条件的值

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let left = 1,
        right = x;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        // if (mid * mid === x) return mid;
        if (mid * mid <= x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if (right < 0) return -1;
    return right;
};
```

</details>

## 复杂度分析

-   时间复杂度O(logn)
-   空间复杂度O(1)

## 推荐题解

### 思路

- 牛顿迭代法

### 关键点

-

### 代码

<details>
    <summary>展开查看</summary>

```js

```

</details>
