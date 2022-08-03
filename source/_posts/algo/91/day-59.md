---
title: day-59 881. 救生艇
comment: valine
categories:
  - - 算法
    - 刷题
    - 91
    
tags:
  - 91
  - 刷题
  - JS
  - 贪心
date: 2021-07-07 19:21:01
hide: true
---

## 题目地址
https://leetcode-cn.com/problems/boats-to-save-people/
## 思路

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    const len = people.length;
    people = people.sort((a,b)=>a-b);
    let count = 0,right =len-1,left =0;
    while(left<=right){
        if(people[left]+people[right]<=limit)left++;
        right--
        count++
    }
    return count
};
```

</details>

## 复杂度分析
- 时间复杂度：O(nlogn)
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
