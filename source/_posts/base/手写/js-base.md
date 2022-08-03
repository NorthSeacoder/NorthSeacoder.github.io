---
title: js-base
comment: valine
categories:
    - - 基础
      - 手写
tags:
    - 基础
    - 手写
date: 2022-04-19 10:07:41
---

> 摘要

<!-- more -->

### Object.create

```js
//prototype 属性从一个函数指向一个对象,作用就是让该函数所实例化的对象们都可以找到公用的属性和方法，是函数的原型对象,也是这个函数所创建的实例的原型对象
function create(obj) {
    function fn() {}
    fn.prototype = obj;
    return new fn();
}
```
