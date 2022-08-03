---
title: day-27 35. 搜索插入位置
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - 数组
    - 双指针
    - 二分法
date: 2021-06-05 12:35:14
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/search-insert-position/

## 思路

-   二分法

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let l = 0,
        r = nums.length - 1;
    if (target <= nums[l]) return l;
    if (target > nums[r]) return r + 1;
    if (target === nums[r]) return r;

    while (l <= r) {
        let center = Math.floor((r + l) / 2);
        if (nums[center] === target) return center;
        if (nums[center] < target) {
            l = center + 1;
        } else {
            r = center - 1;
        }
    }
    return l;
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
