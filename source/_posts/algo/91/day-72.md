---
title: day-72 39. 组合总和
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
date: 2021-07-20 10:19:02
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/combination-sum/

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
var combinationSum = function (candidates, target) {
    const res = [];
    candidates.sort((a, b) => a - b);
    const len = candidates.length;
    if (candidates[0] > target) return res;
    const back = (index, sum, arr) => {
        if (sum === target) {
            res.push(arr);
            return;
        }
        if (sum > target) return;

        for (let i = index; i < len; i++) {
            back(i, sum + candidates[i], arr.concat(candidates[i]));
        }
    };
    back(0, 0, []);
    return res;
};
```

</details>

## 复杂度分析

-   时间复杂度：O(nlogn)
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
