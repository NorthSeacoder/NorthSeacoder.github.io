---
title: day-66 677. 键值映射
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - 字典树
date: 2021-07-14 10:12:57
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/map-sum-pairs/

## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * Initialize your data structure here.
 */
var MapSum = function () {
    this.node = {};
    this.map = new Map();
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    let node = this.node;
    const map = this.map;
    if (map.has(key)) {
        const res = map.get(key);
        const diff = val - res;
        for (let char of key) {
            node = node[char];
            node.val += diff;
        }
    } else {
        for (let char of key) {
            if (!node[char]) node[char] = {val: 0};
            node = node[char];
            node.val += val;
        }
        node.isWord = true;
    }
    map.set(key, val);
};
/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    let node = this.node;
    for (let char of prefix) {
        if (!node[char]) return null;
        node = node[char];
    }
    return node.val;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
```

</details>

## 复杂度分析

-   时间复杂度：O(n),创建 O(1)
-   空间复杂度：O(allWordschar)

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
