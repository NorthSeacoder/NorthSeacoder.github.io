---
title: day-22 3. 无重复字符的最长子串
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
    - 滑动窗口
    - 双指针
date: 2021-05-31 08:57:37
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/

## 思路

-   暴力循环

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let res = [];
    let len = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (res.includes(char)) {
            let index = res.indexOf(char);
            res = res.slice(index + 1);
        }
        res.push(char);
        len = Math.max(len, res.length);
    }
    return len;
};
```

</details>

## 复杂度分析

-   时间复杂度：O(n)
-   空间复杂度：O(n)

## 推荐题解

### 思路

-   滑动窗口
-   哈希表
-   找 substring 一般可以考虑滑动窗口，参见 lcpp 滑动窗口专题
-   找不重复一般考虑哈希表，JavaScript 有 set 可以快速判断是否重复

### 关键点

-

### 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let res = [],
        len = 0,
        slow = 0;
    const set = new Set();
    for (let fast = 0; fast < s.length; fast++) {
        const char = s.charAt(fast);
        while (set.has(char) && slow < s.length) {
            let slowChar = s.charAt(slow);
            set.delete(slowChar);
            slow++;
        }
        console.log(char, fast, slow);
        len = Math.max(len, fast - slow + 1);
        set.add(char);
    }
    return len;
};
```

</details>
