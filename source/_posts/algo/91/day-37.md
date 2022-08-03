---
title: day-37 438. 找到字符串中所有字母异位词
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
date: 2021-06-15 20:53:32
hide: true
---

## 题目地址
https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {

    const len = p.length;
    const map = new Map();
    const res = [];
    for (let i = 0; i < len; i++) {
        const cur = p.charAt(i);
        map.set(cur, (map.get(cur) || 0) + 1)
    }
    for (let i = 0; i < len; i++) {
        const cur = s.charAt(i);
        if (map.has(cur)) {
            map.set(cur, (map.get(cur) || 0) - 1)
        }
    }
    if ([...map.values()].every((char) => char === 0)) res.push(0)

    for (let i = 0; i < s.length - len; i++) {
        const removedCahr = s.charAt(i);
        const joinedChar = s.charAt(i + len);
        // console.log(joinedChar)
        if (map.has(joinedChar)) {
            map.set(joinedChar, (map.get(joinedChar) || 0) - 1)
        }
        if (map.has(removedCahr)) {
            map.set(removedCahr, (map.get(removedCahr) || 0) + 1)
        }

        if ([...map.values()].every((char) => char === 0)) res.push(i + 1)
    }
    return res
};
```

</details>

## 复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(1)

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
