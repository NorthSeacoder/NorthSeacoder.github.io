---
title: day-64 78. 子集
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - 分治
date: 2021-07-12 10:22:32
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/subsets/

## 思路

回溯

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = [];
    const arr = [];
    const back = (start) => {
        res.push([...arr]);
        for (let i = start; i < nums.length; i++) {
            arr.push(nums[i]);
            back(i + 1);
            arr.pop();
        }
    };
    back(0);
    return res;
};
```

</details>

## 复杂度分析

-   时间复杂度
-   空间复杂度

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
