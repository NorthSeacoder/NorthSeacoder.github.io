---
title: interview
comment: valine
categories:
    - - 基础
      - js
tags:
    - 基础
    - js
excerpt: 这是摘要
hide: true
cata: js
date: 2022-04-08 10:12:07
---

> 摘要

<!-- more -->

## 数据类型

### 有哪些数据类型?区别

-   八种数据类型，分别是 Undefined、Null、Boolean、Number、String、Object、Symbol、BigInt。
-   栈：原始数据类型（Undefined、Null、Boolean、Number、String）
-   堆：引用数据类型（对象、数组和函数）

### 检测数据类型的方法

-   typeof:其中数组、对象、null 都会被判断为 object，其他判断都正确。
-   instanceof:内部运行机制是判断在其原型链中能否找到该类型的原型。只能正确判断引用数据类型，而不能判断基本数据类型
-   Object.prototype.toString.call();

### 判断数组的方式

-   Array.isArray()
-   Object.prototype.toString.call(obj).slice(8,-1) === 'Array';
-   obj.__proto__ === Array.prototype;
-   obj instanceof Array
-   Array.prototype.isPrototypeOf(obj)

### null 和 undefined 区别

-   都是基本类型
-   undefined:未定义,null:空对象
-   undefined 不是保留字,可赋值;
-   typeof undefined === 'undefined'/typeof null === 'object'
-   undefined==null//true||undefined===null//false

### isNaN 和 Number.isNaN 函数的区别

-   isNaN: 接收参数后，会尝试将这个参数转换为数值，任何不能被转换为数值的的值都会返回 true，因此非数字值传入也会返回 true ，会影响 NaN 的判断。
-   Number.isNaN :首先判断传入参数是否为数字，如果是数字再继续判断是否为 NaN ，不会进行数据类型的转换，这种方法对于 NaN 的判断更为准确。

### == 操作符的强制类型转换规则

-   首先会判断两者类型是否相同,相同的话就比较两者的大小；
-   类型不相同的话，就会进行类型转换
-   会先判断是否在对比 null 和 undefined，是的话就会返回 true
-   判断两者类型是否为 string 和 number，是的话就会将字符串转换为 number
-   判断其中一方是否为 boolean，是的话就会把 boolean 转为 number 再进行判断
-   判断其中一方是否为 object 且另一方为 string、number 或者 symbol，是的话就会把 object 转为原始类型再进行判断

### Object.is() 与比较操作符 “===”、“==” 的区别？

-   Object.is 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如 -0 和 +0 不再相等，两个 NaN 是相等的。

### object.assign 和扩展运算法是深拷贝还是浅拷贝，两者区别

-   都是浅拷贝
-   Object.assign()方法接收的第一个参数作为目标对象，后面的所有参数作为源对象。然后把所有的源对象合并到目标对象中。它会修改了一个对象，因此会触发 ES6 setter。
-   扩展操作符（…）使用它时，数组或对象中的每一个值都会被拷贝到一个新的数组或对象中。它不复制继承的属性或类的属性，但是它会复制 ES6 的 symbols 属性

## ES6

### let、const、var 的区别

-   块级作用域:块作用域由 { }包括，let 和 const 具有块级作用域，var 不存在块级作用域。
-   变量提升:var 存在变量提升，let 和 const 不存在变量提升，即在变量只能在声明之后使用，否在会报错。
-   给全局添加属性: 浏览器的全局对象是 window，Node 的全局对象是 global。var 声明的变量为全局变量，并且会将该变量添加为全局对象的属性，但是 let 和 const 不会。
-   重复声明:var 声明变量时，可以重复声明变量，后声明的同名变量会覆盖之前声明的变量。const 和 let 不允许重复声明变量。
-   暂时性死区:在使用 let、const 命令声明变量之前，该变量都是不可用的。这在语法上，称为暂时性死区。使用 var 声明的变量不存在暂时性死区
-   初始值设置:在变量声明时，var 和 let 可以不用设置初始值。而 const 声明变量必须设置初始值。

### 如果 new 一个箭头函数的会怎么样

-   箭头函数是 ES6 中的提出来的，它没有 prototype，也没有自己的 this 指向，更不可以使用 arguments 参数，所以不能 New 一个箭头函数。

### 箭头函数与普通函数的区别

-   箭头函数比普通函数更加简洁
-   箭头函数没有自己的 this,只会在自己作用域的上一层继承 this
-   箭头函数继承来的 this 指向永远不会改变,call()、apply()、bind()等方法不能改变箭头函数中 this 的指向
-   箭头函数不能作为构造函数使用
-   箭头函数没有自己的 arguments
-   箭头函数没有 prototype
-   箭头函数不能用作 Generator 函数，不能使用 yeild 关键字

## js 基础

### map 和 Object 的区别

-   意外的键:
    -   Map 默认情况不包含任何键，只包含显式插入的键。
    -   Object 有一个原型, 原型链上的键名有可能和自己在对象上的设置的键名产生冲突。
-   键的类型:
    -   Map 的键可以是任意值，包括函数、对象或任意基本类型。
    -   Object 的键必须是 String 或是 Symbol。
-   键的顺序
    -   Map 中的 key 是有序的。因此，当迭代的时候， Map 对象以插入的顺序返回键值。
    -   Object 的键是无序的
-   键的个数
    -   Map 的键值对个数可以轻易地通过 size 属性获取
    -   Object 的键值对个数只能手动计算
-   迭代
    -   Map 是 iterable 的，所以可以直接被迭代。
    -   迭代 Object 需要以某种方式获取它的键然后才能迭代。
-   性能
    -   map 在频繁增删键值对的场景下表现更好。

### map 和 weakMap 的区别

-   WeakMap 的键是弱引用的。其键必须是对象（ null 除外）
-   WeakMap 的设计目的在于，有时想在某个对象上面存放一些数据，但是这会形成对于这个对象的引用。一旦不再需要这两个对象，就必须手动删除这个引用，否则垃圾回收机制就不会释放对象占用的内存。

### JavaScript 脚本延迟加载的方式有哪些？

-   defer:脚本的加载与文档的解析同步,文档解析完成后再执行这个脚本文件,多个设置了 defer 属性的脚本按规范来说最后是顺序执行的
-   async : 脚本加载完成后立即执行 js 脚本,会阻塞文档解析.无序
-   动态创建 DOM :对文档的加载事件进行监听，当文档加载完成后再动态的创建 script 标签来引入 js 脚本。
-   setTimeout 延迟： 设置一个定时器来延迟加载 js 脚本文件
-   让 JS 最后加载： 将 js 脚本放在文档的底部，来使 js 脚本尽可能的在最后来加载执行。

### call() 和 apply() 的区别？

-   call 传入的参数数量不固定
