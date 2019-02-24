/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root\
 * @return {boolean}
 */
let isSymmetric = function(root) {
    if (root === null || (root.left === null && root.right === null)) { return true }

    // 将右子树反转，再对比是否相等
    root.right = reverseTree(root.right)
    return isSameTree(root.left, root.right)

    function reverseTree(node) {
        if (node === null || node.left === null && node.right === null) { return node }
        let temp = reverseTree(node.left)
        node.left = reverseTree(node.right)
        node.right = temp
        return node
    }

    function isSameTree(left, right) {
        if (left === null && right === null) { return true }
        if (left !== null && right === null || left === null && right !== null) { return false }
        if (left.val !== right.val) { return false }
        return isSameTree(left.left, right.left) && isSameTree(left.right, right.right)
    }
};