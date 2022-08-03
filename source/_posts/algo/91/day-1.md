---
title: day-1 989. 数组形式的整数加法
comment: valine
categories:
    - [算法, 刷题, 91]
tags:
    - 91
    - 刷题
    - 数组
    - JS
date: 2021-05-10 07:59:12
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/add-to-array-form-of-integer/

## 思路

利用 BigInt 计算

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    return (BigInt(num.join('')) + BigInt(k)).toString().split('');
};
```

</details>

## 复杂度分析

-   时间复杂度
-   空间复杂度

## 官方题解 1

### 思路

-   数组循环
-   超 10 进位(进位加在 k 上)
-   注意当 k 的长度大于数组长度

### 代码

<details>
    <summary>展开查看</summary>

```javascript
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    let res = [];
    let n = k.toString().length;
    for (let i = num.length - 1; i >= 0; i--) {
        let sum = num[i] + (k % 10);
        k = Math.floor(k / 10);
        if (sum >= 10) {
            k = k + 1;
            sum = sum - 10;
        }
        res.push(sum);
    }
    while (k != 0) {
        res.push(k % 10);
        k = Math.floor(k / 10);
    }
    res.reverse();
    return res;
};
```

</details>

**复杂度分析**

令 n 为数组长度。

-   时间复杂度：O(max(n,logk))
-   空间复杂度：O(1) 只用了常数量空间

## 官方题解 2

### 思路

将整个加数 k 加入数组表示的数的最低位。

上面的例子 123+912，我们把它表示成 [1,2,3+912]。然后，我们计算 3+912=9153+912=915。55 留在当前这一位，将 910/10=91 以进位的形式加入下一位

### 代码

<details>
    <summary>展开查看</summary>

```javascript
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    let res = [];
    let n = num.length;
    for (let i = n - 1; i >= 0 || k > 0; i--, k = Math.floor(k / 10)) {
        if (i >= 0) k += num[i];
        res.push(k % 10);
    }

    res.reverse();
    return res;
};
```

</details>

**复杂度分析**

令 n 为数组长度。

-   时间复杂度：O(max(n,logk))
-   空间复杂度：O(1) 只用了常数量空间

## 推荐题解
