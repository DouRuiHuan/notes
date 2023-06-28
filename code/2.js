// 反转部分链表
const obj = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: {
          value: 5,
          next: null,
        },
      },
    },
  },
};

// {1,2,3,4,5} ----> {1,4,3,2,5}

//
const observer = (obj, min, max) => {
  if (!obj || !obj.next || min === max) return obj;
  let newHead = new ListNode(0);
  newHead.next = obj;
  //   let head = obj;
  let prev = obj;
  for (let i = 1; i < min - 1; i++) {
    prev = prev.next; //1
  }
  console.log(prev);
  let cur = prev.next; //2
  let currNext = null;
  for (let i = min - 1; i < max; i++) {
    //1-3-2-4-5
    if (!cur.next) continue;
    currNext = cur.next; //3-4-5
    console.log(currNext, 345);
    cur.next = currNext.next; //2-4-5
    currNext.next = prev.next; //2-4-5
    prev.next = currNext; //3-2-4-5
  }

  console.log(JSON.stringify(obj), 23);
};

observer(obj, 1, 5);

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

function ListNode(x) {
  this.val = x;
  this.next = null;
}

function reverseBetween(head, m, n) {
  // write code here
  // 如果长度为一或 m 等 n，不需要翻转，直接返回head
  if (head.next === null || m === n) return head;
  let newHead = new ListNode(0);
  newHead.next = head;
  head = newHead;
  let prev = head;
  for (let i = 1; i < m; i++) {
    prev = prev.next;
  }
  console.log(prev);
  // 到 m 的位置，开始循环翻转到 n (m = 2, n = 4)
  // 1 -> 2 -> 3 -> 4 -> 5
  //   pn   cn   cnn        (2 -> 4 cn = cnn) (3 -> 2 cnn = pn) (1 -> 3 pn = cn)
  // 1 -> 3 -> 2 -> 4 -> 5
  //   pn        cn   cnn   (2 -> 5 cn = cnn) (4 -> 3 cnn = pn) (1 -> 4 pn = cn)
  // 1 -> 4 -> 3 -> 2 -> 5
  // curr.next 在变，currnext 就在变，prev.next 在变, 但是 prev 并没有变
  let curr = prev.next;
  let currnext;
  for (let i = m; i < n; i++) {
    currnext = curr.next;
    curr.next = currnext.next;
    currnext.next = prev.next;
    prev.next = currnext;
  }
  console.log(head);
  return head.next;
}

// reverseBetween(obj, 3, 4);
