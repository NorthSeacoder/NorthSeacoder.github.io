---
title:  day-68 547. 省份数量
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - 并查集
date: 2021-07-16 21:10:19
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/number-of-provinces/

## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
    const uf = {};
    let count = 0;
    const add = (city) => {
        if (!uf[city] && uf[city] !== 0) {
            uf[city] = city;
            count++;
        }
    };
    const find = (city) => {
        if (uf[city] !== city) {
            uf[city] = find(uf[city]);
            return uf[city];
        }
        return city;
    };
    const connected = (a, b) => {
        return find(a) === find(b);
    };
    const union = (a, b) => {
        if (!connected(a, b)) {
            uf[find(a)] = find(b);
            count--;
        }
    };
    for (let i = 0; i < isConnected.length; i++) {
        for (let j = 0; j < isConnected[0].length; j++) {
            if (isConnected[i][j] === 1) {
                add(i);
                add(j);
                union(i, j);
            }
        }
    }
    return count;
};
```

</details>

## 复杂度分析

-   时间复杂度：O(n^2)
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
