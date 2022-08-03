---
title: Symbol
comment: valine
categories:
    - [我不知道的, JS]
tags:
    - 我不知道的
    - JS
    - 基础
    - 红宝书
date: 2022-01-06 10:23:35
---

> symbol 是一种基本数据类型 （ primitive data type ）

<!-- more -->

# 概念

-   ES6 新增概念
-   原始值, 实例唯一,不可变

## 用途

-   确保对象不会属性冲突

# 用法

## 基本用法

-   直接使用 Symbol()初始化(无 new),typeof 返回值为 symbol
-   Symbol()函数接受一个字符串作为描述

```js
const sym = Symbol();
typeof sym; //symbol
const err = new Symbol(); //Symbol is not a constructor

const fooSym = Symbol('foo');
const fooSym1 = Symbol('foo');
fooSym === fooSym1; //false
fooSym == fooSym1; //false
```

## 全局注册表

-   在运行时中共享并重用符号实例
