---
title: 双指针
comment: valine
categories:
    - - 算法
      - 常见算法套路
tags:
    - 91
    - 算法
    - JS
    - 基础
    - 双指针
date: 2021-06-01 21:48:53
---

> 指的是在遍历对象的过程中，使用两个相同方向（ 快慢指针 ）或者相反方向（ 对撞指针 ）的指针进行扫描，从而达到相应的目的。

<!-- more -->

# 双指针

## 常见题型

### 快慢指针

-   两个指针步长不同，一个步长大，一个步长小。典型的是一个步长为 1，另外一个步长为 2
-   模板
<details>
    <summary>展开查看</summary>

```js
l = 0
r = 0
while 没有遍历完
  if 一定条件
    l += 1
  r += 1
return 合适的值
```

</details>

#### 常见套路

-   判断链表是否有环
    -   [287. 寻找重复数](https://leetcode-cn.com/problems/find-the-duplicate-number/)
-   读写指针。典型的是删除重复元素
    -   [80.删除排序数组中的重复项 II](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/)
-   一次遍历（One Pass）求链表的中点

#### 推荐题

-   26.Remove Duplicates from Sorted Array（Easy）
-   141.Linked List Cycle (Easy)
-   142.Linked List Cycle II（Medium）
-   287.Find the Duplicate Number（Medium）
-   202.Happy Number (Easy)

### 左右端点指针

-   两个指针分别指向头尾，并往中间移动，步长关系不确定
-   模板
<details>
    <summary>展开查看</summary>

```js
int l = 0;
int r = nums.size() - 1;

while (l < r) {
    if(一定条件) return 答案
    if(一定条件) l++
    if(一定条件) r--
}
// 由于循环结束的时候 l == r，因此返回 l 和 r 都是一样的
return l
```

</details>

#### 常见套路

-   二分查找。
-   暴力枚举中“从大到小枚举”（剪枝）
-   有序数组。

#### 推荐题

-   16.3Sum Closest (Medium)
-   713.Subarray Product Less Than K (Medium)
-   977.Squares of a Sorted Array (Easy)
-   Dutch National Flag Problem

-   33.Search in Rotated Sorted Array (Medium)
-   875.Koko Eating Bananas（Medium）
-   881.Boats to Save People（Medium）

### 固定间距指针

-   两个指针间距相同，步长相同
-   模板
<details>
    <summary>展开查看</summary>

```js
l = 0
r = k
while 没有遍历完
  自定义逻辑
  l += 1
  r += 1
return 合适的值
```

</details>

#### 常见套路

-   一次遍历（One Pass）求链表的倒数第 k 个元素
-   滑动窗口

#### 推荐题

-   1456.Maximum Number of Vowels in a Substring of Given Length（Medium）
