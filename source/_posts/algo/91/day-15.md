---
title: day-15 129. 求根节点到叶节点数字之和
comment: valine
categories:
    - - 算法
      - 刷题
      - 91
      
tags:
    - 91
    - 刷题
    - JS
    - 树
    - 二叉树
    - dfs
    - bfs
    - 路径
date: 2021-05-24 09:23:58
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/

## 思路

- 递归实现

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
    let sum = 0;
    const getSum = (node, cur) => {
        cur = cur * 10 + node.val;

        if (!node.left && !node.right) {
            sum += cur;
        }
        if (node.left) getSum(node.left, cur);
        if (node.right) getSum(node.right, cur);
    };
    getSum(root, 0);
    return sum;
};
```

</details>

## 复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(n)

## 推荐题解

### 思路

- bfs

### 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
    let sum = 0;
    const queue = [[root,root.val]];
    while(queue.length){
        let [node,curSum] = queue.shift();
        if(!node.left&&!node.right){
            sum+=curSum
        }else{
            node.left&&queue.push([node.left,curSum*10+node.left.val])
            node.right&&queue.push([node.right,curSum*10+node.right.val])
        }
    }
    return sum
};
```

</details>
