/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) return head;
    let prev = null;
    let next = null;
    let cur = head;
    while(cur != null){
        next = cur.next;
        cur.next = prev;
        
        prev = cur;
        cur = next;
    }   
    return prev;
};

var reverseListREc = function(head) {
    // get to the bottom or the list
    // 1 -> 2 -> 3. -> 4
    if(!head){
        return head;
    }
    if(!head.next){
       return head;
    }    
    let newH = reverseListRed(head.next); 
    
    head.next.next = head;
    head.next = null;
    
    return newH; 
}   
