// Definition for singly-linked list.

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let slow = head;
  let fast = head;

  while (fast) {
    if (!fast.next) {
      return false;
    } else {
      fast = fast.next.next;
      slow = slow.next;
    }
    if (fast === slow) {
      return true;
    }
  }
  return false;
}