---
title: Iterator
comment: valine
categories:
    - - 我不知道的
      - JS
tags:
    - 我不知道的
    - JS
date: 2022-01-16 21:05:14
---

> 迭代器(Iterator),同生成器(generator),ES6 新增的两个高级特性,是一种结构化的模式,用来更清晰,高效,方便的实现迭代

<!-- more -->

## 可迭代协议

以 Symbol.iterator 为键,返回迭代器的函数

### 迭代器的两种实现方式

#### 自定义迭代器

```ts
//done:false 和 value:undefined 时可省略
interface IteratorResult {
    done?: boolean; //是否可以再次调用获取下一个值
    value?: any;
}
interface Iterator {
    next: () => IteratorResult;
    return?: () => IteratorResult; //迭代临时关闭时(break/continue/return/throw)或解构时未解构所有的值会调用
}
```

具体实现

```js
class Counter {
    constructor(limit) {
        this.limit = limit;
    }
    [Symbol.iterator]() {
        let count = 1;
        const {limit} = this;
        return {
            next() {
                if (count <= limit) return {value: count++};
                return {done: true};
            },
            return() {
                console.log('中止');
                return {done: true};
            }
        };
    }
}
let counter = new Counter(5);
for (let i of counter) {
    console.log(i);
}
//1,2,3,4,5

for (let i of counter) {
    if (i > 3) break;
    console.log(i);
}
//1,2,3,中止

let [a] = counter;
//中止
```

#### 生成器定义迭代器

生成器对象也实现了 Iterator 接口

```js
const range = function* (start, end) {
    while (end > start) {
        yield ++start;
    }
};
class Counter {
    constructor(limit) {
        this.limit = limit;
    }
    *[Symbol.iterator]() {
        let {limit} = this;
        yield* range(0, limit);
    }
}
let counter = new Counter(5);
for (let i of counter) {
    console.log(i);
}
//1,2,3,4,5
```

### 内部调用该属性的场合

以不支持直接迭代的对象为例

```js
const obj = {
    params1: 'value1',
    params2: 'value2',
    params3: 'value3',
    params4: 'value4'
};
```

#### for-of 循环

```js
for (let item of obj) {
    console.log(item);
}
//obj is not iterable
obj[Symbol.iterator] = function* () {
    yield* Object.values(this);
};
for (let item of obj) {
    console.log(item);
}
//value1,value2,value3,value4,
```

#### 数组解构

```js
let [params1] = obj;
//obj is not iterable
obj[Symbol.iterator] = function* () {
    yield* Object.values(this);
};
let [params1] = obj;
params1; //value1
```

#### 数组扩展操作符

```js
let arr = [...obj];
//obj is not iterable
obj[Symbol.iterator] = function* () {
    yield* Object.entries(this).map(([key, value]) => `${key}-${value}`);
};
let arr = [...obj];
arr; //['params1-value1', 'params2-value2', 'params3-value3', 'params4-value4']
```

#### Array.from

注意.这里没有报错

```js
let arr = Array.from(obj);
arr; //[]

obj[Symbol.iterator] = function* () {
    yield* Object.entries(this).map(([key, value]) => ({key, value}));
};
let arr = Array.from(obj);
arr;
// {
//     "key": "params1",
//     "value": "value1"
// },
// {
//     "key": "params2",
//     "value": "value2"
// },
// {
//     "key": "params3",
//     "value": "value3"
// },
// {
//     "key": "params4",
//     "value": "value4"
// }
]
```

#### Set 构造函数

```js
let set = new Set(obj);
//object is not iterable
obj[Symbol.iterator] = function* () {
    yield* Object.values(this);
};
let set = new Set(obj);
set; //Set(4) {'value1', 'value2', 'value3', 'value4'}
```

#### Map 构造函数

```js
let set = new Map(obj);
//object is not iterable

//Map 需要返回一个二维数组,这里直接用 values 的话也会报错
obj[Symbol.iterator] = function* () {
    yield* Object.values(this);
};
//Iterator value value1 is not an entry object

obj[Symbol.iterator] = function* () {
    yield* Object.entr(this);
};
let map = new Map(obj);
map; // Map(4) {'params1' => 'value1', 'params2' => 'value2', 'params3' => 'value3', 'params4' => 'value4'}
```

#### 其他

-   Promise.all()/Promise.race():接受 promise 组成的可迭代对象
-   yield\*

## 迭代器

数组的默认迭代器

```js
Array.prototype.values === Array.prototype[Symbol.iterator]; //true
```

迭代器中保存的是原对象的地址,而非元素值,所以迭代过程中迭代对象有变化,迭代器也会反映相关的变化

```js
const arr = ['params1', 'params2'];
let iter = arr[Symbol.iterator]();
iter.next(); //{value: 'params1', done: false}
arr.splice(1, 0, 'params1.5'); //arr=>['params1', 'params1.5', 'params2']
iter.next(); //{value: 'params1.5', done: false}
```

Symbol.iterator 返回的迭代器只能迭代一次,因为 {done:true},确切来说,上面提到的应用迭代器的场合是在消耗一个迭代器

```js
let arr = [1, 2, 3, 4];
let iter = arr[Symbol.iterator]();
for (let item of iter) {
    console.log(item);
}
//1,2,3,4
for (let item of iter) {
    console.log(item);
}
//undefined=>此时 next()函数返回值为{done:true}
```

由于 return()是可选的,因此迭代器可设置成不可关闭的,比如数组的迭代器

```js
let arr = [1, 2, 3, 4];
let iter = arr[Symbol.iterator]();
for (let item of iter) {
    if (item >= 3) break;
    console.log(item);
}
//1,2
//此时可以继续迭代
for (let item of iter) {
    console.log(item);
}
//4
```

一个不可关闭的迭代器即使添加 return()依然是无法关闭的,调用迭代器的 return()并不会强制领其中止,但会在临时中止时调用

```js
let arr = [1, 2, 3, 4];
let iter = arr[Symbol.iterator]();
iter.return = () => {
    console.log('中止');
    return {done: true};
};
for (let item of iter) {
    if (item >= 3) break;
    console.log(item);
}
//1,2,中止
//此时可以继续迭代
for (let item of iter) {
    console.log(item);
}
//4
```

### 给数字加个迭代器

实现[...3]=>[0,1,2,3],[...-3]=>[0,-1,-2,-3]

```js
if (!Number.prototype[Symbol.iterator]) {
    Object.defineProperty(Number.prototype, Symbol.iterator, {
        writable: true,
        configurable: true,
        enumerable: true,
        value: function* () {
            let start = 0;
            let end = this;
            if (end > 0) {
                while (end >= start) {
                    yield start++;
                }
            } else {
                while (end <= start) {
                    yield start--;
                }
            }
        }
    });
}
```

## 参考链接

-   JavaScript 高级程序设计第 4 版
-   [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)
-   [阮一峰的网络日志](https://es6.ruanyifeng.com/#docs/string)
-   [ecma262](https://tc39.es/ecma262/#sec-common-iteration-interfaces)
