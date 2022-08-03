---
title: 函数式组件
comment: valine
categories:
    - - 我不知道的
      - vue
tags:
    - 我不知道的
    - vue
cata: vue
date: 2022-02-09 11:04:50
---

> 摘要
> 只接受 props 的组件

<!-- more -->

## 概念

一个没有状态(响应式数据),没有实例(this),没有生命周期的组件

### 优势

-   结构简单,代码清晰
-   渲染性能好(Vue2,Vue3 区别已经不大)

### 与普通组件的区别

1. 需要声明:<template functional></template> 或 functional:true
2. 不需要实例化,没有 this,render(h,ctx) 函数提供 ctx 参数代替
3. 没有生命周期函数,不能使用计算属性,watch
4. 不能通过$emit 对外暴露事件,但可以通过 ctx.listeners.xxx 来调用外部传入的事件
5. 父组件通过 ref 引用时获取的是 HTMLElement(未实例化)
6. 函数式组件 props 可以不声明(2.3.0+),所有组件上的 attribute 会自动解析成 props(可通过 inheritAttrs 属性禁止)

### ctx内容

```js
children: undefined
data: {props: {}, on: {}}
injections: undefined//(2.3.0+) 如果使用了 inject 选项，则该对象包含了应当被注入的 property
listeners: {enumLoaded: ƒ}//等同于 data.on
parent: VueComponent 
props: {}
scopedSlots: Object
slots: ƒ ()
```

## 参考链接
[官网](https://cn.vuejs.org/v2/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6)
[Vue.js 2函数式组件学习](https://www.jianshu.com/p/3e22abebc97b)