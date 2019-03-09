/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function(digits) {
    let carry = 0       // 进位
    for (let i = digits.length-1; i >= 0; i--) {
        if (i === digits.length-1) { digits[i]++ }
        if (digits[i] > 9) {
            carry = parseInt(digits[i]/10)
            digits[i] = digits[i] % 10
            digits[i-1] += carry
        } else {
            carry = 0
        }
    }
    if (carry > 0) {        // 最后有进位，在数组前加上进位的数字
        digits.unshift(carry)
    }
    return digits
};