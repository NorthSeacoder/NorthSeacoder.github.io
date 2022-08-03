---
title:  day-62 932. 漂亮数组
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - 分治
    - 数学
date: 2021-07-10 17:47:22
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/beautiful-array/

## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number} n
 * @return {number[]}
 */
var beautifulArray = function (n) {
    const map = new Map();
    map.set(1, [1]);
    const build = (n) => {
        if (map.has(n)) return map.get(n);
        //左奇,右偶
        const left = build((n + 1) >> 1).map((v) => 2 * v - 1); //奇数侧
        const right = build(n >> 1).map((v) => 2 * v); //偶数侧;
        const res = [...left, ...right];
        map.set(n, res);
        return res;
    };
    return build(n);
};
```

</details>

## 复杂度分析

-   时间复杂度：O(nlogn)
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
