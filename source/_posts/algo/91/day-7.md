---
title: day-7 61. 旋转链表
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - 链表
date: 2021-05-16 22:20:58
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/rotate-list/

## 思路

-   获取链表长度 num 并通过 k=k%num 求出真正的右移次数
-   循环 k 次,尾插头

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next) return head;
    let num = 2;
    while (k > 0) {
        let cur = head;
        while (cur.next.next) {
            cur = cur.next;
            num++;
        }
        if (k > num) k = k % num; //剪枝
        if (k > 0) {
            let tail = cur.next;
            cur.next = null;
            tail.next = head;
            head = tail;
            k--;
        }
    }
    return head;
};
```

</details>

## 复杂度分析

-   时间复杂度：O(kn)
-   空间复杂度：O(n)

## 推荐题解

### 思路

- 找到第 k 个节点并将后面右移

### 关键点

-

### 代码

<details>
    <summary>展开查看</summary>

```js

```

</details>
