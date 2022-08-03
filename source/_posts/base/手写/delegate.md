---
title: 事件委托
comment: valine
categories:
  - - 基础
    - 手写
tags:
  - 基础
  - 手写
date: 2022-03-01 07:50:54
---

> 实现事件委托

<!-- more -->
## 概念
- 元素的事件委托给它的父级或者更外级的元素处理，它的实现机制就是事件冒泡。
- 事件冒泡：事件开始由最具体的元素接收，然后逐级向上传播到较为不具体的节点或文档。
- 事件捕获：事件开始由不太具体的节点接收，然后逐级向下传播到最具体的节点。它与事件冒泡是个相反的过程。

```js
function delegate(element, eventType, selector, fn) {
     element.addEventListener(eventType, e => {
       let el = e.target
       while (!el.matches(selector)) {
         if (element === el) {
           el = null
           break
         }
         el = el.parentNode
       }
       el && fn.call(el, e, el)
     })
     return element
   }
```