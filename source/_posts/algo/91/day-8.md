---
title: day-8 24. 两两交换链表中的节点
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
date: 2021-05-17 09:07:47
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/swap-nodes-in-pairs/

## 思路

-   设置虚拟头节点
-   找到最终首节点

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
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let res = head.next; //先确定最终的首节点
    let pre = new ListNode(0, head); //0,1,2,3,4
    let cur = head; //1234
    while (cur && cur.next) {
        let next = cur.next; //34
        let nextnext = next.next; //4
        cur.next = nextnext; //oo
        next.next = cur; //
        pre.next = next; //
        //console.log(pre, cur, next)

        pre = cur; //134
        cur = cur.next; //34
    }
    // console.log(res)
    return res;
};
```

</details>

## 复杂度分析

-   时间复杂度：O(n)
-   空间复杂度：O(n)

## 推荐题解

### 思路

-   递归

### 关键点

-

### 代码

<details>
    <summary>展开查看</summary>

```js

```

</details>
