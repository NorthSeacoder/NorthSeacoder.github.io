---
title: day-44 Shortest Cycle Containing Target Node
comment: valine
categories:
  - - 算法
    - 刷题
    - 91
    
tags:
  - 91
  - 刷题
  - JS
  - BFS
date: 2021-06-22 09:37:38
hide: true
---

## 题目地址

## 思路
- bfs,分层
## 代码

<details>
    <summary>展开查看</summary>

```js
class Solution {
    solve(graph, target) {
        let res = 0;
        const queue = [target];
        const visited = new Set();
        while (queue.length) {
            const len = queue.length;
            for (let i = 0; i < len; i++) {
                const cur = queue.shift();
                visited.add(cur);
                for (let ne of graph[cur]) {
                    if (!visited.has(ne)) {
                        queue.push(ne)
                    } else if (ne === target) {
                        return res + 1
                    }
                }
            }

            res += 1
        }
        return -1
    }
}
```

</details>

## 复杂度分析

-   时间复杂度 O(V+E)
-   空间复杂度 O(E)

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
