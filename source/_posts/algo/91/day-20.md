---
title: day-20 347. 前 K 个高频元素
comment: valine
categories:
  - - 算法
    - 刷题
    - 91
    
tags:
  - 91
  - 刷题
  - JS
  - 哈希表
date: 2021-05-30 21:54:38
hide: true
---

## 题目地址
https://leetcode-cn.com/problems/top-k-frequent-elements/
## 思路
哈希表
## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = {}
    for (let i in nums) {
        const keys = Object.keys(map);
        if (keys.includes(String(nums[i]))) {
            map[nums[i]]++
        } else {
            map[nums[i]] = 1
        }
    }

    const sortedArr = Object.entries(map).sort((a, b) => a[1] - b[1]);
    const res = [];
    while(k>0){
        res.push(+sortedArr.pop()[0])
        k--
    }
    return res
};
```

</details>

## 复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(n)

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
