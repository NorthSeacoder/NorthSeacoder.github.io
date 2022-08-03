---
title: day-35 1456. 定长子串中元音的最大数目
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
    - 哈希表
    - 数组
    - 正则
date: 2021-06-13 23:28:01
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/

## 思路

滑动窗口

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let left = 0,
        right = k;

    let sub = s.substring(left, right);
    let res = sub.match(/(a|e|i|o|u)/g)?.length ?? 0;
    let nums = res;
    while (right < s.length) {
        const last = s.charAt(right);
        const start = s.charAt(left);

        if (/(a|e|i|o|u)/.test(last)) {
            nums++;
        }
        if (/(a|e|i|o|u)/.test(start)) {
            nums--;
        }

        res = Math.max(res, nums);
        if (nums === k) break;
        // console.log(sub,start,next)
        right++;
        left++;
    }
    return res;
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
