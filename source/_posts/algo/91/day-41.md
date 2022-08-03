---
title: day-41 52. N皇后 II
comment: valine
categories:
  - - 算法
    - 刷题
    - 91
    
tags:
  - 91
  - 刷题
  - JS
  - 回溯
  - 位运算
date: 2021-06-19 17:33:21
hide: true
---

## 题目地址
https://leetcode-cn.com/problems/n-queens-ii/
## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let res = 0;
    const Fcol = new Set(),//列
        diagDown = new Set(),//->\->col-row
        diagUp = new Set()//->/->col+row

    const setQueue = (row, col) => {
        const down = col - row;
        const up = col + row;
        //同列,或同对角线
        if (Fcol.has(col) || diagDown.has(down) || diagUp.has(up)) return false
        Fcol.add(col);
        diagUp.add(up);
        diagDown.add(down)
        return true
    }

    const unSetQueue = (row, col) => {
        // console.log('unSetQueue',Fcol)
        const down = col - row;
        const up = col + row;
        Fcol.delete(col);
        diagUp.delete(up);
        diagDown.delete(down)
    }

    const dfs = (nums, row) => {
        // console.log(nums)
        if (nums === 0) {
            res++
        } else {

            for (let i = 0; i < n; i++) {
                if (!setQueue(row, i)) continue
                // console.log(row, i)
                dfs(nums - 1, row + 1);
                unSetQueue(row, i)
            }
        }
    }
    dfs(n, 0);
    return res;
};
```

</details>

## 复杂度分析

- 时间复杂度：O(n!)
- 空间复杂度：O(n)

## 推荐题解

### 思路

- 位运算

### 关键点

-

### 代码

<details>
    <summary>展开查看</summary>

```js

```

</details>
