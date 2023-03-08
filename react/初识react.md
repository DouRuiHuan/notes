# 初识 react

- react 要比 vue 早 2013 5 月份左右

# react 特点

- 声明式
  - 命令式 vs 声明式
    声明式：当你想要去做一些事情的时候只需要告诉计算机你想要干什么即可，无需对内部实现做过多的了解
    命令式：当你想要做什么事情的时候需要告诉计算机你要干什么，怎么做
    - 大部分只要是 es5 的一些方法大部分都是声明式

```javascript
var arr = [10, 20, 30];
for (let i = 0; i++; i < arr.length) {}
```

- 组件：灵活复用

- 虚拟 Dom: 提高性能

- 完成的全家桶：
  vue: vue、vue-router、vuex、vue-touch、vant...
  react: react react-dom react-router-dom redux react-readux antd...

- 单向响应数据流（重点）
  vue: object.defineProperty 双向响应数据流（响应式原理）
  react: redux(观察者模式) 单向响应数据流

- 函数式编程
  概念: 是一种思想 1.声明式 2.纯函数：输入一定，输出也一定(只要不会改变原数据的一般情况下都是纯函数) 3.柯里化函数

  面试题：实现一个函数 add(2)(3)(5)结果等于 10；

            ```javascript
                function add(a){
                    return function (b){
                        return function (c){
                            return a+b+c
                        }
                    }
                }

                var num = a=> b=> c=> a+b+c
            ```

  4.反柯里化函数

- jsx 语法
  vue: template 语法
  react： jsx 语法 允许我们在 js 里面编写 html
