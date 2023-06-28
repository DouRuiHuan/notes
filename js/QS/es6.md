# let var const 块级作用域

- 他们都是声明变量的关键字，他们在作用域、赋值、重复声明方面有所不同，var 不受块级作用域限制，在全局声明的变量会成为全局变量，let 声明的变量是块级作用域，只有在声明内有效，在 for 每次都会创建一个新的变量，const 也是块级作用域，但是它的值不能重复赋值，只能被赋值一次。在开发中尽量使用 let 和 const，，提高编码可维护性。

# 箭头函数有哪些限制

- 无法使用 arguments 对象，只能使用...arg
- 无法使用 new，不能使用 call，bind，apply 绑定 this
- 无法使用 yield，因此箭头函数不能当作 generator 函数
- 没有自己的作用域，他会捕获上下文的 this，没有自己的 this

# 箭头函数为什不能作为构造函数

- 因为它没有自己的 this，他是从上下文中获取 this，不能同 new 来改变 this 指向，在构造函数中 this 的指向是随着实例变化而变化

# promise 用过哪些 api

- then：一个成功 resolve，一个失败 reject
- catch：reject 时的回调函数，
- all：接收 promise 数组；返回数组结果，当其中一个失败，返回值为失败的 Promise 值
- race： 接收 promise 数组，哪个响应快返回哪个值
- 静态方法：

  - resolve: 返回指定的结果值
  - reject： 返回一个拒绝的 promise 对象，可以指定拒绝的原因
  - allSettled： 接收一个 Promise 数组，返回一个新的 Promise，当所有 Promise 都结束时，返回值为数组，包含所有 Promise 的状态和值。
  - any： 接收一个 Promise 数组，返回一个新的 Promise，当其中任何一个 Promise 成功(resolve)时，返回值为成功的 Promise 的值；当所有 Promise 失败(reject)时，返回值为失败的 Promise 的值。

  # map 和 object 区别

  -
