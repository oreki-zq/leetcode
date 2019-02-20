/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function(a, b) {
    let subLen = Math.abs(a.length - b.length)
    for (let i = 0; i < subLen; i++) {
        if (a.length > b.length) {
            b = '0' + b
        } else if (a.length < b.length) {
            a = '0' + a
        }
    }

    let carry = 0,
        c = ''
    for (let i = a.length-1; i >= 0; i--) {
        curSum = parseInt(a[i]) + parseInt(b[i]) + carry
        if (curSum > 1) {
            carry = 1
        } else {
            carry = 0
        }
        c = curSum % 2 + c
    }
    if (carry > 0) {
        c = carry + c
    }
    return c
};