---
title: day-61 23. 合并K个升序链表
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - 分治
    - dp
    - 堆
    - 递归
date: 2021-07-09 09:24:38
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/merge-k-sorted-lists/

## 思路

dp

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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    const build = (list1, list2) => {
        const res = new ListNode();
        cur = res;
        while (list1 && list2) {
            if (list1.val < list2.val) {
                cur.next = list1;
                list1 = list1.next;
            } else {
                cur.next = list2;
                list2 = list2.next;
            }
            cur = cur.next;
        }
        if (!list2) cur.next = list1;
        if (!list1) cur.next = list2;
        return res.next;
    };
    const dp = new Array(lists.length + 1);
    dp[0] = null;
    dp[1] = lists[0];
    for (let i = 2; i <= lists.length; i++) {
        dp[i] = build(dp[i - 1], lists[i - 1]);
    }
    return dp[lists.length];
};
```

</details>

## 复杂度分析

-   时间复杂度：O(n^2)
-   空间复杂度：O(n)

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
