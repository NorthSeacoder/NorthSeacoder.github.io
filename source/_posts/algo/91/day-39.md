---
title: day-39 Number of Operations to Decrement Target to Zero
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
  - 滑动窗口
date: 2021-06-17 08:50:19
hide: true
---

## 题目地址
https://binarysearch.com/problems/Number-of-Operations-to-Decrement-Target-to-Zero
## 思路
- 滑动窗口
- 不连续=>连续
## 代码

<details>
    <summary>展开查看</summary>

```js
class Solution {
    solve(nums, target) {
        if (target === 0) return 0
        let numsSum = nums.reduce((a, b) => a + b, 0)
        let left = 0, right = 0, res = nums.length * 2, sum = numsSum - target;
        while (right < nums.length) {

            let end = nums[right];
            sum -= end
            // console.log(sum, left, right);

            while (sum < 0 && left <= right) {
                sum += nums[left]
                left++;
            }
            if (sum === 0) {
                res = Math.min(res, nums.length-(right - left + 1));
                // console.log(end, res)
            }
            right++
        }
        return res === nums.length * 2 ? -1 : res
    }
}
```

</details>

## 复杂度分析

-   时间复杂度O(n)
-   空间复杂度O(1)

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
