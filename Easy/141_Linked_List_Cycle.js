/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
let hasCycle = function(head) {
    if (head === null || head.next === null) {
        return false
    }

    // 访问节点时给他加一个flag标志表示已访问，若碰到已访问过的节点则表示有环
    let node = head
    while (node !== null) {
        if (node.flag) {
            return true
        }
        node.flag = true
        node = node.next
    }
    return false

    // 慢指针一次跑一格，快指针一次两格，如果有环则快慢指针一定会相遇
    /*let slow = head.next
    let fast = head.next.next
    if (fast ===null) {
        return false
    }
    while (slow !== fast) {
        if (fast.next === null) {
            return false
        }
        slow = slow.next
        fast = fast.next.next
        if (slow === null || fast === null) {
            return false
        }
    }
    return true*/
};