---
title: generator
comment: valine
categories:
    - - 我不知道的
      - js
tags:
    - 我不知道的
    - js
hide: true
cata: js
date: 2022-01-26 09:54:41
---

> 迭代器的生产者,状态机

<!-- more -->

## 将一个 gengrator 转换为普通函数

生成一个对象或函数,有三种状态,有 next().throw(),return()方法;


```js
const STATUS = {
    PENDING: 'PENDING',
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL'
};
const Generator =
```
## 将一个 gengrator 转换为普通函数