/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while(head?.next){
          if(head?.val===val)
            head=head.next
    else break
}
if(head?.val===val)return null //at this case we jsut have one element so we gonan retirn it
    let pointer=head

while(pointer?.next){
      if (pointer.next.val===val){
        pointer.next=pointer.next.next
}
else pointer=pointer.next
      }
      return head

 };