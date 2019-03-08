/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function(nums, target) {
    if (target > nums[nums.length-1]) { return nums.length }
    for (let i = 0; i <= nums.length; i++) {
        if (target <= nums[i]) {
            return i
        } else if (target > nums[i] && target < nums[i+1]) {
            return ++i
        }
    }
};