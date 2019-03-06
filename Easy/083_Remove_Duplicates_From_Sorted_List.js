/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function(head) {
    if (head === null || head.next === null) { return head }

    let cur = head
    while (cur.next != null) {
        if (cur.val !== cur.next.val) {
            cur = cur.next
        } else {
            cur.next = cur.next.next
        }
    }
    return head
};