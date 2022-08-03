---
title: day-21 447. 回旋镖的数量
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
date: 2021-05-30 20:26:52
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/number-of-boomerangs/

## 思路

-   建立哈希表,key=point,value={distance:nums}
-   每个 key 的每个 distance 计算排列组合

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    if (!points || points.length < 2) return 0
    let res = 0;
    for (let point1 of points) {
        let map = new Map();
        for (let point2 of points) {
            if (point1 === point2) continue
            let distance = getDistance(point1, point2);
            map.set(distance, (map.get(distance) || 0) + 1)
        }
        const iter = map.values();
        let cur = iter.next();
        while (!cur.done) {
            res += cur.value * (cur.value - 1);
            cur = iter.next()
        }
    }
    return res
};
const getDistance = (a, b) => ((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)
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
