---
title: optimize
comment: valine
categories:
    - - 基础
      - common
tags:
    - 基础
    - common
excerpt: 这是摘要
hide: true
cata: common
date: 2022-04-13 07:58:09
---

> 摘要

<!-- more -->

### 回流的概念

-   当渲染树中部分或者全部元素的尺寸、结构或者属性发生变化时，浏览器会重新渲染部分或者全部文档的过程就称为回流。

### 重绘的概念

-   当页面中某些元素的样式发生变化，但是不会影响其在文档流中的位置时，浏览器就会对元素进行重新绘制，这个过程就是重绘。

### 回流的触发条件

-   页面首次渲染
-   浏览器窗口大小发生变化
-   元素内容发生变化
-   元素位置/尺寸发生变化
-   元素字体大小发生变化
-   激活 css 伪类
-   添加或删除可见的 DOM 元素
-   当触发回流时，一定会触发重绘，但是重绘不一定会引发回流。

### 触发重绘的条件

-   color、background 相关属性
-   outline 相关属性
-   border-radius、visibility、box-shadow
