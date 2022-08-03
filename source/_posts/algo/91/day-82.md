---
title: day-82 1054. 距离相等的条形码
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - 堆
date: 2021-07-30 10:08:38
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/distant-barcodes/

## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
    const res = new Array(barcodes.length);
    const heap = new maxHeap();
    for (let code of barcodes) {
        heap.push(code);
    }
    for (let i = 0; i < barcodes.length; i += 2) {
        res[i] = heap.pop();
    }
    for (let i = 1; i < barcodes.length; i += 2) {
        res[i] = heap.pop();
    }
    return res;
};
class maxHeap {
    constructor() {
        this.heap = [0];
        this.set = new Set();
    }
    //大->上
    shiftUp(i) {
        while (i >> 1 > 0) {
            const parentI = i >> 1;
            const parent = this.heap[parentI];
            const cur = this.heap[i];
            if (cur[1] > parent[1]) {
                [this.heap[parentI], this.heap[i]] = [cur, parent];
            }
            i = parentI;
        }
    }
    getMaxChild(i) {
        const len = this.heap.length - 1;
        if (2 * i + 1 > len) return 2 * i;
        const left = this.heap[2 * i][1];
        const right = this.heap[2 * i + 1][1];
        if (left > right) return 2 * i;
        return 2 * i + 1;
    }
    //小->下
    shiftDown(i) {
        const len = this.heap.length - 1;
        while (2 * i <= len) {
            const childI = this.getMaxChild(i);
            const child = this.heap[childI];
            const cur = this.heap[i];
            if (cur[1] < child[1]) {
                [this.heap[childI], this.heap[i]] = [cur, child];
            }
            i = childI;
        }
    }

    push(val) {
        if (!this.set.has(val)) {
            this.heap.push([val, 1]);
            this.shiftUp(this.heap.length - 1);
            this.set.add(val);
        } else {
            const index = this.heap.findIndex((item) => item[0] === val);
            this.heap[index][1]++;
            this.shiftUp(index);
        }
    }

    pop() {
        if (this.heap.length === 1) return;
        if (this.heap[1][1] > 1) {
            this.heap[1][1]--;
            return this.heap[1][0];
        } else {
            const last = this.heap.length - 1;
            const res = this.heap[1][0];
            this.heap[1] = this.heap[last];
            this.heap.pop();
            this.shiftDown(1);
            this.set.delete(res);
            return res;
        }
    }
}
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
