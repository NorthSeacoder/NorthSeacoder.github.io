---
title: eventloop
comment: valine
categories:
    - - 基础
      - js
tags:
    - 基础
    - js
excerpt: 这是摘要
hide: true
cata: js
date: 2022-03-08 10:11:47
---

> js 事件循环机制

<!-- more -->

## 事件循环

JavaScript 引擎等待宿主环境分配宏观任务，在操作系统中，通常等待的行为都是一个事 件循环，所以在 Node 术语中，也会把这个部分称为事件循环。

## 宏任务与微任务

宿主发起的任务称为宏观任务，JavaScript 引擎发起的任务称为微观任务。

### 如何分析异步执行的顺序:

-   首先我们分析有多少个宏任务;
-   在每个宏任务中，分析有多少个微任务;
-   根据调用次序，确定宏任务中的微任务执行次序;
-   根据宏任务的触发规则和调用次序，确定宏任务的执行次序;
-   确定整个顺序。(宏-微-宏-微-)

### eventloop 的执行顺序

-   一开始整个脚本作为一个宏任务执行
-   执行过程中同步代码直接执行，宏任务进入宏任务队列，微任务进入微任务队列
-   当前宏任务执行完出队，检查微任务列表，有则依次执行，直到全部执行完
-   执行浏览器 UI 线程的渲染工作
-   检查是否有 Web Worker 任务，有则执行
-   执行完本轮的宏任务，回到 2，依此循环，直到宏任务和微任务队列都为空

### 常见任务

-   微任务:MutationObserver、Promise.then()或 catch()、Promise 为基础开发的其它技术，比如 fetch API、V8 的垃圾回收过程、Node 独有的 process.nextTick。
-   宏任务:script 、setTimeout、setInterval 、setImmediate 、I/O 、UI rendering。
-   在所有任务开始的时候，由于宏任务中包括了 script，所以浏览器会先执行一个宏任务，在这个过程中你看到的延迟任务(例如 setTimeout)将被放到下一轮宏任务中来执行。

## 代码执行注意点

-   new Promise 时会先执行构造函数内的代码
-   promise 内有 resolve() 时,状态会变为 resolved,并且在微任务队列里遇到 then 时才会执行 then 内函数
-   new Promise 如果被包在函数中,只有在函数调用的时候才会执行
-   在 Promise 中，返回任意一个非 promise 的值都会被包裹成 promise 对象，例如 return 2 会被包装为 return Promise.resolve(2)。
-   Promise 的状态一经确定就不能再改变,既有 resolve 和 reject 的时候,状态始终是第一个
-   catch 不管被连接到哪里，都能捕获上层未捕捉过的错误(多个 then 连接的时候)
-   promise 内部状态一经改变，并且有了一个值，那么后续每次调用 .then 或者 .catch 都会直接拿到该值。
-   .then 或者 .catch 的参数期望是函数，传入非函数则会发生值透传,即第一个函数 resolve 的值传到最后一个 then 内
-   finally 最终返回的是一个上一次的 Promise 对象值(return 没用)，不过如果抛出的是一个异常则返回异常的 Promise 对象。
-   链式调用后面的内容需要等前一个调用执行完才会执行。
-   .catch()函数能够捕获到.all()里最先的那个异常，并且只执行一次(all 里有多个异常时),且有一个异常时不会进入 then 的第一个参数
-   紧跟着 await 后面的语句相当于放到了 new Promise 中，下一行及之后的语句相当于放在 Promise.then 中
-   定时器谁先执行，你只需要关注谁先被调用的以及延迟时间是多少
-   await 后面跟的 promise 必须要有返回值,否则 await 后的内容不会执行
-   finally(res=>res) 没有 res

## 相关手写题

-   使用 Promise 实现每隔 1 秒输出 1,2,3

```js
const arr = [1, 2, 3];
arr.reduce((p, x) => {
    return p.then(() => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(console.log(x)), 1000);
        });
    });
}, Promise.resolve());

//本质上:
Promise.resolve()
    .then(() => {
        return new Promise((r) => {
            setTimeout(() => {
                r(console.log(1));
            }, 1000);
        });
    })
    .then((r) => {
        return new Promise((r) => {
            setTimeout(() => {
                r(console.log(2));
            }, 1000);
        });
    })
    .then((r) => {
        return new Promise((r) => {
            setTimeout(() => {
                r(console.log(3));
            }, 1000);
        });
    });
```

-   使用 Promise 实现红绿灯交替重复亮

```js
//红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

const light = (timer, cb) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            cb();
            resolve();
        }, timer);
    });
};
const step = () => {
    Promise.resolve()
        .then(() => {
            return light(3000, red);
        })
        .then(() => {
            return light(2000, yellow);
        })
        .then(() => {
            return light(1000, green);
        })
        .then(() => {
            return step();
        });
};
step();
```

-   实现 mergePromise 函数  
    实现 mergePromise 函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组 data 中。

```js
//定义一个数组data用于保存所有异步操作的结果
//初始化一个const promise = Promise.resolve()，然后循环遍历数组，在promise后面添加执行ajax任务，同时要将添加的结果重新赋值到promise上。
function mergePromise(ajaxArray) {
    // 存放每个ajax的结果
    const data = [];
    let promise = Promise.resolve();
    ajaxArray.forEach((ajax) => {
        // 第一次的then为了用来调用ajax
        // 第二次的then是为了获取ajax的结果
        promise = promise.then(ajax).then((res) => {
            data.push(res);
            return data; // 把每次的结果返回
        });
    });
    // 最后得到的promise它的值就是data
    return promise;
}
```

封装一个异步加载图片的方法

-

```js
function loadImg(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function () {
            console.log('一张图片加载完成');
            resolve(img);
        };
        img.onerror = function () {
            reject(new Error('Could not load image at' + url));
        };
        img.src = url;
    });
}
```

限制异步操作的并发个数并尽可能快的完成全部

-

```js
const limitedLoader = (urls, handler, limit) => {
    const sequence = [...urls];
    const promises = sequence.splice(0, limit).map((url, index) => {
        return handler(url).then(() => {
            return index;
        });
    });
    return sequences
        .reduce((pCollect, url, currentIndex) => {
            return pCollect
                .then(() => {
                    return Promise.race(promises);
                })
                .then((fastIndex) => {
                    promises[fastIndex] = handler(url).then(() => fastIndex);
                })
                .catch((err) => {
                    onsole.log(err);
                });
        }, Promise.resolve())
        .then(() => {
            Promise.all(promises);
        });
};

const limitLoad = (limit, ajaxArray) => {
    const promise = Promise.resolve();
    const ajaxs = [...ajaxArray];

    const promises = ajaxs.splice(0, limit).map((ajax, index) => ajax().then(() => index));
    return ajaxs
        .reduce((pCollect, ajax) => {
            return pCollect
                .then(() => {
                    return Promise.race(promises);
                })
                .then((fastIndex) => {
                    promises[fastIndex] = ajax().then(() => fastIndex);
                })
                .catch((err) => err);
        }, Promise.resolve())
        .then(() => {
            Promise.all(promises);
        });
};
```
