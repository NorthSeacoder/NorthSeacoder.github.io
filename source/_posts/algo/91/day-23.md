---
title: day-23 30. 串联所有单词的子串
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
    - 字符串
    - 双指针
date: 2021-06-01 07:03:09
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/description/

## 思路

-   用 wordsMap 记录 words 中每个 word 出现的次数
-   双指针截取与 words 等长字符串并拆分成新的 subStrArr
-   用 subStrArr 生成新 map
-   比较 wordsMap 与 map

优化点在于剪枝

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    let res = [];
    if (!words || words.length === 0) return res;
    const wordsMap = new Map();
    words.forEach((val) => {
        wordsMap.set(val, (wordsMap.get(val) || 0) + 1);
    });
    const wordLen = words[0].length;
    const wordsLen = wordLen * words.length;
    let slow = 0,
        fast = wordsLen;
    while (fast <= s.length) {
        const subStrArr = s.substring(slow, fast).match(new RegExp(`([a-z]{${wordLen}})`, 'g'));
        let map = new Map();
        subStrArr.forEach((val) => {
            map.set(val, (map.get(val) || 0) + 1);
        });
        let valid = true;
        for (let [key, value] of map) {
            if (wordsMap.get(key) !== value) {
                valid = false;
            }
        }
        // console.log(valid,subStrArr,slow)
        if (valid) {
            //符合
            res.push(slow);
        }
        slow++;
        fast++;
    }
    return res;
};
```

</details>

## 复杂度分析

-   时间复杂度
-   空间复杂度

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
