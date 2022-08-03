---
title: day-73 40. 组合总和 II
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - 剪枝
date: 2021-07-21 10:00:09
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/combination-sum-ii/

## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const res = [];
    candidates.sort((a, b) => a - b);
    if (candidates[0] > target) return res;
    const len = candidates.length;
    // const set = new Set()
    const backTracking = (index, sum, arr) => {
        if (sum > target || index > len) return;
        if (sum === target) {
            // const key = arr.join();
            // if (!set.has(key)) {
            res.push(arr);
            //     set.add(key)
            // }
            return;
        }

        for (let i = index; i < len; i++) {
            if (i > index && candidates[i] === candidates[i - 1]) continue;
            backTracking(i + 1, sum + candidates[i], arr.concat(candidates[i]));
        }
    };
    backTracking(0, 0, []);
    return res;
};
```

</details>

## 复杂度分析

-   时间复杂度：O(2^n)
-   空间复杂度：O(n)

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
