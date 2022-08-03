---
title: tcp
comment: valine
categories:
    - - 基础
      - network
tags:
    - 基础
    - network
excerpt: 这是摘要
cata: network
date: 2022-02-14 16:19:32
---

> 与 tcp 相关的面试题

<!-- more -->

## tcp 三次握手

-   客户端发起请求连接等待服务器端确认
-   服务端确认自己可以接受客户端连接
-   客户端确认服务端收到自己的请求并且确认了

## tcp 和 udp 的区别

-   tcp 发送数据前需要建立连接
-   tcp 传送的数据更可靠,无差错,不丢失,不重复,且按次序到达
-   tcp 面向字节流,udp 面向报文
-   tcp 只能 1 对 1,udp 支持 1 对多
-   tcp 首部较大
