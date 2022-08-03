---
title: day-57 455. 分发饼干
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - 贪心
date: 2021-07-05 13:38:39
hide: true
---

## 题目地址

## 思路

贪心

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let res = 0,
        i = 0,
        j = 0;
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            res++;
            i++;
            j++;
        } else {
            //下个饼干
            j++;
        }
    }

    return res;
};
```

</details>

## 复杂度分析

-   时间复杂度：O(nlogn)
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
