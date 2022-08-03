---
title: day-19 1. 两数之和
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
  - 双指针
date: 2021-05-28 09:14:22
hide: true
---

## 题目地址
https://leetcode-cn.com/problems/two-sum/
## 思路
- 利用哈希表记录差值
## 代码

<details>
    <summary>展开查看</summary>

```js

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return [i, map.get(nums[i])]
        } else {
            map.set(target - nums[i], i);

        }
    }
};

```

</details>

## 复杂度分析
- 时间复杂度：O(n)
- 空间复杂度：O(n)

## 推荐题解

### 思路

- 双指针,或者叫缩小窗口


### 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const sorted = [...nums].sort((a,b)=>a-b);
    let left= 0,right=nums.length-1;
    while(left<right){
        let sum = sorted[left]+sorted[right];
        if(sum===target)break;
        if(sum<target){
            left++
        }else{
            right--
        }
    }
    let res = []
    for(let i in nums){
        if([sorted[left],sorted[right]].includes(nums[i])){
            res.push(i)
        };
        if(res.length===2) break 
    }
    return res
};
```

</details>
