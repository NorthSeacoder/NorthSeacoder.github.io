---
title: interview
comment: valine
categories:
    - - 基础
      - css
tags:
    - 基础
    - css

cata: css
date: 2022-04-07 11:58:18
---

> 摘要

<!-- more -->

## 基础

### CSS 选择器优先级

-   内联样式:1000
-   id 选择器:100
-   类选择器、伪类选择器、属性选择器：10
-   标签选择器、伪元素选择器：1

### 继承与不可继承属性

-   可继承属性:
    -   字体系列
    -   文本系列:对齐/行高/间距...
    -   元素可见性
    -   光标样式
-   不可继承属性:
    -   display
    -   盒模型相关:width/height/margin/padding/border
    -   背景类:background-*;
    -   定位

### display 的属性值及作用

-   block: 默认宽度为父元素宽度，可设置宽高，换行显示。
-   none:元素不显示,从文档流中移除
-   inline:行内元素,默认宽度为内容宽度,不可设置宽高,可以设置水平方向的 margin 和 padding 属性，不能设置垂直方向的 padding 和 margin；
-   inline-block,可设置宽高
-   list-item:类似 block,添加样式列表标记
-   table:块级表格
-   inherit:从父级继承

### link 和 @import 的区别

-   都能引入外部 css
-   区别:
    -   从属关系:@import 属于 css 的语法规则,只能引入 css;link 是 html 标签,还能定义 rss 等
    -   加载顺序:link 同时加载,@import 在页面加载完毕后加载
    -   兼容性:@import 是 css2.1 之后的语法
    -   DOM 可控性:link 可通过 js 操作 dom,插入 link 来改变样式

### 伪元素和伪类的区别和作用

-   伪元素：在内容元素的前后插入额外的元素或样式,只在外部能看到,源码中没有的元素
-   伪类：将特殊的效果添加到特定选择器上。它是已有元素上添加类别的，不会产生新的元素
-   伪类是通过在元素选择器上加⼊伪类改变元素状态，⽽伪元素通过对元素的操作进⾏对元素的改变。

### 对 requestAnimationframe 的理解

-   宏任务,可取消(返回 id,传给 cancelAnimationFrame)
-   节能:页面处于不可见或不可用状态下,RequestAnimationFrame 也会停止渲染，当页面被激活时，动画就从上次停留的地方继续执行，有效节省了 CPU 开销。
-   函数节流:RequestAnimationFrame 可保证每个刷新间隔内，函数只被执行一次
-   减少 DOM 操作：requestAnimationFrame 会把每一帧中的所有 DOM 操作集中起来，在一次重绘或回流中就完成
-   setTimeout 执行动画出现卡顿、抖动现象的原因:
    -   settimeout 任务被放入异步队列，只有当主线程任务执行完后才会执行队列中的任务，因此实际执行时间总是比设定时间要晚；
    -   settimeout 的固定时间间隔不一定与屏幕刷新间隔时间相同，会引起丢帧。

### 对盒模型的理解

-   盒模型都是由四个部分组成的，分别是 margin、border、padding 和 content。
-   标准盒模型:width 和 height 属性的范围只包含了 content
-   IE 盒模型（怪异盒模型）:width 和 height 属性的范围包含了 border、padding 和 content。

### 为什么有时候⽤ translate 来改变位置⽽不是定位？

-   改变 transform 或 opacity 不会触发浏览器重绘
-   translate 改变位置时，元素依然会占据其原始空间，绝对定位就不会发⽣这种情况。

### li 与 li 之间有看不见的空白间隔是什么原因引起的？如何解决？

-   浏览器会把 inline 内联元素间的空白字符（空格、换行、Tab 等）渲染成一个空格
-   解决方式:
    -   为 li 设置 float:left。不足：有些容器是不能设置浮动，如左右切换的焦点图等
    -   将所有 li 写在同一行。不足：代码不美观。
    -   将 ul 内的字符尺寸直接设为 0，即 font-size:0。不足：ul 中的其他字符尺寸也被设为 0，需要额外重新设定其他字符尺寸,有兼容性问题
    -   消除 ul 的字符间隔 letter-spacing:-8px，不足：这也设置了 li 内的字符间隔，因此需要将 li 内的字符间隔设为默认 letter-spacing:normal。

### CSS3 有哪些新特性

-   新增了一些选择器(:not());
-   圆角:border-radius
-   多列布局:multi-column
-   阴影和反射:Shadow Reflect;
-   文字渲染 （Text-decoration）
-   线性渐变 （gradient）
-   旋转 （transform）

### ::before 和 :after 的双冒号和单冒号有什么区别

-   冒号(:)用于 CSS3 伪类，双冒号(::)用于 CSS3 伪元素

### z-index 什么情况下会失效

-   z-index 元素的 position 属性需要是 relative，absolute 或是 fixed
-   失效情况:
    -   父元素为 relative.解决：父元素 position 改为 absolute 或 static；
    -   元素没有 position 属性()。解决：设置该元素的 position 属性为 relative，absolute 或是 fixed 中的一种；
    -   元素设置 float.解决：去除浮动
    -   元素的祖先标签的 z-index 值比较小

### CSS3 中的 transform 有哪些属性

-   旋转:rotate(30deg)
-   移动:translate(100px,20px):
-   缩放:transform:scale(2,1.5):(X,Y)
-   扭曲:skew(10deg,20deg);

## 页面布局

### 常见布局单位

-   px:像素
-   %:百分比
-   em 和 rem:相对长度单位(父元素/根元素)
-   vw/vh:与视图窗口有关的单位

### 两栏布局

-   左边宽度固定,右边宽度自适应
-   利用 float,左边设置定宽和 float,右侧设置 margin-left

```css
.left {
    float: left;
    width: 200px;
    background: tomato;
}
.right {
    background: gold;
    margin-left: 200px;
}
```

-   利用 float,左边设置定宽和 float,右侧设置 overflow:hidden 触发 BFC

```css
.left {
    float: left;
    width: 200px;
    background: tomato;
}
.right {
    background: gold;
    overflow: hidden;
}
```

-   利用 flex,左边元素设置为固定宽度 200px，将右边的元素设置为 flex:1

```css
.outer {
    border: 1px red solid;
    height: 100px;
    display: flex;
}

.left {
    width: 200px;
    background: tomato;
}
.right {
    background: gold;
    flex: 1;
}
```

### 三列布局

-   利用 flex,左/右边元素设置为固定宽度 200px，将中间元素设置为 flex:1

```css
.outer {
    border: 1px red solid;
    height: 100px;
    display: flex;
}

.left {
    width: 200px;
    background: tomato;
}
.right {
    background: gold;
    width: 200px;
}
.content {
    flex: 1;
}
```

-   绝对定位

```css
.outer {
    position: relative;
    height: 100px;
}

.left {
    position: absolute;
    width: 100px;
    height: 100px;
    background: tomato;
}
.right {
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 100px;
    background: gold;
}
.content {
    margin-left: 100px;
    margin-right: 200px;
    height: 100px;
    background: lightgreen;
}
```

### 垂直水平居中

-   绝对定位

```css
.outer {
    height: 400px;
    position: relative;
}
.content {
    position: absolute;
    left: 50%;
    top: 50%;
    background: lightgreen;
    transform: translate(-50%, -50%);
}
```

-   flex 布局

```css
.outer {
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content {
    background: lightgreen;
}
```

### 对 Flex 布局的理解及其使用场景

-   弹性布局,采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item）,简称"项目".
-   容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis），项目默认沿水平主轴排列。
-   容器属性:
    -   flex-direction 属性决定主轴的方向:
        -   row（默认值）：主轴为水平方向，起点在左端。
        -   row-reverse:主轴为水平方向，起点在右端
        -   column:主轴为垂直方向，起点在上沿
        -   column-reverse:主轴为垂直方向，起点在下沿
    -   flex-wrap 属性定义，如果一条轴线排不下，如何换行:
        -   nowrap（默认）：不换行
        -   wrap：换行，第一行在上方
        -   wrap-reverse：换行，第一行在下方
    -   flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式,默认值为 row nowrap。
    -   justify-content 属性定义了项目在主轴上的对齐方式。
        -   flex-start（默认值）：左对齐
        -   flex-end：右对齐
        -   center： 居中
        -   space-between：两端对齐，项目之间的间隔都相等。
        -   space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
    -   align-items 属性定义项目在交叉轴上如何对齐。
        -   stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度。
        -   flex-start：交叉轴的起点对齐。
        -   flex-end：交叉轴的终点对齐。
        -   center：交叉轴的中点对齐。
        -   baseline: 项目的第一行文字的基线对齐。
    -   align-content 属性定义了多根轴线(主轴)的对齐方式。如果项目只有一根轴线，该属性不起作用。
        -   stretch（默认值）：轴线占满整个交叉轴。
        -   flex-start：与交叉轴的起点对齐。
        -   flex-end：与交叉轴的终点对齐。
        -   center：与交叉轴的中点对齐。
        -   space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
        -   space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
-   项目属性
    -   order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。
    -   flex-grow 属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。
    -   flex-shrink 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。
    -   flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。
    -   flex 属性是 flex-grow，flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto
    -   align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。

## 定位于浮动

### 为什么需要清除浮动？清除浮动的方式

-   定义:非 IE 浏览器下，容器不设高度且子元素浮动时，容器高度不能被内容撑开。 此时，内容会溢出到容器外面而影响布局。这种现象被称为浮动（溢出）。
-   引起的问题:
    -   父元素的高度无法被撑开，影响与父元素同级的元素
    -   与浮动元素同级的非浮动元素会跟随其后
    -   若浮动的元素不是第一个元素，则该元素之前的元素也要浮动，否则会影响页面的显示结构
-   清除浮动的方式
    -   给父级 div 定义 height 属性
    -   最后一个浮动元素之后添加一个空的 div 标签，并添加 clear:both 样式
    -   包含浮动元素的父级标签添加 overflow:hidden 或者 overflow:auto

### 使用 clear 属性清除浮动的原理

-   对元素设置 clear 属性是为了避免浮动元素对该元素的影响，而不是清除掉浮动。

### 对 BFC 的理解，如何创建 BFC

-   BFC 是一个独立的布局环境，如果一个元素符合触发 BFC 的条件，则 BFC 中的元素布局不受外部影响。
-   特点:
    -   垂直方向上，自上而下排列，和文档流的排列方式一致。
    -   在 BFC 中上下相邻的两个容器的 margin 会重叠
    -   计算 BFC 的高度时，需要计算浮动元素的高度
    -   BFC 区域不会与浮动的容器发生重叠
    -   BFC 是独立的容器，容器内部元素不会影响外部元素
    -   每个元素的左 margin 值和容器的左 border 相接触
-   创建条件:
    -   根元素：body；
    -   元素设置浮动：float 除 none 以外的值；
    -   元素设置绝对定位：position (absolute、fixed)；
    -   display 值为：inline-block、table-cell、table-caption、flex 等；
    -   overflow 值为：hidden、auto、scroll；
-   作用
    -   解决 margin 的重叠问题：
    -   解决高度塌陷的问题：在对子元素设置浮动后，父元素会发生高度塌陷，也就是父元素的高度变为 0。解决这个问题，只需要把父元素变成一个 BFC。常用的办法是给父元素设置 overflow:hidden
    -   创建自适应两栏布局：可以用来创建自适应两栏布局：左边的宽度固定，右边的宽度自适应。

### 什么是 margin 重叠问题？如何解决？

-   两个块级元素的上外边距和下外边距可能会合并（折叠）为一个外边距，其大小会取其中外边距值大的那个，这种行为就是外边距折叠
-   重叠只会出现在垂直方向。
-   浮动的元素和绝对定位这种脱离文档流的元素的外边距不会折叠
-   计算原则:
    -   如果两者都是正数，那么就取最大者
    -   如果是一正一负，就会正值减去负值的绝对值
    -   两个都是负值时，用 0 减去两个中绝对值大的那
-   解决方法:
    -   兄弟重叠:
        -   底部元素变为行内盒子：display: inline-block
        -   底部元素设置浮动：float
        -   底部元素的 position 的值为 absolute/fixed
    -   父子重叠:
        -   父元素加入：overflow: hidden
        -   父元素添加透明边框：border:1px solid transparent
        -   子元素变为行内盒子：display: inline-block
        -   子元素加入浮动属性或定位

### 元素的层叠顺序

1. 背景和边框：建立当前层叠上下文元素的背景和边框
2. 负的 z-index：当前层叠上下文中，z-index 属性值为负的元素。
3. 块级盒：文档流内非行内及非定位后代元素。
4. 浮动盒：非定位浮动元素
5. 行内盒：文档流内行内及非定位后代元素
6. z-index:0：层叠级数为 0 的定位元素。
7. 正 z-index：z-index 属性值为正的定位元素。

### position 有哪些属性

-   absolute:生成绝对定位的元素，相对于 static 定位以外的一个父元素进行定位。元素的位置通过 left、top、right、bottom 属性进行规定。
-   relative:生成相对定位的元素，相对于其原来的位置进行定位。元素的位置通过 left、top、right、bottom 属性进行规定。
-   fixed:生成绝对定位的元素，指定元素相对于屏幕视⼝（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变，⽐如回到顶部的按钮⼀般都是⽤此定位⽅式。
-   static:默认值，没有定位，元素出现在正常的文档流中，会忽略 top, bottom, left, right 或者 z-index 声明，块级元素从上往下纵向排布，⾏级元素从左向右排列。
-   inherit:规定从父元素继承 position 属性的值
-   sticky:表现为在跨越特定阈值(top, right, bottom 或 left)前为相对定位，之后为固定定位

## 场景应用

### 实现一个三角形

```css
/* ▽ */
.outer {
    height: 0;
    width: 0;
    border-top: 50px solid red;
    border-right: 50px solid transparent;
    border-left: 50px solid transparent;
}
/* 二分之一三角 */
div {
    width: 0;
    height: 0;
    border-top: 100px solid red;
    border-right: 100px solid transparent;
}
```

### 实现一个扇形

```css
.outer {
    height: 0;
    width: 0;
    border: 100px solid transparent;
    border-radius: 100px;
    border-top-color: red;
}
```

### 画一个 0.5px 的线

```css
.outer {
    width: 500px;
    border: 1px solid red;
    transform: scale(1, 0.5);
}
```
