---
title: day-54 494. 目标和
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - dp
    - 回溯
date: 2021-07-02 10:00:57
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/target-sum/

## 思路

-   回溯

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    const len = nums.length;
    let res = 0;
    const bt = (index, sum) => {
        // console.log(index,sum,res)
        if (sum === target && index === len) {
            res += 1;
        }
        if (index < len) {
            bt(index + 1, sum + nums[index]);
            bt(index + 1, sum - nums[index]);
        }
    };
    bt(0, 0);
    return res;
};
```

</details>

## 复杂度分析

-   时间复杂度：O(2^n)
-   空间复杂度：O(n)

## 推荐题解

### 思路

-   背包

### 关键点

-

### 代码

<details>
    <summary>展开查看</summary>

```js

```

</details>
