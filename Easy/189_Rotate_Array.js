/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let rotate = function(nums, k) {
    /*let step = k % nums.length
    for (let i = step; i > 0; i--) {
        let end = nums.pop()
        nums.unshift(end)
    }*/

    let step = k % nums.length
    // 翻转的元素放入temp
    let temp = []
    for (let i = step-1; i >= 0; i--) {
        temp.push(nums[nums.length - 1 - i])
    }
    // 不翻转的元素向右移step个位置
    for (let i = nums.length-1; i >= 0; i --) {
        if (i >= step) {
            nums[i] = nums[i-step]
        } else {
            nums[i] = temp[i]
        }
    }
};