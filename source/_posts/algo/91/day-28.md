---
title: day-28 day-28
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
date: 2021-06-06 14:46:54
hide: true
---

## 题目地址

## 思路

暴力解法

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const res = [];
    for (let i = 0; i <= nums.length - k; i++) {
        let max = getMax(nums, i, i + k);
        res.push(max);
    }
    return res;
};

const getMax = (nums, start, end) => {
    let max = -Infinity;
    for (let i = start; i < end; i++) {
        max = Math.max(max, nums[i]);
    }
    return max;
};
```

</details>

## 复杂度分析

时间复杂度: O(n \* k)
空间复杂度: O(1)

## 推荐题解

### 思路

-   维护单调递减队列
-   只需考虑新加的值与最大值的关系,中间的值并不重要

### 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const queue = new _Queue();
    const res = [];
    for (let i = 0; i < k; i++) {
        queue.push(nums[i]);
    }
    for (let i = k; i <= nums.length; i++) {
        res.push(queue.max());
        queue.push(nums[i]);
        queue.shift(nums[i - k]);
    }
    return res;
};
class _Queue {
    constructor() {
        this.list = [];
    }
    push(val) {
        const list = this.list;
        while (list[list.length - 1] < val) {
            this.list.pop();
        }
        this.list.push(val);
    }
    shift(val) {
        if (this.list[0] === val) {
            this.list.shift();
        }
    }
    max() {
        return this.list[0];
    }
}
```

</details>
