/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
   let head1=l1;
   let head2=l2;
    while(head1||head2){
        head1.val+=head2?.val||0
        if(head1.val>=10){
         head1.val%=10
            if(head1.next)
            head1.next.val+=1
            else 
            head1.next=new ListNode(1,null)}
        if(!head1.next&&head2?.next){
           //l2 is longer than l1
           head1.next=head2.next
            break;}
        
        head1=head1.next
        head2=head2?.next
    }
        return l1
};
