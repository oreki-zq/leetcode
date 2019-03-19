/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function(nums) {
    let res = 0
    for (let i = 0; i < nums.length; i++) {
        res ^= nums[i]
    }
    return res

    /*let sortNums = nums.sort()
    for (let i = 0; i < nums.length-2; i+=2) {
        if (sortNums[i] !== sortNums[i+1]) {
            return sortNums[i]
        }
    }
    return sortNums[nums.length-1]*/

    /*let sortNums = nums.sort()
    if (sortNums[0] !== sortNums[1]) { return sortNums[0] }
    for (let i = 1; i < nums.length-1; i++) {
        if (sortNums[i] !== sortNums[i-1] && sortNums[i] !== sortNums[i+1]) {
            return sortNums[i]
        }
    }
    return sortNums[nums.length-1]*/
};