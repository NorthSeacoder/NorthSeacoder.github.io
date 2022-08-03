---
title: day-2 821. 字符的最短距离
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
tags:
    - 91
    - 刷题
    - JS
    - 数组
    - 贪心
    - 滑动窗口
date: 2021-05-11 20:58:00
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/shortest-distance-to-a-character/

## 思路

-   字符串拆成数组,并查询 c 的所有下标
-   遍历数组查询每个下标到 c 的最短距离

## 代码

<details>
    <summary>展开查看</summary>

```javascript
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    const res = [],
        sIndexs = [];

    s.split('').forEach((char, index) => {
        if (char === c) sIndexs.push(index);
    });
    for (let i = 0; i < s.length; i++) {
        let tem = sIndexs
            .map((item) => Math.abs(i - item))
            .sort((a, b) => a - b)
            .shift();
        res.push(tem);
    }
    return res;
};
```

</details>

## 复杂度分析

-   时间复杂度：O(n\*m) m 为字符 c 在 s 中的重复次数
-   空间复杂度：O(1)

## 官方题解

-   暴力循环(左右遍历)
-   贪心
-   滑动窗口

## 推荐题解
