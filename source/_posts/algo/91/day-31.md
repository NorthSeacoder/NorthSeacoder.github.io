---
title:  day-31 Triple Inversion
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
date: 2021-06-09 09:35:05
hide: true
---

## 题目地址

https://binarysearch.com/problems/Triple-Inversion

## 思路
- 构造有序数列arr,问题转换成查询 nums[i]*3在 arr 中右侧有多少数符合条件
- arr 用 sort 排序时会超时,利用之前的二分函数实现binInsert方法保证 arr 有序
## 代码

<details>
    <summary>展开查看</summary>

```js
class Solution {
    solve(nums) {
        const arr = [];
        let res = 0;
        for (let i = 0; i <= nums.length - 1; i++) {
            if (i === 0) {
                arr.push(nums[i]);
                continue;
            }
            const len = this.binSeach(arr, nums[i] * 3);
            res += len;
            this.binInsert(arr, nums[i]);
            // console.log(arr)
        }
        return res;
    }
    binInsert(arr, target) {
        let indx = this.binSeach(arr, target);
        // console.log(indx,arr,target)
        arr.splice(arr.length - indx, 0, target);
    }
    binSeach(nums, target) {
        //找到 target 在nums中右边有多少符合条件
        // nums.length-target 的最右插入位置
        let left = 0,
            right = nums.length - 1;
        while (left <= right) {
            const mid = left + ((right - left) >> 1);
            if (nums[mid] > target) {
                //[left,mid-1]
                right = mid - 1;
            }
            if (nums[mid] <= target) {
                //[mid+1,right]
                left = mid + 1;
            }
        }
        if (left > nums.length) return 0;
        return nums.length - left;
    }
}
```

</details>

## 复杂度分析

-   时间复杂度 O(nlogn)//不确定splice的复杂度...
-   空间复杂度O(n)

## 推荐题解

### 思路

-

### 关键点

- 分治算法

### 代码

<details>
    <summary>展开查看</summary>

```js

```

</details>
