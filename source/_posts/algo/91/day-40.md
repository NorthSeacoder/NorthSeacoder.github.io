---
title: day-40
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
date: 2021-06-18 10:01:30
hide: true
---

## 题目地址

## 思路

-   穷举
    -   Number.toString(2)=>转换二进制
    -   还可以用 n&(n-1)去掉 2 进制最右侧的 1

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
    const res = [];
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 60; j++) {
            if (binOne(i) + binOne(j) === turnedOn) {
                res.push(`${i}:${j > 9 ? j : '0' + j}`);
            }
        }
    }
    return res;
};
const binOne = (num) => {
    const bin = Number(num).toString(2);
    // console.log(bin)
    return String(bin).match(/1/g)?.length ?? 0;
};
```

</details>

## 复杂度分析

-   时间复杂度 O(1)
-   空间复杂度 O(1)

## 推荐题解

### 思路

-   回溯

### 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
    const res = [];
    const time = new Array(10).fill(0);
    const dfs = (nums, ons) => {
        //nums:还差几盏灯没量
        //ons:已经量了几盏灯
        //最终
        if (nums === 0) {
            const hour = time[0] + 2 * time[1] + 4 * time[2] + 8 * time[3];
            const min = time[4] + 2 * time[5] + 4 * time[6] + 8 * time[7] + 16 * time[8] + 32 * time[9];
            if (hour < 12 && min < 60) res.push(`${hour}:${min < 10 ? '0' + min : min}`);
        }
        for (let i = ons; i < time.length; i++) {
            time[i] = 1;
            dfs(nums - 1, i + 1);
            time[i] = 0;
        }
    };
    dfs(turnedOn, 0);
    return res;
};
```

</details>
