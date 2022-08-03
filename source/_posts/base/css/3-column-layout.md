---
title: 三栏布局
comment: valine
categories:
    - - 基础
      - css
tags:
    - 基础
    - css
cata: css
date: 2022-06-06 10:22:31
---

> 三栏布局的多种实现方式及优缺点

<!-- more -->

## float 浮动布局

-   左右中三个盒子，左右宽度各位 300px 并且各自左右浮动即可。

```html
<!-- 实现一个三栏布局,中间自适应 -->
<div id="app">
    <div class="outer">
        <div class="left">该内容需要垂直水平居中</div>
        <div class="right">right</div>
        <div class="content">content</div>
    </div>
</div>
```

```css
.outer {
    border: 1px red solid;
}
.outer:after {
    content: '';
    display: flex;
    clear: both;
}
.left {
    background: tomato;
    height: 200px;
    float: left;
    width: 300px;
}
.right {
    background: gold;
    height: 200px;
    float: right;
    width: 300px;
}
.content {
    height: 200px;
    background: white;
    margin-left: 300px;
    margin-right: 300px;
}
```

-   优点: 实现简单,兼容性最好,布局简单
-   缺点:
    -   需要清除浮动(float 会脱离文档流,造成高度塌陷)
    -   中间格子内容撑开后需要考虑左右高度适配
    -   主体内容需要在最后
    -   宽度小于左右部分宽度之和时，右侧部分会被挤下去(父元素设置 min-width);
    -   中间元素过多会挤到左右元素下面(中间元素设置 margin-left、margin-right)

## position 布局

-   三栏 absolute 定位,给定左右宽度并且各自定位到左右为 0 的位置，再给中间的盒子定位左右各 300px 即可

```html
<!-- 实现一个三栏布局,中间自适应 -->
<div id="app">
    <div class="outer">
        <div class="left">该内容需要垂直水平居中</div>
        <div class="right">right</div>
        <div class="content">content</div>
    </div>
</div>
```

```css
.outer {
    border: 1px red solid;
}
.left {
    background: tomato;
    height: 200px;
    left: 0;
    width: 200px;
    position: absolute;
}
.right {
    background: gold;
    height: 200px;
    right: 0;
    width: 200px;
    position: absolute;
}
.content {
    height: 200px;
    background: white;
    right: 200px;
    left: 200px;
    position: absolute;
}
```

-   优点: 快捷，设置很方便
-   缺点: 内部子元素也会脱离文档流;高度不会自动撑开

## Flex-box 布局

-   外层盒子使用 display:flex 里面的盒子左右 300px，中间 flex 为 1 即可

```html
<!-- 实现一个三栏布局,中间自适应 -->
<div id="app">
    <div class="outer">
        <div class="left">该内容需要垂直水平居中</div>
        <div class="right">right</div>
        <div class="content">content</div>
    </div>
</div>
```

```css
.outer {
    border: 1px red solid;
    display: flex;
}
.left {
    background: tomato;
    width: 200px;
    order: 0;
}
.right {
    background: gold;
    width: 200px;
    order: 2;
}
.content {
    background: white;
    flex: 1;
    order: 1;
}
```

-   优点: 实现简单,兼容性较好,布局简单;中间内容会撑开左右盒子
-   缺点: 不能兼容 IE8 及以下浏览器

## table 布局

-   外层盒子使用 display:table,内层盒子定义 diplay:table-cell,左右设置宽度

```html
<!-- 实现一个三栏布局,中间自适应 -->
<div id="app">
    <div class="outer">
        <div class="left">该内容需要垂直水平居中</div>
        <div class="content">content</div>
        <div class="right">right</div>
    </div>
</div>
```

```css
.outer {
    border: 1px red solid;
    display: table;
}
.left {
    background: tomato;
    height: 200px;
    width: 200px;
    display: table-cell;
}
.right {
    background: gold;
    height: 200px;
    width: 200px;
    display: table-cell;
}
.content {
    height: 200px;
    background: white;
    display: table-cell;
}
```

-   优点: 使用起来方便,兼容性也不存在问题;高度会自动撑开左右
-   缺点:
    -   无法设置栏边距
    -   对 seo 不友好
    -   当其中一个单元格高度超出的时候，两侧的单元格也是会跟着一起变高的

## grid 布局

-   外层盒子使用 display:grid 以及设置 grid-template-columns: 200px auto 200px

```html
<!-- 实现一个三栏布局,中间自适应 -->
<div id="app">
    <div class="outer">
        <div class="left">该内容需要垂直水平居中</div>
        <div class="right">right</div>
        <div class="content">content</div>
    </div>
</div>
```

```css
.outer {
    border: 1px red solid;
    display: grid;
    grid-template-columns: 200px auto 200px;
}
.left {
    background: tomato;
    height: 200px;
    width: 200px;
}
.right {
    background: gold;
    height: 200px;
    width: 200px;
}
.content {
    height: 200px;
    background: white;
}
```

-   优点: 二维布局;设置最简单
-   缺点: 兼容性差;高度问题
