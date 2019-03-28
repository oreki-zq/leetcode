/**
 * @param {number[]} nums
 * @return {number}
 */
/*动态规划，维护一个数组maxMoney存放当前所能抢的最大值，一个房子取num[0]，两个房子取较大值Math.max(nums[0],nums[1])，
三个以上房子则比较当前值与前前一个最大值的和nums[i]+maxMoney[i-2]与前一个最大值maxMoney[i-1]的大小，
状态转移方程为maxMoney[i] = Math.max(nums[i]+maxMoney[i-2], maxMoney[i-1])*/

let rob = function(nums) {
    let maxMoney = []
    if (nums.length === 0) { return 0 }
    if (nums.length === 1) { return nums[0] }
    if (nums.length === 2) { return Math.max(nums[0], nums[1]) }

    maxMoney.push(nums[0], Math.max(nums[0], nums[1]))
    for (let i = 2; i < nums.length; i++) {
        maxMoney[i] = Math.max(nums[i] + maxMoney[i-2], maxMoney[i-1])
    }
    return maxMoney.pop()
};