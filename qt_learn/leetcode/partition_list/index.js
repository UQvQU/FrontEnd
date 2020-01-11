// 链表
function ListNode(val) {
  this.val = val
  this.next = null
}

var partition = function (head, x) {
  // dummySmaller、dummyGreater保留头结点
  var smaller = dummySmaller = new ListNode(-1)
  var greater = dummyGreater = new ListNode(-1)
  // 遍历链表
  while(head) {
    // console.log(head.val)
    if (head.val < x) {
      // 较小值进入smaller链表
      smaller.next = head
      smaller = smaller.next
    } else {
      // 较大值进入greater链表
      greater.next = head
      greater = greater.next
    }
    head = head.next
  }
  // 合并smaller和greater链表
  smaller.next = dummyGreater.next
  greater.next = null
  return dummySmaller.next
}

const n1 = new ListNode(1)
const n2 = new ListNode(4)
const n3 = new ListNode(3)
const n4 = new ListNode(2)
const n5 = new ListNode(5)
const n6 = new ListNode(2)
n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n6

partition(n1, 3)
