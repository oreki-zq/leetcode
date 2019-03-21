/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function(nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++
        } else {
            map[nums[i]] = 1
        }
        if(map[nums[i]] > nums.length/2) {
            return nums[i]
        }
    }

    /*let sortNums = nums.sort(),
        curAppear = 0,
        maxAppear = 0,
        majorityNum = sortNums[0]
    for (let i = 0; i < nums.length; i++) {
        if (sortNums[i] === sortNums[i+1]) {
            curAppear++
        } else {
            curAppear = 1
        }
        if (curAppear > maxAppear) {
            maxAppear = curAppear
            majorityNum = sortNums[i]
        }
    }
    return majorityNum*/
};