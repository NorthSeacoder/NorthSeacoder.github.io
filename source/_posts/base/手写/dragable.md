---
title: 可拖拽元素
comment: valine
categories:
    - - 基础
      - 手写
tags:
    - 基础
    - 手写
date: 2022-03-01 07:58:24
---

> 实现一个可拖拽的元素

<!-- more -->

```html
<body>
    <div id="dragable"></div>
</body>
```

```css
* {
    padding: 0;
    margin: 0;
}

#dragable {
    position: absolute;
    border: 1px solid red;
    width: 100px;
    height: 100px;
}
```

```js
let dragging = false;
let position = null;

const dragable = document.querySelector('#dragable');
dragable.addEventListener('mousedown', function (e) {
    dragging = true;
    position = [e.clientX, e.clientY];
});

document.addEventListener('mousemove', function (e) {
    if (dragging) {
        const x = e.clientX;
        const y = e.clientY;
        const deltaX = x - position[0];
        const deltaY = y - position[1];
        const left = parseInt(dragable.style.left || 0);
        const top = parseInt(dragable.style.top || 0);
        dragable.style.left = left + deltaX + 'px';
        dragable.style.top = top + deltaY + 'px';
        position = [x, y];
    }
});
document.addEventListener('mouseup', function () {
    dragging = false;
});
```
