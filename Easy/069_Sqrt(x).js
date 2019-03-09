/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function(x) {
    let left = 0,
        right = x
    if (x === 0) { return 0 }
    if (x === 1) { return 1 }
    while (left < right) {
        let mid = Math.floor((right - left) / 2) + left
        if (mid * mid > x) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return right - 1

    // return Math.floor(Math.sqrt(x))
    // return parseInt(Math.sqrt(x))
};