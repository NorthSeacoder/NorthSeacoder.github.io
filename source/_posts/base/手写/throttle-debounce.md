---
title: 防抖和节流
comment: valine
categories:
    - - 基础
      - 手写
tags:
    - 基础
    - 手写
excerpt: 这是摘要
hide: true
cata: 手写
date: 2022-03-01 08:39:27
---

> 手动实现节流和防抖

<!-- more -->

## 节流

-   规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
-   场景:
    -   scroll 滚动事件，每隔特定描述执行回调函数
    -   DOM 元素的拖拽功能实现（mousemove）
    -   计算鼠标移动的距离（mousemove）
    -   搜索联想（keyup）

### 实现思路

-   就是对于连续的函数调用，每间隔一段时间，只让其执行一次
-   使用时间戳:设置一个对比时间戳，触发事件时，使用当前时间戳减去对比时间戳，如果差值大于设定的间隔时间，则执行函数，并用当前时间戳替换对比时间戳；如果差值小于设定的间隔时间，则不执行函数。
-   使用定时器:当首次触发事件时，设置定时器，wait 毫秒后执行函数并将定时器置为 null，之后触发事件时，如果定时器存在则不执行，如果定时器不存在则再次设置定时器。
-   两种方式对比
    -   首次触发：使用时间戳实现时会立即执行（将 previous 设为 0 的情况）；使用定时器实现会设置定时器，wait 毫秒后执行。
    -   停止触发：使用时间戳实现时，停止触发后不会再执行；使用定时器实现时，由于存在定时器，停止触发后还会执行一次。

### 实现

```js
//使用时间戳
function throttle(method, wait) {
    let pre = 0;
    return function (...args) {
        const ctx = this;
        const now = new Date().getTime();
        if (now - pre > wait) {
            method.call(ctx, ...agrs);
            pre = now;
        }
    };
}
//使用定时器
function throttle(method, wait) {
    let timer;
    return function (...args) {
        const ctx = this;
        if (!timer) {
            timer = setTimeout(() => {
                timer = null;
                method.call(ctx, ...args);
            }, wait);
        }
    };
}
//两种方法结合,是首次触发立即执行，停止触发后会再执行一次
function throttle(method, wait) {
    let timer,
        pre = 0;
    return function (...args) {
        const ctx = this;
        const now = new Date().getTime();
        const remain = wait - (now - pre);
        //符合时间戳开始判断是否执行
        if (remain <= 0) {
            //剩余时间为负数，立即执行函数并更新对比时间戳
            //防止定时器方式再次触发
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            pre = now;
            method.call(ctx, ...args);
        } else if (!timer) {
            //还有剩余时间,但定时器不存在,需要设置定时器,差值时间后执行
            timer = setTimeout(() => {
                pre = new Date().getTime();
                timer = null;
                method.call(ctx, ...args);
            }, remain);
        }
        //剩余时间为正数，定时器存在，不执行其他行为
        //直至剩余时间小于等于0或定时器内函数执行（由于回调触发有间隔，且setTimeout有误差，故哪个先触发并不确定）
    };
}
//提供首次触发时是否立即执行的配置项
function throttle(method, wait, leading = true) {
    let timer,
        pre = 0;
    return function (...args) {
        const ctx = this;
        const now = new Date().getTime();
        //!previous代表首次触发或定时器触发后的首次触发，若不需要立即执行则将previous更新为now,这样remaining = wait > 0，则不会立即执行，而是设定定时器
        if (!pre && !leading) pre = now;
        let remain = wait - (now - pre);
        if (remain <= 0) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            pre = now;
            method.call(ctx, ...args);
        } else if (!timer) {
            timer = setTimeout(() => {
                //如果leading为false，则将previous设为0,下次触发时会与下次触发时的now同步,达到首次触发（对于用户来说）不立即执行
                //如果直接设为当前时间戳，若停止触发一段时间，下次触发时的remaining为负值，会立即执行
                pre = leading ? new Date().getTime() : 0;
                timer = null;
                method.call(ctx, ...args);
            }, remain);
        }
    };
}
//提供停止触发后是否还执行一次的配置项
function throttle(method, wait, leading = true, trailing = true) {
    let timer,
        pre = 0;
    return function (...args) {
        const ctx = this;
        const now = new Date().getTime();
        if (!pre && !leading) pre = now;
        const remain = wait - (now - pre);
        if (remain <= 0) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            pre = now;
            method.call(ctx, ...args);
        } else if (!timer && trailing) {
            //如果有剩余时间但定时器不存在，且trailing为 true，则设置定时器
            //trailing为 false等同于只使用时间戳来实现节流
            timer = setTimeout(() => {
                pre = leading ? new Date().getTime() : 0;
                timer = null;
                method.call(ctx, ...args);
            }, remain);
        }
    };
}
/**
 * 实现函数的节流 （目的是频繁触发中缩减频率）
 * @param {*} method 需要执行的函数
 * @param {*} wait 检测节流的间隔频率
 * @param {*} option:{leading,trailing} leading:首次触发时是否立即执行,trailing:停止触发后是否还执行一次
 * @return {可被调用执行的函数}
 */
function throttle(method, wait, {leading = true, trailing = true} = {}) {
    // result 记录method的执行返回值
    let timeout, result;
    // 记录上次原函数执行的时间（非每次更新）
    let methodPrevious = 0;
    // 记录上次回调触发时间（每次都更新）
    let throttledPrevious = 0;
    let throttled = function (...args) {
        let context = this;
        // 使用Promise，可以在触发回调时拿到原函数执行的返回值
        return new Promise((resolve) => {
            let now = new Date().getTime();
            // 两次相邻触发的间隔
            let interval = now - throttledPrevious;
            // 更新本次触发时间供下次使用
            throttledPrevious = now;
            // 重置methodPrevious为now，remaining = wait > 0，假装刚执行过，实现禁止立即执行
            // 统一条件：leading为false
            // 加上以下条件之一
            // 1. 首次触发（此时methodPrevious为0）
            // 2. trailing为true时，停止触发时间超过wait，定时器内函数执行（methodPrevious被置为0），然后再次触发
            // 3. trailing为false时（不设定时器，methodPrevious不会被置为0），停止触发时间超过wait后再次触发（interval > wait）
            if (leading === false && (!methodPrevious || interval > wait)) {
                methodPrevious = now;
                // 保险起见，清除定时器并置为null
                // 假装刚执行过要假装的彻底XD
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
            }
            // 距离下次执行原函数的间隔
            let remaining = wait - (now - methodPrevious);
            // 1. leading为true时，首次触发就立即执行
            // 2. 到达下次执行原函数时间
            // 3. 修改了系统时间
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                // 更新对比时间戳，执行函数并记录返回值，传给resolve
                methodPrevious = now;
                result = method.apply(context, args);
                resolve(result);
                // 解除引用，防止内存泄漏
                if (!timeout) context = args = null;
            } else if (!timeout && trailing !== false) {
                timeout = setTimeout(() => {
                    // leading为false时将methodPrevious设为0的目的在于
                    // 若不将methodPrevious设为0，如果定时器触发后很长时间没有触发回调
                    // 下次触发时的remaining为负，原函数会立即执行，违反了leading为false的设定
                    methodPrevious = leading === false ? 0 : new Date().getTime();
                    timeout = null;
                    result = method.apply(context, args);
                    resolve(result);
                    // 解除引用，防止内存泄漏
                    if (!timeout) context = args = null;
                }, remaining);
            }
        });
    };
    // 加入取消功能，使用方法如下
    // let throttledFn = throttle(otherFn)
    // throttledFn.cancel()
    throttled.cancel = function () {
        clearTimeout(timeout);
        previous = 0;
        timeout = null;
    };

    return throttled;
}
```

## 防抖

-   在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。
-   简单来说就是对于一定时间段的连续的函数调用，只让其执行一次

### 实现思路

-   第一次调用函数，创建一个定时器，在指定的时间间隔之后运行代码
-   第二次调用该函数时，它会清除前一次的定时器并设置另一个
-   如果前一个定时器已经执行过了，这个操作就没有任何意义
-   如果前一个定时器尚未执行，其实就是将其替换为一个新的定时器。目的是只有在执行函数的请求停止了一段时间之后才执行。

### 场景:

    -   浏览器窗口大小 resize 避免次数过于频繁
    -   登录，发短信等按钮避免发送多次请求
    -   文本编辑器实时保存

### 实现

```js
function debounce(method, wait, ctx) {
    let timeout;
    return function () {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            method.call(ctx);
        }, wait);
    };
}

//优化 this 指向
function debounce(method, wait) {
    let timeout;
    return function () {
        if (timeout) clearTimeout(timeout);
        const ctx = this;
        timeout = setTimeout(() => {
            method.call(ctx);
        }, wait);
    };
}
//返回函数支持传参
function debounce(method, wait) {
    let timeout;
    return function (...args) {
        if (timeout) clearTimeout(timeout);
        const ctx = this;
        timeout = setTimeout(() => {
            method.call(ctx, ...args);
            //method.apply(ctx.args)
        }, wait);
    };
}

//提供立即执行选项
//立即执行,然后等到停止触发n毫秒后，才可以重新触发执行。
function debounce(method, wait, immediate) {
    let timer;
    return function (...args) {
        const ctx = this;
        if (timer) clearTimeout(timer);
        if (!immediate) {
            timer = setTimeout(() => {
                method.call(ctx, ...args);
            }, wait);
        } else {
            //立即执行需要两个条件,immediate:true 以及 timer未赋值或置为 null
            if (!timer) method.call(ctx, ...args);
            //立即执行完后不会再次立即执行
            timer = setTimeout(() => {
                timer = null;
            }, wait);
        }
    };
}
//添加取消功能
function debounce(method, wait, immediate) {
    let timer;
    const debounded = function (...args) {
        const ctx = this;
        if (timer) clearTimeout(timer);
        if (!immediate) {
            timer = setTimeout(() => {
                method.call(ctx, ...args);
            }, wait);
        } else {
            if (!timer) method.call(ctx, ...args);
            timer = setTimeout(() => {
                timer = null;
            }, wait);
        }
    };
    debounded.cancel = () => {
        clearTimeout(timer);
        timer = null;
    };
    return debounded;
}
```

```js
/**
 * 实现函数的防抖 （目的是对于一定时间段的连续的函数调用，只让其执行一次）
 * @param {*} method 需要执行的函数
 * @param {*} wait 检测防抖的间隔频率
 * @param {*} immediate 是否立即执行
 * @return {可被调用执行的函数}
 */
function debounce(method, wait, immediate) {
    let timeout;
    // debounced函数为返回值,也就是连续被调用的函数
    // 使用Async/Await处理异步，如果函数异步执行，等待setTimeout执行完，拿到原函数返回值后将其返回
    // args为返回函数调用时传入的参数，传给method
    let debounced = function (...args) {
        return new Promise((resolve) => {
            // 用于记录原函数执行结果
            let result;
            let context = this;
            // 如果存在定时器则将其清除
            if (timeout) {
                clearTimeout(timeout);
            }
            // 立即执行需要两个条件，一是immediate为true，二是timeout未被赋值或被置为null
            if (immediate) {
                // 如果定时器不存在，则立即执行，并设置一个定时器，wait毫秒后将定时器置为null
                // 这样确保立即执行后wait毫秒内不会被再次触发
                let callNow = !timeout;
                timeout = setTimeout(() => {
                    timeout = null;
                }, wait);
                // 如果满足上述两个条件，则立即执行并记录其执行结果
                if (callNow) {
                    result = method.apply(context, args);
                    resolve(result);
                }
            } else {
                // 如果immediate为false，则等待函数执行并记录其执行结果
                // 并将Promise状态置为fullfilled，以使函数继续执行
                timeout = setTimeout(() => {
                    result = method.apply(context, args);
                    resolve(result);
                }, wait);
            }
        });
    };

    // 在返回的debounced函数上添加取消方法
    debounced.cancel = function () {
        clearTimeout(timeout);
        timeout = null;
    };

    return debounced;
}
```
