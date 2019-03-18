/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function(s) {
    let re = /[a-z|A-Z|\d]+/g
    if (!(re).test(s)) { return true }
    let pureStr = s.match(re).join('').toLowerCase()
    return pureStr.split('').reverse().join('') === pureStr
};