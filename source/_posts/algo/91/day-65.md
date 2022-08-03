---
title: day-65 208. 实现 Trie (前缀树)
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
date: 2021-07-13 21:30:49
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/implement-trie-prefix-tree/

## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.node = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.node;
    for (let char of word) {
        if (!node[char]) {
            node[char] = {};
        }
        node = node[char];
    }
    node.isWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this.node;
    for (let char of word) {
        if (!node[char]) return false;
        node = node[char];
    }
    return !!node.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this.node;
    for (let char of prefix) {
        if (!node[char]) return false;

        node = node[char];
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
```

</details>

## 复杂度分析

-   时间复杂度：O(n), 创建 O(1)
-   空间复杂度：O(allWords)

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
