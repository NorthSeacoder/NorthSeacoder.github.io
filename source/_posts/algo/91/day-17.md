---
title: day-17 297. 二叉树的序列化与反序列化
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
    - bfs
date: 2021-05-26 07:35:19
hide: true
---

## 题目地址

https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/

## 思路

-   层序遍历转换成字符串
-   然后再转换成 tree
-   前序加中序没想好怎么处理字符相同的情况

## 代码

<details>
    <summary>展开查看</summary>

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    //bfs
    let res = [],queue = [root];
    while(queue.length){
        let cur = queue.shift();
        if(cur){
            res.push(cur.val);
            queue.push(cur.left)
            queue.push(cur.right)
        }else{
            res.push('#')
        }
    }
    return  res.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data === '#') return null;
    let list = data.split(',');
    let root = new TreeNode(list[0])
    let queue = [root];
    let ind = 1;
    
    while(ind<list.length){
        let node = queue.shift();
        let left = list[ind];
        let right = list[ind+1];
        if(left!=='#'){
            let leftNode = new TreeNode(left)
            node.left = leftNode;
            queue.push(leftNode)
        }
        if(right!=='#'){
            let rightNode = new TreeNode(right)
            node.right = rightNode;
            queue.push(rightNode)
        }
        ind+=2
    }
    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

```

</details>

## 复杂度分析

- 时间复杂度：O(n)
- 空间复杂度：O(n)


## 推荐题解

### 思路

- dfs,前序遍历

### 关键点

-

### 代码

<details>
    <summary>展开查看</summary>

```js

```

</details>
