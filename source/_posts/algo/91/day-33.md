---
title: day-33 Kth Pair Distance
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
    - 二分法
date: 2021-06-11 21:30:41
hide: true
---

## 题目地址

https://binarysearch.com/problems/Kth-Pair-Distance

## 思路

-   二分

## 代码

<details>
    <summary>展开查看</summary>

```js
class Solution {
    solve(nums, k) {
        //第 k 个最小的绝对值差,且 k 从 0 开始
        //=> 有 k 个小于等于该绝对值差的差
        //k 的取值范围[0,max-min]
        nums.sort((a, b) => a - b);
        let left = 0,
            right = nums[nums.length - 1] - nums[0];
        while (left <= right) {
            const mid = left + ((right - left) >> 1);
            // console.log(left, right, mid)
            if (this.getSum(mid, nums) > k) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
    getSum(diff, nums) {
        // console.log(diff)
        //获取小于等于 diff 的差值个数
        let res = 0,
            left = 0;
        for (let right = 1; right < nums.length; right++) {
            while (nums[right] - nums[left] > diff) {
                left++;
            }
            res += right - left;
        }
        return res;
    }
}
```

</details>

## 复杂度分析

-   时间复杂度O(nlogn)
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
