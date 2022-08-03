---
title: day-24  1590. 使数组和能被 P 整除
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
    - 前缀和
    - math
date: 2021-06-02 08:28:09
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/make-sum-divisible-by-p/

## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, k) {
    let res = nums.length;
    //获取总余数
    const mod = nums.reduce((pre, cur) => (pre += cur), k) % k;
    //问题改为求 和%k = mod 的子数组
    if (mod === 0) return 0; //直接整除的时候不需要移除任何元素

    let preSum = 0; //前缀和
    const map = new Map();
    map.set(0, -1); //当子数组需要从 下标 0 开始取值的时候,前缀和为0的时候，下标取 -1
    for (let i = 0; i < nums.length; i++) {
        preSum += nums[i]; //当前的前缀和
        let curMod = (preSum + k) % k; //计算当前前缀和对 k 的余数,+k 是为了防止 preSum<k 的情况
        //为了找到 和%k=mod的子数组,除当前外,再找到一个 和%k = (curMod-mod)的子数组
        //由于(a%k)===(a%k)%k,所以需要找到 和%k =  (curMod-mod+k)%k 的前缀数组
        //利用 hhashMap 记录每个下标对应的前缀和%k,key 为余数,value 为下标
        map.set(curMod, i);
        let target = (curMod - mod + k) % k;
        if (map.has(target)) {
            res = Math.min(res, i - map.get(target));
        }
    }

    return res === nums.length ? -1 : res;
};
```

</details>

## 复杂度分析

-   时间复杂度：O(n)
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
