---
title: day-26 26. 删除有序数组中的重复项
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
    - 数组
date: 2021-06-04 07:09:59
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

## 思路

-   快慢指针
-   双指针所在元素相同时删掉满指针所在位置的元素
-   不同时快慢各进一位

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let slow = 0,
        fast = 1;
    while (fast < nums.length) {
        if (nums[slow] === nums[fast]) {
            nums.splice(slow, 1);
        } else {
            slow++;
            fast++;
        }
    }
    return nums.length;
};
```

</details>

## 复杂度分析

-   时间复杂度：O(n)
-   空间复杂度：O(1)

## 推荐题解

-   考虑用读写双指针

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
