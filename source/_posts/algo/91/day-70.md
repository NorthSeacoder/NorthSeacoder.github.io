---
title: day-70 1319. 连通网络的操作次数
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
date: 2021-07-18 16:31:57
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/number-of-operations-to-make-network-connected/

## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
    //找到多余线缆数量;找到未连接电脑数量\
    const uf = new UF(n);

    for (let connection of connections) {
        uf.add(connection[0]);
        uf.add(connection[1]);
        uf.union(...connection);
    }
    return uf.calc();
};
class UF {
    constructor(n) {
        this.root = {};
        this.lines = 0; //多余线缆
        this.pcs = n; //pc集合
    }

    add(pc) {
        if (!this.root[pc] && this.root[pc] !== 0) {
            this.root[pc] = pc;
        }
    }

    find(pc) {
        if (this.root[pc] === pc) {
            return pc;
        }
        return (this.root[pc] = this.find(this.root[pc]));
    }

    contact(a, b) {
        return this.find(a) === this.find(b);
    }

    union(a, b) {
        const parentA = this.find(a);
        const parentB = this.find(b);
        if (parentA !== parentB) {
            this.root[parentA] = parentB;
            this.pcs--;
        } else {
            this.lines++;
        }
    }
    calc() {
        console.log(this.pcs, this.lines);
        const {lines, pcs} = this;
        return lines >= 0 && lines >= pcs - 1 ? pcs - 1 : -1;
    }
}
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
