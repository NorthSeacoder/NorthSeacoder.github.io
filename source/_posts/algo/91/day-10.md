---
title: day-10 160. 相交链表
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
date: 2021-05-19 08:39:15
hide: true
---

## 题目地址
https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
## 思路
- 哈希法
- 双指针
## 代码

<details>
    <summary>哈希法</summary>

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    //哈希表
    const record = [];
    let curA=headA
    while (curA) {
        record.push(curA);
        curA = curA.next
    }
    let curB=headB;
    while(curB){
        if(record.includes(curB))return curB;
        curB=curB.next
    }
    return null
};
```

**复杂度分析**

- 时间复杂度：O(n)
- 空间复杂度：O(n)

</details>

<details>
    <summary>双指针</summary>

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    //双指针
    let pointA = headA, pointB = headB;
    while (pointA !== pointB) {
        pointA = pointA ? pointA.next : headB;
        pointB = pointB ? pointB.next : headA;
    }
    return pointA
};
```

**复杂度分析**

- 时间复杂度：O(M+n)
- 空间复杂度：O(1)

</details>


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
