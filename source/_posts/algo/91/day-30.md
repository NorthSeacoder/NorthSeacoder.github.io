---
title: day-30 278. 第一个错误的版本
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
    - 二分法
date: 2021-06-08 07:21:12
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/first-bad-version/

## 思路

-   二分法

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 1,
            right = n;
        while (left <= right) {
            const mid = left + ((right - left) >> 1);
            if (isBadVersion(mid)) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
};
```

</details>

## 复杂度分析

-   时间复杂度：O(logn)
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
