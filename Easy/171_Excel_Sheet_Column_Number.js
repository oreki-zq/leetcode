/**
 * @param {string} s
 * @return {number}
 */
let titleToNumber = function(s) {
    let res = 0
    for (let i = s.length - 1; i >= 0; i--) {
        res += (s.charCodeAt(i) - 64) * Math.pow(26, s.length - 1 - i)
    }
    return res
};