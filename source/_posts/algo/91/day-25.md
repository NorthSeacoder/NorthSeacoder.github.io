---
title: day-25 876. 链表的中间结点
comment: valine
categories:
  - - 算法
    - 刷题
    - 91
    
tags:
  - 91
  - 刷题
  - JS
  - 双指针
  - 链表
date: 2021-06-03 10:10:29
hide: true
---

## 题目地址
https://leetcode-cn.com/problems/middle-of-the-linked-list/
## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let slow = head, fast = head;
    while (fast&&fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    return slow
};

```

</details>

## 复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(1)

## 推荐题解

### 思路

-

### 关键点

-

### 代码

<details>
    <summary>展开查看</summary>

```js

```

</details>
