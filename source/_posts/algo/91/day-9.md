---
title: day-9 109. 有序链表转换二叉搜索树
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
date: 2021-05-18 10:10:06
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/

## 思路

-   快慢指针找中间节点
-   递归构造二叉树

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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    if (!head) return null;

    return run(head, null);
};
function run(head, tail) {
    if (head === tail) return null;
    let slow = head,
        fast = head;
    while (fast !== tail && fast.next !== tail) {
        fast = fast.next.next;
        slow = slow.next;
    }
    const root = new TreeNode(slow.val);
    root.left = run(head, slow);
    root.right = run(slow.next, tail);
    return root;
}
```

</details>

## 复杂度分析

-   时间复杂度：O(nlogn)
-   空间复杂度：O(1)

## 推荐题解

### 思路

- 构件数组

### 关键点

-

### 代码

<details>
    <summary>展开查看</summary>

```js

```

</details>

### 思路

- 分治算法

### 关键点

-

### 代码

<details>
    <summary>展开查看</summary>

```js

```

</details>
