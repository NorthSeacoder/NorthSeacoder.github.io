---
title: new
comment: valine
categories:
    - - 基础
      - 手写
tags:
    - 基础
    - 手写
excerpt: 这是摘要
hide: true
cata: 手写
date: 2022-02-28 21:51:43
---

> 实现 new 操作符

<!-- more -->

## new 的流程

-   创建一个空对象 obj（{}）；
-   将 obj 的__proto__属性指向构造函数 constrc 的原型（即 obj.__proto__ = constrc.prototype）。
-   将构造函数 constrc 内部的 this 绑定到新建的对象 obj，执行 constrc（也就是跟调用普通函数一样，只是此时函数的 this 为新创建的对象 obj 而已，就好像执行 obj.constrc()一样）；
-   若构造函数没有返回非原始值（即不是引用类型的值），则返回该新建的对象 obj（默认会添加 return this）。否则，返回引用类型的值。

```js
function myNew(fn, ...args) {
    if (typeof fn !== 'function') {
        throw new TypeError('fn must be a function');
        return;
    }
    //Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
    const obj = Object.create(fn.prototype);
    const result = fn.apply(obj, args);
    return ['function', 'object'].includes(typeof result) && result !== null ? result : obj;
}
```
