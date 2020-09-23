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
    let  dummy = new ListNode(-1);
    let pointer = dummy;
    var carry = 0;
    while(l1 || l2){
        var x = (l1  ? l1.val : 0)
        var y = (l2  ? l2.val : 0)
        var sum = x + y + carry
        //console.log(carry)
        dummy.next = new ListNode(sum % 10); 
        carry = sum >= 10 ?  1 : 0;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
        dummy = dummy.next;
    }
    
    if(carry > 0){
        dummy.next = new ListNode(carry)
    }
    
    
    
    return pointer.next
};

