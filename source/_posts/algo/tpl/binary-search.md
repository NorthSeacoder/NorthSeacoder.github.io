---
title: 二分法
comment: valine
categories:
    - - 算法
      - 常见算法套路
tags:
    - 91
    - 算法
    - JS
    - 专题
    - 二分查找
date: 2021-06-07 08:26:19
---

> 二分查找是一种在有序数组查找某一特定元素并能将问题的规模缩小到原有的一半的搜索算法,

<!-- more -->

# 二分查找

二分查找又称折半搜索算法。 狭义地来讲，二分查找是一种在有序数组查找某一特定元素的搜索算法。 广义的二分查找是将问题的规模缩小到原有的一半

## 基本概念

### 解空间

解空间指的是题目所有可能的解构成的集合

### 序列有序

虽然二分法不意味着需要序列有序，但大多数二分题目都有有序这个显著特征。只不过：

-   有的是题目直接限定了有序。
-   有的是需要你自己构造有序序列。(给 nums 做前缀和或者前缀或)

### 极值

## 四个境界

### one

-   不会死循环
-   权衡使用递归与非递归
-   3 个痛点
-   通用模板
<details>
    <summary>通用模板</summary>

```js
function binarySearch(nums, target) {
    if (nums.length === 0) return -1;
    let start = 0,
        end = nums.length - 1;
    while (start + 1 < end) {
        const mid = Math.floor(start + (end - start) / 2);
        if (nums[mid] < target) {
            start = mid;
        }
        if (nums[mid] === target) {
            //不直接返回的原因:中点左边可能存在target
            end = mid;
        }
        if (nums[mid] > target) {
            end = mid;
        }
    }
    if (nums[start] === target) return start;
    if (nums[end] === target) return end;
    return -1;
}
```

</details>

### two

-   在已排序的数据上二分
-   找到满足某个条件的第一个位置或最后一个位置

#### 相关类型

-   小于 x 的最大 index,插入 x 的 index
-   大于等于 x 的最小 index
-   任意一个等于 x 的 index
-   小于等于 x 的最大 index
-   大于 x 的最小 index,插入 x 的 index
-   x 出现的次数=等于 x 的最大 index-等于 x 的最小 index

### three

-   在未排序的数据上二分
-   保留有解的一半,或者去掉无解的一半

### four

-   在解空间上二分
-   二分后验证结果偏大还是偏小

## 常见题型

### 查找一个数

<details>
    <summary>模板</summary>

```js
function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] == target) return mid;
        if (nums[mid] < target)
            // 搜索区间变为 [mid+1, right]
            left = mid + 1;
        if (nums[mid] > target)
            // 搜索区间变为 [left, mid - 1]
            right = mid - 1;
    }
    return -1;
}
```

</details>

### 寻找最左边的满足条件的值

<details>
    <summary>展开查看</summary>

```js
function binarySearchLeft(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] == target)
            // 收缩右边界
            right = mid - 1; //查看[0,mid-1],如果之后都没有了,left 最红会变为 mid
        if (nums[mid] < target)
            // 搜索区间变为 [mid+1, right]
            left = mid + 1;
        if (nums[mid] > target)
            // 搜索区间变为 [left, mid - 1]
            right = mid - 1;
    }
    // 检查是否越界
    if (left >= nums.length || nums[left] != target) return -1;
    return left;
}
```

</details>

### 寻找最右边的满足条件的值

<details>
    <summary>展开查看</summary>

```js
function binarySearchRight(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] == target)
            // 收缩左边界
            left = mid + 1;
        if (nums[mid] < target)
            // 搜索区间变为 [mid+1, right]
            left = mid + 1;
        if (nums[mid] > target)
            // 搜索区间变为 [left, mid - 1]
            right = mid - 1;
    }
    // 检查是否越界
    if (right < 0 || nums[right] != target) return -1;
    return right;
}
```

</details>

### 寻找最左插入位置

将寻找最左插入位置看成是寻找最右满足小于 x 的位置 + 1

<details>
    <summary>展开查看</summary>

```js
function bisect_left(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] >= target) {
            // 搜索区间变为 [left, mid - 1]
            right = mid - 1;
        }

        if (nums[mid] < target) {
            // 搜索区间变为 [mid+1, right]
            left = mid + 1;
        }
    }
    // 检查是否越界
    if (left >= nums.length) return -1;
    return left;
}
```

</details>

### 寻找最右插入位置

将寻找最右插入位置看成是寻找最左满足大于 x 的值

<details>
    <summary>展开查看</summary>

```js
function bisect_right(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = (left + (right - left)) >> 2;
        if (nums[mid] > target) {
            // 搜索区间变为 [left, mid - 1]
            right = mid - 1;
        }

        if (nums[mid] <= target) {
            // 搜索区间变为 [mid+1, right]
            left = mid + 1;
        }
    }
    // 检查是否越界
    if (left >= nums.length) return -1;
    return left;
}
```

</details>

#### 最左最右总结

最左二分不断收缩右边界，最终返回左边界

最右二分不断收缩左边界，最终返回右边界

### 局部有序（先降后升或先升后降）

-   找 mid 判断在有序范围还是无序范围

## 应用

### 能力检测二分

定义函数 possible， 参数是 mid，返回值是布尔值。外层根据返回值调整"解空间"。

### 计数二分

### 前缀和二分

### 插入排序二分
