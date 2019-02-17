/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
    let xStr = x.toString()
    let xArr = xStr.split('')
    return xArr.reverse().join('') === xStr
}