---
title: 继承
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
date: 2022-02-28 21:51:26
---

> 实现 js 继承

<!-- more -->

```js
function inherit(Child, Parent) {
    //继承原型上的属性
    Child.prototype = Object.create(Parent.prototype);
    //修复 constructor
    Child.prototype.constructor = Child;
    //存储超类
    Child.suber = Parent;
    //静态属性继承
    if (Object.setPrototypeOf) {
        //es6 引入
        Object.setPrototypeOf(Child, Parent);
    } else if (Child.__proto__) {
        //es5
        Child.__proto__ = Parent;
    } else {
        for (var k in Parent) {
            if (Parent.hasOwnProperty(k) && !(k in Child)) {
                Child[k] = Parent[k];
            }
        }
    }
}
```
