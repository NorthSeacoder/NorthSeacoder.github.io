---
title: sort
comment: valine
categories:
    - - 基础
      - 手写
tags:
    - 基础
    - 手写
    - 排序
date: 2022-03-14 10:02:41
---

> 常见排序算法

<!-- more -->

## 冒泡排序 O(n^2)

![bubbleSort](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b12312ff2fd043d99166e38615fedfaf~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

```js
const bubbleSort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};
```

## 快速排序 O(nlogn)

![quickSort](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/791f1b12b3644ed3aad18960d06a139a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

1. 选择一个参考元素，将列表分割成两个子序列；
2. 对列表重新排序，将所有小于基准值的元素放在基准值前面，所有大于基准值的元素放在基准值的后面；
3. 分别对较小元素的子序列和较大元素的子序列重复步骤 1 和 2

```js
const quickSort = (arr) => {
    if (arr.length <= 1) return arr;
    const left = [],
        right = [],
        cur = arr.shift();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < cur) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), cur, ...quickSort(right)];
};
```

## 插入排序 O(n^2)

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aa0cd7eae09f4c27b97a3a6f2ff8dc4a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

1. 从第一个元素开始，该元素可以认为已经被排序；
2. 取出下一个元素，在已经排序的元素序列中从后向前扫描；
3. 如果该元素（已排序）大于新元素，将该元素移到下一位置；
4. 重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置；
5. 将新元素插入到该位置后；
6. 重复步骤 2~5。

```js
const insertSort = (arr) => {
    let tem;
    for (let i = 0; i < arr.length; i++) {
        tem = arr[i];
        for (let j = i; j >= 0; j--) {
            if (arr[j - 1] > tem) {
                arr[j] = arr[j - 1];
            } else {
                arr[j] = tem;
                break;
            }
        }
    }
    return arr;
};
```

## 选择排序 O(n^2)

![selectSort](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/55b03eef15fb4cd59585d370c51b9e5c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

1. 待排序序列中选出最小/大值
2. 存放排序序列起始位置
3. 从剩余元素中继续寻找最小/大值,放到已排序序列末尾

```js
const selectSort = (arr) => {
    const len = arr.length;
    let minIndex = 0;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
};
```

## 归并排序 O(nlogn)

![mergeSort](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3474ad5b57ed424e865184f2e21ec651~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

1. 把长度为 n 的输入序列分成两个长度为 n/2 的子序列；
2. 对这两个子序列分别采用归并排序；
3. 将两个排序好的子序列合并成一个最终的排序序列。

```js
const merge = (left, right) => {
    const tem = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            tem.push(left.shift());
        } else {
            tem.push(right.shift());
        }
    }
    return [...tem, ...left, ...right];
};

const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
};
```
