---
title: day-3 1381. 设计一个支持增量操作的栈
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
tags:
    - 91
    - 刷题
    - JS
    - 栈
    - 数组
date: 2021-05-12 09:02:00
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/

## 思路

-   直接利用数组模拟

## 代码

<details>
<summary>展开查看</summary>

```js
/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
    this.maxSize = maxSize;
    this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
    if (this.stack.length < this.maxSize) {
        this.stack.unshift(x);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
    return this.stack.shift() || -1;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
    const n = this.stack.length;
    for (let i = n - 1; i >= 0 && n - 1 - i < k; i--) {
        this.stack[i] += val;
    }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
```

</details>

## 复杂度分析

-   时间复杂度:push/pop:O(1);inc:O(k)
-   空间复杂度:O(maxSize)

## 官方题解

-   进一步优化:增加增量数组,只在 pop 时求增量后的值

## 推荐题解

-   shift/unshift 换成 push/pop,(针对 js 的优化)
