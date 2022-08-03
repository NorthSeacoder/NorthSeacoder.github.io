---
title: day-32 Minimum Light Radius
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
date: 2021-06-10 22:34:01
hide: true
---

## 题目地址

https://binarysearch.com/problems/Minimum-Light-Radius

## 思路

-   主要还是能力判断函数,其实就是最朴素的循环然后累加

## 代码

<details>
    <summary>展开查看</summary>

```js
class Solution {
    solve(nums) {
        nums.sort((a, b) => a - b);
        if (nums.length < 4) return 0;
        const len = nums[nums.length - 1] - nums[0];
        //2r的取值范围
        let left = 0,
            right = len / 3;
        while (left <= right) {
            let mid = left + ((right - left) >> 1);
            // console.log(left,right,mid)
            if (this.canCover(mid, nums)) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left / 2;
    }
    canCover(d, nums) {
        //判断 d 能否覆盖所有
        let start = nums[0],
            end = start + d;
        //3盏灯
        for (let i = 0; i < 3; i++) {
            let index = nums.findIndex((val) => val > end);
            // console.log(start,end,d,nums,index)
            if (index === -1) return true; //全覆盖
            start = nums[index];
            end = start + d;
        }
        return false;
    }
}
```

</details>

## 复杂度分析

-   时间复杂度 O(nlogn)
-   空间复杂度 O(n)

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
