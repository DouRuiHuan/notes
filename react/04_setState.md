# this.setState

- 在 react 中如果需要修改 this.state 中的数据，那么必须通过 this.setState 进行修改
- this.setState 是异步的
- this.setState 第二个参数是一个回调函数，这个回调的作用可以用来验证数据是否修改成功，获取数据更新后最新的 DOM 结构

#语法

- 第一种

```javascript
this.setState({ key: value }, () => {});
```

- 第二种

```javascript
this.setState(
  // 或者return object
  () => ({
    key: value,
  }),
  () => {}
);
```
