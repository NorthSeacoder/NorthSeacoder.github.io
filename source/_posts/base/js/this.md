---
title: this
comment: valine
categories:
    - - 基础
      - js
tags:
    - 基础
    - js
cata: js
date: 2022-03-10 10:20:15
---

> this 相关面试题

<!-- more -->

## this 的 5 种绑定方式

-   默认绑定:直接执行函数(fn())非严格模式下函数的 this 指向全局对象, 严格模式下函数的 this 会绑定到 undefined
    -   开启了严格模式，只是说使得函数内的 this 指向 undefined，它并不会改变全局中 this 的指向
        -   var a 依然会保存给全局对象,obj.fn(),fn 内的 this 依然是 obj
    -   函数外的 var 会将变量绑定到全局对象上,let/const 不会
-   隐式绑定:当函数引用有上下文对象时, 如 obj.foo()的调用方式, foo 内的 this 指向 obj
    -   this 永远指向最后调用它的那个对象。
    -   隐式丢失:使用另一个变量来给函数取别名||把一个函数当成参数传递
-   显示绑定:通过 call()或者 apply()方法直接指定 foo 内的this 的绑定对象, 如 foo.call(obj)
  - foo.call(obj)()=>foo 返回的函数内的 this 依然是 window
-   new 绑定:通过 new 操作符创建一个对象, 并将 this 绑定到该对象上
-   箭头函数绑定:
  - this 的指向由外层作用域决定的,指向函数定义时的 this 而非执行时
  - 字面量创建的对象(直接{})，作用域是window，如果里面有箭头函数属性的话，this指向的是window
  - 构造函数创建的对象，作用域是可以理解为是这个构造函数，且这个构造函数的this是指向新建的对象的，因此this指向这个对象。