---
title: 单调栈
comment: valine
categories:
    - - 算法
      - 常见算法套路
tags:
    - 91
    - 算法
    - JS
    - 单调栈
date: 2021-05-15 21:51:31
---

> 单调栈是一种特殊的栈,要求栈中的元素是单调递减或者单调递减的。

<!-- more -->

# 单调栈

单调栈是一种特殊的栈,要求栈中的元素是单调递减或者单调递减的。

## 适用场景

-   求解下一个大于/小于 X 的值

> 比如我们需要依次将数组 [1,3,4,5,2,9,6] 压入单调栈。<br>

1. 压入 1，此时的栈为：[1]
2. 压入 3，此时的栈为：[1,3]
3. 压入 4，此时的栈为：[1,3,4]
4. 压入 5，此时的栈为：[1,3,4,5]
5. 如果继续压入 2，此时的栈为：[1,3,4,5,2] 不满足单调递增栈的特性， 因此需要调整。如何调整？由于栈只有 pop 操作，因此我们只好不断 pop，直到满足单调递增为止。
6. 上面其实我们并没有压入 2，而是先 pop，pop 到压入 2 依然可以保持单调递增再 压入 2，此时的栈为：[1,2]
7. 继续压入 9，此时的栈为：[1,2,9]
8. 如果继续压入 6，则不满足单调递增栈的特性， 我们故技重施，不断 pop，直到满足单调递增为止。此时的栈为：[1,2,6]

## 模板

<details>
    <summary>展开查看</summary>

```js
var monostoneStack = function (T) {
    let stack = [];
    let result = [];
    for (let i = 0; i < T.length; i++) {
        result[i] = 0;
        while (stack.length > 0 && T[stack[stack.length - 1]] < T[i]) {
            let peek = stack.pop();
            result[peek] = i - peek;
        }
        stack.push(i);
    }
    return result;
};
```

</details>
