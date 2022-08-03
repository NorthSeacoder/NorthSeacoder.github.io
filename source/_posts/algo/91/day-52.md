---
title: day-52 464.我能赢吗
comment: valine
categories:
  - - 算法
    - 刷题
    - 91
    
tags:
  - 91
  - 刷题
  - JS
  - dp
  - 位运算
date: 2021-06-30 11:39:32
hide: true
---

## 题目地址
https://leetcode-cn.com/problems/can-i-win/description/
## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(max, total) {
    //特例
    if (max >= total) return true;
    if (((1 + max) * max) / 2 < total) return false;
    const map = new Map();
    // const visited = new Array(max+1)
    const dfs = (visited, sum) => {
        const state = visited.toString();
        if (map.has(state)) return map.get(state);
        if (sum >= total) {
            //上局赢,本局输
            map.set(state, false);
            return false;
        }

        for (let i = 1; i <= max; i++) {
            if (!visited[i]) {
                visited[i] = 1;
                const result = dfs(visited, sum + i); //下一局结果
                visited[i] = 0;
                if (!result) {
                    map.set(state, true);
                    return true;
                }
            }
        }
        map.set(state, false);
        return false;
    };
    return dfs(new Array(max + 1).fill(0), 0);
};
```

</details>

## 复杂度分析

-   时间复杂度O(2^n)
-   空间复杂度O(2^n)

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
