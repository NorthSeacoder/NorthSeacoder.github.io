---
title: day-51 688. “马”在棋盘上的概率
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
date: 2021-06-29 10:11:32
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/knight-probability-in-chessboard/

## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, r, c) {
    //在棋盘上
    const isOnBoard = (row, col) => row < n && row >= 0 && col < n && col >= 0;

    //移动后在棋盘上
    const move = (row, col, res) => {
        const steps = [
            [-1, -2],
            [-1, 2],
            [-2, -1],
            [-2, 1],
            [1, 2],
            [1, -2],
            [2, 1],
            [2, -1],
        ];
        for (const step of steps) {
            const oriRow = row - step[0];
            const oriCol = col - step[1];

            if (isOnBoard(oriRow, oriCol)) {
                res[row][col] += dp[oriRow][oriCol] * 0.125;
            }
        }
    };

    //dp[i][j]跳到点(i,j)仍留在棋盘上的概率
    let dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    dp[r][c] = 1;
    for (let i = 0; i < k; i++) {
        const res = new Array(n).fill(0).map(() => new Array(n).fill(0));

        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                move(row, col, res);
            }
        }
        dp = res;
    }
    // console.log(dp)
    return dp.reduce((sum, arr) => (sum += arr.reduce((s, c) => (s += c), 0)), 0);
};
```

</details>

## 复杂度分析

-   时间复杂度：O(kn^2)
-   空间复杂度：O(n^2)

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
