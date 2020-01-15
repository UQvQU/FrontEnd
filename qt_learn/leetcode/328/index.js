// function ListNode(val) {
//   this.val = val
//   this.next = null
// }

// const n1 = new ListNode(1)
// const n2 = new ListNode(2)
// const n3 = new ListNode(6)
// const n4 = new ListNode(3)

// n1.next = n2
// n2.next = n3
// n3.next = n4

// function oddEvenList(head) {
//   if (!head || !head.next) {
//     return head
//   }
//   let odd = dummyOdd = {
//     next: null
//   }
//   let even = dummyEven = {
//     next: null
//   }
//   let flagOdd = true
//   while (head) {              // 溢出
//     if (flagOdd) {
//       odd.next = head
//       flagOdd = false
//       odd = odd.next
//       console.log('odd', odd.val)
//     } else {
//       even.next = head
//       flagOdd = true
//       even = even.next
//       console.log('even', even.val)
//     }
//     head = head.next
//   }
//   odd.next = dummyEven.next
//   // let result = dummyOdd.next
//   // while(result) {
//   //   console.log(result.val)
//   //   result = result.next
//   // }
//   return dummyOdd.next
// }
// oddEvenList(n1)


// 原地

// function ListNode(val) {
//   this.val = val
//   this.next = null
// }

// const n1 = new ListNode(1)
// const n2 = new ListNode(2)
// const n3 = new ListNode(6)
// const n4 = new ListNode(3)

// n1.next = n2
// n2.next = n3
// n3.next = n4

// function oddEvenList(head) {
//   if (!head || !head.next) {
//     return head
//   }
//   const dummyOdd = {
//     next: head
//   }
//   const dummyEven = {
//     next: head.next
//   }
//   let odd = dummyOdd.next
//   let even = dummyEven.next
//   while(odd && even && odd.next && even.next) {
//     const oddNext = odd.next.next
//     const evenNext = even.next.next
//     odd.next = oddNext
//     even.next = evenNext

//     odd = odd.next
//     even = even.next
//   }
//   odd.next = dummyEven.next

//   return dummyOdd.next
// }

// oddEvenList(n1)