// 反转链表

const obj = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null,
    },
  },
};

// ReverseList(obj);

/*

理解：

1:cur:{1->2->3} pre:null
cur.next: null  pre:1->null cur:2->3->null
cur.next: 1->null pre:2->3->null cur: 3->null
cur.next: 2->1->null pre:3->null cur:null
*/

// function ReverseList(obj) {
//   let pre = null;
//   let cur = obj;
//   while (cur) {
//     [cur.next, pre, cur] = [pre, cur, cur.next];
//   }
//   return;
// }

function ReverseList(obj) {
  let prev = null;
  let cur = obj;
  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  console.log(prev);
  return prev;
}

ReverseList(obj);
