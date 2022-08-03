---
title: day-6 768. 最多能完成排序的块 II
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
    - 单调栈
    - 栈
date: 2021-05-15 21:45:35
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/max-chunks-to-make-sorted-ii/

## 思路

-   利用单调栈分块

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        if (stack.length === 0 || stack[stack.length - 1] <= arr[i]) {
            //单调递增栈,栈中的每个值就是一个分块中的极大值
            stack.push(arr[i]);
        } else {
            //当前值小于栈顶元素即tem<arr[i]
            //临时保存单调栈中最大值(当前值可以加入栈顶元素所代表的块)
            let tem = stack.pop();
            //一个元素代表一个块,当前值此时压入最大值所在的块中,该块的区间为[当前值,最大值]
            //剩下单调栈中不应该存在大于当前值的元素
            //因此剩余单调栈中大于当前值的元素意味着可以压入新块中
            while (stack[stack.length - 1] > arr[i]) {
                stack.pop();
            }
            stack.push(tem);
        }
    }
    return stack.length;
};
```

</details>

## 复杂度分析

-   时间复杂度：O(n)
-   空间复杂度：O(n)

## 推荐题解

### 思路

-   桶排序(计数排序)

### 关键点

-

### 代码

<details>
    <summary>展开查看</summary>

```js

```

</details>

### 思路

-   前缀和

### 关键点

-

### 代码

<details>
    <summary>展开查看</summary>

```js

```

</details>
### 思路

-   滑动窗口

### 关键点

-

### 代码

<details>
    <summary>展开查看</summary>

```js

```

</details>
