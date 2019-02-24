/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxDepth = function(root) {
    return traverseChild(root)
    function traverseChild(node) {
        if (node === null) { return 0 }
        let deepLeft = 1,
            deepRight = 1

        //有左子树或右子树，向下一层遍历
        if (node.left !== null) {
            deepLeft += traverseChild(node.left)
        }
        if (node.right !== null) {
            deepRight += traverseChild(node.right)
        }

        // 返回较大的深度，给上一层节点
        return deepLeft > deepRight ? deepLeft : deepRight
    }
};