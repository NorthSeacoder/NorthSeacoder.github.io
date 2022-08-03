---
title: typeof
comment: valine
categories:
    - - 基础
      - 手写
tags:
    - 基础
    - 手写
date: 2022-03-15 07:54:01
---

> 手写能正确判断 null,date,object,array 的 typeof

<!-- more -->

## 概念

-   Object.prototype.toString 实现。

```js
function typeOf(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

typeOf([]); // 'array'
typeOf({}); // 'object'
typeOf(new Date()); // 'date'
```
