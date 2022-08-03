---
title: 操作符
comment: valine
categories:
    - - 我不知道的
      - js
tags:
    - 我不知道的
    - js
cata: js
date: 2022-02-28 11:09:31
---

> 那些我不知道的操作符

<!-- more -->

## delete

-   delete 操作符尝试删除值数据时,会返回 true,用以表示没有错误
-   delete 0 的本质是删除一个表达式的值(Result)。
-   delete x 与上述的区别只在于 Result 是一个引用(Reference)。
-   delete 其实只能删除一种引用，即对象的成员(Property)
-   delete 不能删除 non-configurable 属性,正常返回 false,严格模式报错
-   delete 操作只会在自身的属性上起作用.原型上有同名属性时,对象会使用原型上的属性
-   删除数组元素时被删除的元素不属于该数组,(删除的是该位置的引用而非值)

```js
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
delete trees[3];
trees = ['redwood', 'bay', 'cedar', empty, 'maple'];
```

## 赋值操作符

-   将右表达式的值赋值给左表达式的引用
-   一个赋值表达式本身也是有结果的,是右表达式的值

## var a ={n:1};a.x=a={n:2}的执行过程

-   从左至右执行
    -   计算单值表达式 a
    -   将右侧的 x 理解为标识符,并作为.运算的右操作数
    -   计算"a.x"表达式的结果
    -   此时的 a 为{n:1}
    -   a.x 被赋值{n:1}
    -   此时 a 为{x:{n:1},n:1}
    -   {n:2}覆盖了 a 的值

### 利用这个过程来构建链表

```js
let i = 10,
    root = {index: 'root'},
    node = root;
while (i > 0) {
    node.next = node = new Object();
    node.index = i--;
}
root; //{index:'root',next:{index:9,next:{index:8,next:{index:7,next:{index:6,next:{index:5,next:{index:4,next:{index:3,next:{index:2,next:{index:1,next:null}}}}}}}}}}
node; //{index: 1}
```

## 参考链接
