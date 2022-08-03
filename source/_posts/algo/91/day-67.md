---
title: day-67 17. 多次搜索
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
date: 2021-07-15 10:38:13
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/multi-search-lcci/

## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {string} big
 * @param {string[]} smalls
 * @return {number[][]}
 */
var multiSearch = function (big, smalls) {
    const res = Array.from(smalls, () => []);
    const trie = {};
    smalls.forEach((str, index) => {
        let node = trie;
        for (let char of str) {
            if (!node[char]) node[char] = {};
            node = node[char];
        }
        node.isWord = true;
        node.index = index;
    });
    for (let i in big) {
        let node = trie;
        for (let inx = i; inx < big.length; inx++) {
            let char = big[inx];
            if (!node[char]) break;
            node = node[char];
            const {isWord, index} = node;
            if (!!isWord) {
                res[index].push(i);
            }
        }
    }
    return res;
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
