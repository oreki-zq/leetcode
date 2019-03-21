/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(numbers, target) {
    // 二分法
    for (let i = 0; i < numbers.length; i++) {
        let left = i + 1,
            right = numbers.length
        while (left < right) {
            let mid = left + Math.floor((right - left)/2)
            if (numbers[mid] + numbers[i] === target) {
                return [i+1, mid+1]
            } else if (numbers[mid] + numbers[i] < target) {
                left = mid + 1
            } else {
                right = mid
            }
        }
    }

    // 左右两个指针遍历
    /*let left = 0,
        right = numbers.length-1
    while (left < right) {
        if (numbers[left] + numbers[right] === target) {
            return [left+1, right+1]
        } else if (numbers[left] + numbers[right] > target) {
            right--
        } else if (numbers[left] + numbers[right] < target) {
            left++
        }
    }*/

    /*let index = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                index.push(i+1, j+1)
                return index
            }
        }
    }*/

    /*for (let i = 0; i < numbers.length; i++) {
        let tmp = numbers.indexOf(target-numbers[i], i+1)
        if (tmp !== -1) { return [i+1, tmp+1] }
    }*/
};