// 冒泡排序
// sortFn();
function sortFn() {
  let arr = [1, 7, 8, 5, 2, 3, 4];
  len = arr.length;
  while (len > 0) {
    for (let i = 0; i < len; i++) {
      if (arr[i] - arr[i + 1] > 0) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    len--;
  }
  console.log(arr);
}
