---
title: day-5 232. 用栈实现队列
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
    - 栈
    - 队列
date: 2021-05-14 09:40:31
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/implement-queue-using-stacks/

## 思路

-   用栈模拟,则数组只能调用 push()和 pop()

## 代码

<details>
    <summary>展开查看</summary>

```javascript
/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
    this.stack = [];
    this._stack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    let cur = null;
    while ((cur = this.stack.pop())) {
        this._stack.push(cur);
    }
    const res = this._stack.pop();
    while ((cur = this._stack.pop())) {
        this.stack.push(cur);
    }
    return res;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.stack[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.stack.length === 0;
};
```

</details>

## 复杂度分析

-   时间复杂度：push/peek/empty:O(1);pop:O(n)
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
