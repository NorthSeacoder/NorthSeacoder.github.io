---
title: flat
comment: valine
categories:
    - - 基础
      - 手写
tags:
    - 基础
    - 手写
date: 2022-03-15 07:59:25
---

> 手写 flat 数组扁平化

<!-- more -->

```js
const flat1 = (array) => {
    const res = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            res.push(...flat(array[i]));
        } else {
            res.push(array[i]);
        }
    }
    return res;
};

const flat2 = (array) => {
    while (array.some((item) => Array.isArray(item))) {
        array = [].concat(...array);
    }
    return array;
};
```
