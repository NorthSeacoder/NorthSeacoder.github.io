---
title: instanceof
comment: valine
categories:
    - - 基础
      - 手写
tags:
    - 基础
    - 手写
excerpt: 这是摘要
date: 2022-02-28 08:04:13
---

> 实现 instanceof 关键字

<!-- more -->

## 概念

-   instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上

```js
function myInstanceOf(obj, construct) {
    //保证construct是函数
    if (typeof construct !== 'function') {
        throw new TypeError('construct must be a function');
        return;
    }
    //保证obj不为 null 且不是基本类型
    if (obj === null || !['function', 'object'].includes(typeof obj)) return false;
    // 只要该构造函数的原型对象出现在实例对象的原型链上，则返回true，否则返回false
    //es6 下基本类型会进行封箱操作
    let proto = Object.getPrototypeOf(obj);
    while (proto) {
        if (proto === construct.prototype) return true;
        proto = Object.getPrototypeof(proto);
    }
    return false;
}
```
