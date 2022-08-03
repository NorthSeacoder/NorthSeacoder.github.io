---
title: file
comment: valine
categories:
    - - 我不知道的
      - js
tags:
    - 我不知道的
    - js
    - file
    - upload
cata: js
date: 2022-02-15 20:19:30
---

> js 中 file 类型的相关笔记

<!-- more -->

## 前端上传文件前文件变动

正常的上传文件流程:点击上传文件按钮->打开文件选择窗口欧->选择文件->窗口关闭->页面展示所选择文件->点击确定上传文件

当页面展示文件后我们在磁盘上修改了此文件内容后再点击上传则会报错:net::ERR_UPLOAD_FILE_CHANGED
所以需要在确定时检查文件内容是否有变动

```js
async function fileValidator(file) {
    let isChanged = false;
    try {
        await file.slice(0, 1).arrayBuffer();
    } catch (error) {
        isChanged = true;
    }
    return isChanged;
}
```

## 用法

## 参考链接
