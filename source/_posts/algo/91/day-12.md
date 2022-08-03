---
title: day-12 146. LRU 缓存机制
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
    - 链表
date: 2021-05-21 08:07:07
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/lru-cache/

## 思路

-   stack 存值
-   keys 存 key
-   每次 get 时把相应的 key 放在首位
-   插入时插头

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.stack = new Array(capacity).fill(-1);
    this.keys = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.keys.includes(key)) return -1;
    let keys = this.keys.filter((val) => val != key);
    this.keys = [key, ...keys];
    return this.stack[key];
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    this.stack[key] = value;
    if (this.keys.includes(key)) {
        let keys = this.keys.filter((val) => val != key);
        this.keys = [key, ...keys];
    } else {
        this.keys.unshift(key);
        if (this.keys.length > this.capacity) {
            this.keys.pop();
        }
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```

</details>

## 复杂度分析

-   时间复杂度：O(n)
-   空间复杂度：O(n)

## 推荐题解

### 思路

- 链表实现

### 关键点

-

### 代码

<details>
    <summary>展开查看</summary>

```js

```

</details>
