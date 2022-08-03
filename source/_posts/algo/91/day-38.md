---
title: day-38 76. 最小覆盖子串
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
date: 2021-06-16 22:57:28
hide: true
---

## 题目地址
https://leetcode-cn.com/problems/minimum-window-substring/
## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    //构造哈希表
    const map = new Map();
    let res = s + s;
    for (let i = 0; i < t.length; i++) {
        const cur = t.charAt(i);
        map.set(cur, (map.get(cur) || 0) + 1);
    }

    let left = 0, right = 0;
    let remain = map.size;
    while (right <= s.length) {
        let end = s.charAt(right);//a
        if (map.has(end)) {
            map.set(end, map.get(end) - 1);
            //之后再有重复的则变为负数
            if (map.get(end) === 0) remain--;
        }
        // console.log(remain)
        while (remain === 0 && left <= right) {
            if (right - left + 1 < res.length) res = s.substring(left, right+1);
            const start = s.charAt(left);
            if (map.has(start)) {
                map.set(start, map.get(start) + 1);
                //抵消负数之后
                if (map.get(start) > 0) remain++;
            }
            left++
        }

        right++

    }
    // console.log(res)
    return res.length === s.length * 2 ? '' : res
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
