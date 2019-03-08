/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {
    let maxSum = nums[0],
        curSum = 0
    /*for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            curSum += nums[j]
            maxSum = Math.max(curSum, maxSum)
        }
        curSum = 0
    }*/

    for (let i = 0; i < nums.length; i++) {
        curSum = Math.max(nums[i], curSum + nums[i])       // 当前元素大于现有累加和时，抛弃现有资源
        maxSum = Math.max(curSum, maxSum)
    }
    return maxSum
};