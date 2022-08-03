---
title: day-69 924. 尽量减少恶意软件的传播
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
date: 2021-07-17 19:49:21
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/minimize-malware-spread/

## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[][]} graph
 * @param {number[]} initial
 * @return {number}
 */
var minMalwareSpread = function (graph, initial) {
    //initial 中移除一个节点使得与 initial连通数最少;=>找到 initial 中联通最多的
    const uf = new UF();
    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[0].length; j++) {
            if (graph[i][j] === 1) {
                uf.add(i);
                uf.add(j);
                uf.union(i, j);
            }
        }
    }
    initial.sort((a, b) => a - b);
    let res = initial[0],
        max = -Infinity;
    initial
        .map((point) => uf.find(point))
        .forEach((item, index, arr) => {
            if (arr.indexOf(item) === arr.lastIndexOf(item)) {
                const nums = uf.findSize(item);
                if (nums > max) {
                    res = initial[index];
                    max = nums;
                }
            }
        });
    return res;
};

class UF {
    constructor() {
        this.root = {};
        this.nums = {}; //key=>所属集合(root[node]),value:数量
    }

    add(node) {
        if (!this.root[node] && this.root[node] !== 0) {
            this.root[node] = node;
            this.nums[node] = 1;
        }
    }

    find(node) {
        if (this.root[node] === node) return node;
        return (this.root[node] = this.find(this.root[node]));
    }

    contac(a, b) {
        return this.find(a) === this.find(b);
    }

    union(a, b) {
        let parentA = this.find(a);
        let parentB = this.find(b);
        if (parentA !== parentB) {
            this.root[parentA] = parentB;
            this.nums[parentB] += this.nums[parentA];
        }
    }

    findSize(root) {
        return this.nums[root];
    }
}
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
