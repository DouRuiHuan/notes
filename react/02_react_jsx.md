# react_jsx

- react 是核心语法
- react-dom 解析 jsx 语法

# ReactDOM

- ReactDOM.render 有三个参数
  - 需要渲染的节点
  - 将渲染好的 dom 节点放在那个根节点上（根节点）
  - 成功的回调

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    dom,
    根节点（doocument.getElementById('root')）,
    ()=>{
        console.log('渲染成功')
    }
)
```

# 模拟 vue 语法

- v-text

```javascript
var msg = "哈哈哈";
var dom = <div>{msg}</div>;
```

- v-html

```javascript
var h2 = <h2>哈哈哈</h2>;
var dom = <div>{h2}</div>;
```

- v-for

- v-model

- v-bind

```javascript
var href = "http://www.baidu";
var class = 'box'
var dom = <a href={href} className={class}>百度</a>;
```

- v-if

- v-show
