---
title: day-11 142. 环形链表 II
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
  - 双指针
  - 哈希表
date: 2021-05-20 09:26:08
hide: true
---

## 题目地址
https://leetcode-cn.com/problems/linked-list-cycle-ii/
## 思路
- 双指针
- 第一次相交后 fast 重置,步长改为 1
- do-while 和 while 的区别:do 先执行再循环

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
var detectCycle = function (head) {
    let fast = head, slow = head;
    // while (fast !== slow) {
    //     if (!fast || !fast.next) return null
    //     fast =  fast.next.next;
    //     slow = slow.next;
    // }
    do {
        if (!fast || !fast.next) return null;
        fast = fast.next.next
        slow = slow.next
    } while (fast != slow)
    if (!fast) return null;
    fast = head;
    while (fast != slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return fast;
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
