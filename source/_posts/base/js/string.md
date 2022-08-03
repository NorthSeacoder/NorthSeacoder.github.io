---
title: string
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
date: 2022-03-12 17:42:45
---

> 字符串相关概念

<!-- more -->

## 字符串截取的方法

-   substr(indexStart, length)

    -   避免使用
    -   如果 length 为 0 或负值，则 substr 返回一个空字符串。如果忽略 length，则 substr 提取字符，直到字符串末尾。如果截取到字符串的末尾，则会停止截取
    -   如果 start 为正值，且大于或等于字符串的长度，则 substr 返回一个空字符串。
    -   如果 start 为负值，则 substr 把它作为从字符串末尾开始的一个字符索引(stringLength+start)
    -   如果 start 为负值且 abs(start) 大于字符串的长度，则 substr 使用 0 作为开始提取的索引

-   substring(indexStart[, indexEnd])

    -   substring()从提取的字符 indexStart 可达但不包括 indexEnd
    -   如果 indexStart 等于 indexEnd，substring 返回一个空字符串。
    -   如果省略 indexEnd，substring 提取字符一直到字符串末尾。
    -   如果任一参数小于 0 或为 NaN，则被当作 0。
    -   如果任一参数大于 stringName.length，则被当作 stringName.length。
    -   如果 indexStart 大于 indexEnd，两个参数调换位置。

-   slice(indexStart[, indexEnd])
    -   slice() 提取的新字符串包括 beginIndex 但不包括 endIndex
    -   如果 indexStart 为负值，则 substr 把它作为从字符串末尾开始的一个字符索引(stringLength+indexStart)
    -   如果 indexStart 大于或等于字符串的长度，则 slice()返回一个空字符串。
    -   如果 indexEnd 为负值，则 substr 把它作为从字符串末尾开始的一个字符索引(stringLength+indexEnd)

## slice 和 substring 的区别

-   负值处理:slice 遇到负值时从字符串末尾开始计数,substring 将负值转换为 0
-   第二个参数大于第一个参数:substring 交换,slice 返回空值
