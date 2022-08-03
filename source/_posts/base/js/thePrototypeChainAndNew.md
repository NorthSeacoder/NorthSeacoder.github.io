---
title: 继承与原型链
comment: valine
categories:
    - - 基础
      - js
tags:
    - 基础
    - js
cata: js
date: 2022-02-28 08:10:25
---

> 原型链相关概念

<!-- more -->

## 原型链

-   __proto__和 constructor 属性是对象所独有的
-   prototype 属性是函数所独有的，因为函数也是一种对象，所以函数也拥有__proto__和 constructor 属性。
-   __proto__属性由一个对象指向一个对象,作用就是当访问一个对象的属性时，如果该对象内部不存在这个属性，那么就会去它的__proto__属性所指向的那个对象（父对象）里找，一直找，直到__proto__属性的终点 null，再往上找就相当于在 null 上取值，会报错。通过__proto__属性将对象连接起来的这条链路即我们所谓的原型链
-   prototype 属性从一个函数指向一个对象,作用就是让该函数所实例化的对象们都可以找到公用的属性和方法，是函数的原型对象,也是这个函数所创建的实例的原型对象,即 f1.__proto__ === Foo.prototype
-   constructor 属性从一个对象指向一个函数,含义就是指向该对象的构造函数，所有函数（此时看成对象了）最终的构造函数都指向 Function

## new

```js
function Foo() {...};
let f1 = new Foo();
```

-   代码表示创建一个构造函数 Foo()，并用 new 关键字实例化该构造函数得到一个实例化对象 f1

### new 操作符将函数作为构造器进行调用时的过程

-   创建一个空对象 obj（{}）；
-   将 obj 的__proto__属性指向构造函数 constrc 的原型（即 obj.__proto__ = constrc.prototype）。
-   将构造函数 constrc 内部的 this 绑定到新建的对象 obj，执行 constrc（也就是跟调用普通函数一样，只是此时函数的 this 为新创建的对象 obj 而已，就好像执行 obj.constrc()一样）；
-   若构造函数没有返回非原始值（即不是引用类型的值），则返回该新建的对象 obj（默认会添加 return this）。否则，返回引用类型的值。
