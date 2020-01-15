function ListNode(val) {
  this.val = val
  this.next = null
}

const n1 = new ListNode(1)
const n2 = new ListNode(2)
const n3 = new ListNode(6)
const n4 = new ListNode(3)

n1.next = n2
n2.next = n3
n3.next = n4

function removeElements(head, val) {
  const dummy = {
    next: head
  }
  let cur = dummy
  while(cur && cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return dummy.next
}