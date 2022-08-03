---
title: String
comment: valine
categories:
    - - 我不知道的
      - JS
tags:
    - 我不知道的
    - JS
date: 2022-01-15 10:04:53
---

> String 的那些我之前不知道的事情

<!-- more -->

## String()和 toString()

将一个值转换为字符串的方式

### toString()

-   除了 null 和 undefined 外所有的值都有 toString(),包括字符串本身;
-   number 类型的 toString()方法可以接受一个参数,表示会将该数值已什么底数来输出为字符串,默认为 10

### String()

当值可能为 null 或 undefined 时,可以考虑 String():

-   如果值有 toString().则无参数调用 toString()
-   如果值是 null/undefined,则返回字符串形式的"null"/"undefined"

### 值+""

利用操作符将值转换成字符串的方式

-   值有 toString 时,调用 toString()方法
-   null 和 undefined,调用 String()

## 标签函数

模板字面量支持定义标签函数来控制字符串的生成方式

### 函数签名

```js
const tag = (strings, ...exps) => {
    console.log({strings, exps});
};
let tag0 = 'tag0',
    tag1 = 'tag1',
    tag2 = 'tag2';
tag`${tag0}标签函数签名${tag1},${tag2}`;
//strings => ['', '标签函数签名', ',', ''];
//exps => ['tag0', 'tag1', 'tag2'];
```

-   标签函数的参数是原始字符串数组(如果表达式在第一个或最后一个,之前或之后依然会跟一个空字符串)和每个表达式求值的结果;
-   原始字符串必然比表达式多一个
-   表达式如果不是字符串会默认调用 toString

### 原始拼接

正常的模板字符串拼接逻辑

```js
const tag = (strings, ...exps) => strings.reduce((str, cur, index) => (str = `${str}${cur}${exp[index] || ''}`), '');
let tag0 = 'tag0',
    tag1 = 'tag1',
    tag2 = 'tag2';
tag`${tag0}标签函数签名${tag1},${tag2}`;
//'tag0标签函数签名tag1,tag2'
```

### 标签函数的应用

#### 过滤 HTML 字符串

只转义用户输入的部分

```js
const encodeHTML = (str) =>
    str.replace(
        /[&<>]/g,
        (tag) =>
            ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;'
            }[tag] || tag)
    );

const SaferHTML = (stringsArray, ...exp) =>
    stringsArray.reduce((str, cur, index) => (str = `${str}${cur}${encodeHTML(exp[index] || '')}`), '');

let sender = '<template>ddddd22</template>';
let sender1 = 'ddddd1';
let message = SaferHTML`${sender}<p> has sent you ${sender1} a message.</p>`;

//`&lt;template&gt;ddddd22&lt;/template&gt;<p> has sent you ddddd1 a message.</p>`
```

#### 多语言转换

```js
const env = {
    lang: 'en', //切换 en 和 zh
    siteName: 'nsc',
    visitorNumber: 10086
};

const langs = {
    zh: ['欢迎访问 ', '，您是第', '位访问者！']
};
//对顺序有要求
const i18n = (strings, ...exp) => {
    const {lang} = env;
    const arr = lang === 'en' ? strings : langs[lang];
    return arr.reduce((str, cur, index) => (str = `${str}${cur}${exp[index] || ''}`), '');
};
i18n`Welcome to ${env.siteName}, you are visitor number ${env.visitorNumber}`;
//'欢迎访问 nsc，您是第10086位访问者！'
```

#### 模板解析

```js
const getAndRemoveAttr = (tpl, name) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(tpl, 'text/html').body;
    const exp = doc.children[0].attributes[name].value;
    doc.children[0].removeAttribute(name);
    // if (name === 'v-if') console.log(doc, tpl);
    return {
        exp,
        doc
    };
};
const parserFor = (tpl) => {
    const {doc, exp} = getAndRemoveAttr(tpl, 'v-for');
    const children = doc.children[0].innerHTML;
    const root = doc.innerHTML.replace(children, '$child');
    return {
        exp,
        children,
        root
    };
};
const forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/; //v-for 语句 in of 语法
const tagRE = /#\{(.+?)\}/g; // #{}语法
const pickValue = (obj, keyString) => {
    const keys = keyString.split(/\]?[[.]/);
    let value = obj;
    try {
        keys.forEach((key) => (value = value[key]));
    } catch (err) {
        value = undefined;
    }
    return value;
};
// const handleIf = (tpl) => {
//   const { exp } = getAndRemoveAttr(tpl, 'v-if');
//   return exp === 'true';
// };
const handleIf = (arr, cur) => {
    const [indent] = /\n( *)/.exec(cur);
    const {exp, doc} = getAndRemoveAttr(cur, 'v-if');
    if (exp === 'true') arr.push(`${indent}${doc.innerHTML}`);
    // console.log(cur, arr);
    return arr;
};

const processFor = (param) => {
    const {tpl, values} = param;
    const {exp, children, root} = parserFor(tpl);
    const [ori, forParam, forVar] = exp.match(forAliasRE);
    const valueArray = values[+forVar.replace('$$', '') - 1];
    const childs = valueArray
        .map((item) => {
            let lastIndex = (tagRE.lastIndex = 0);
            let match, index;
            let childString = children;
            while ((match = tagRE.exec(children))) {
                index = match.index;
                const keys = match[0];
                const val = pickValue({[forParam]: item}, match[1]);
                childString = childString.replace(keys, val);
                lastIndex = index + match[0].length;
            }
            return childString;
        })
        // .filter(handleIf)
        .reduce(handleIf, [])
        .join('');

    param.tpl = root.replace('$child', childs);
};

const hashTemplate = (strings, ...values) => {
    const res = {
        tpl: strings.reduce((str, cur, index) => `${str}$$${index}${cur}`),
        values
    };
    processFor(res);
    return res.tpl;
};

const myBooks = [
    {title: '1book', author: 'nsc', isShow: true},
    {title: '2book', author: 'nsc', isShow: true},
    {title: '3book', author: 'nsc', isShow: false}
];
// 下面的hashTemplate函数
// 是一个自定义的模板处理函数
//简化下...
//不考虑#{}内表达式
//不考虑嵌套
//只考虑 v-for 在根节点,v-if在子节点....
//我是个小垃圾.....
hashTemplate`
  <ul v-for="book in ${myBooks}">
      <li v-if=#{book.isShow}>
        <i>#{book.title}</i> by #{book.author}
      </li>
  </ul>
`;
//'<ul>\n      <li>\n        <i>1book</i> by nsc\n      </li>\n  \n      <li>\n        <i>2book</i> by nsc\n      </li>\n  </ul>\n'
```

#### 直接生成相关组件

```js
//button.js
//直接起的 vite 模板,懒得配 jsx 了
import {h, defineComponent, renderSlot} from 'vue';
export default (strings, ...exp) => {
    const button = defineComponent({
        props: ['primary'],
        render() {
            const {primary} = this;
            const style = strings.reduce((str, cur, index) => `${str}${cur}${exp[index]?.({primary}) || ''}`, '');
            return h('button', {style}, renderSlot(this.$slots, 'default'));
        }
    });
    return button;
};
```

```html
//App.vue
<script setup>
    import button from './button';

    const Bbutton = button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: ${({primary}) => (primary ? '#42b983' : '#333333')};
  color: ${({primary}) => (primary ? 'white' : 'red')};
  border: 2px solid white;
`;
</script>

<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <Bbutton primary>button</Bbutton>
</template>
```

#### 优化字符串格式

```js
//去除所有缩进
const pure = (strings, ...exps) => {
    return strings.reduce((str, cur, index) => {
        return `${str}${cur.replace(/\n\s+/, '\n ')}${exps[index] || ''}`;
    }, '');
};
const name = 'nsc',
    date = '2022-01-13';
pure`/*
     * @Author: ${name}
     * @Date: ${date}
     * @Last Modified by: ${name} 
     * @Last Modified time: ${date} 
     */`;
/*
 * @Author: nsc
 * @Date: 2022-01-13
 * @Last Modified by: nsc
 * @Last Modified time: 2022-01-13
 */
```

## 参考链接

-   JavaScript 高级程序设计第 4 版
-   [阮一峰的网络日志](https://es6.ruanyifeng.com/#docs/string)
-   [vue](https://cn.vuejs.org/)
-   [wesbos-blog](https://wesbos.com/tagged-template-literals)
-   [styled-components](https://styled-components.com/)
-   [common-tags](https://github.com/zspecza/common-tags)
