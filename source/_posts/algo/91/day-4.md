---
title: day-4 394. 字符串解码
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
    - 栈
    - dfs
date: 2021-05-13 21:37:18
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/decode-string/

## 思路

-   数字记录并相加
-   "["将之前记录的数字和字符串推入栈中,进行下一层
-   "]"从字符串栈中弹出栈顶字符串并与当前字符串 repeat 后拼接
-   普通字符拼接到 res 中

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let repeats = 0,
        res = '';
    const strStack = [],
        numStack = [];
    for (let str of s) {
        if (!isNaN(str)) {
            //是数字
            repeats = 10 * repeats + +str;
        } else if (str === '[') {
            //进入下一层
            numStack.push(repeats);
            repeats = 0;
            strStack.push(res);
            res = '';
        } else if (str === ']') {
            res = strStack.pop() + res.repeat(numStack.pop());
        } else {
            res += str;
        }
    }
    return res;
};
```

</details>

## 复杂度分析

-   时间复杂度：O(n)
-   空间复杂度：O(n)

## 官方题解

-   dfs 递归

## 推荐题解

### 思路

建立一个辅助栈

### 关键点

-   内层循环时可能会多弹出元素
-   repeatRes 拼接时注意顺序

### 代码

<details>
    <summary>展开查看</summary>

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const stack = [];
    for (let char of s) {
        if (char === ']') {
            let repeatRes = '',
                repeats = '';
            let str = stack.pop();
            while (str !== '[') {
                repeatRes = str + repeatRes;
                str = stack.pop();
            }
            let num = stack.pop();
            while (!isNaN(num)) {
                repeats = num + repeats;
                num = stack.pop();
            }
            stack.push(num); //多弹出的字符串
            repeatRes = repeatRes.repeat(parseInt(repeats));
            stack.push(repeatRes);
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
};
```

</details>

**复杂度分析**

令 n 为数组长度。

-   时间复杂度：O(n)
-   空间复杂度：O(n)
