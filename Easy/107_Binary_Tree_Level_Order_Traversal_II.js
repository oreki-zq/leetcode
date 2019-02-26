/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
let levelOrderBottom = function(root) {
    if (root === null) { return [] }
    let result = []

    // 使用map[level]的list存储相同level节点的值
    let map = {}
    // 传入root, level 0
    find(root, 0)

    for (let i in map) {
        result.push(map[i])
    }
    return result.reverse()

    // 传入node与level
    function find(node, level) {
        if (node === null) return
        // map[level]为空, map[level] = [node.val]
        if (!map[level]) {
            map[level] = [node.val]
        } else {
            map[level].push(node.val)
        }

        find(node.left, level+1)
        find(node.right, level+1)
    }
};