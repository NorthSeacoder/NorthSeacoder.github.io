---
title: day-58 435. 无重叠区间
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - 贪心
date: 2021-07-06 10:01:32
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/non-overlapping-intervals/

## 思路

贪心

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    //按照结束大小排序
    intervals = intervals.sort((a, b) => a[1] - b[1]);
    const len = intervals.length;
    let count = 1,
        end = intervals[0][1];
    for (let i = 1; i < len; i++) {
        const cur = intervals[i];
        if (end <= cur[0]) {
            count++;
            end = cur[1];
        }
    }

    return len - count;
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
