/**
 * @param {number} n
 * @return {string}
 */
let convertToTitle = function(n) {
    // String.fromCharCode(65) = 'A', ...
    if (Math.floor((n-1) / 26) < 1) {
        return String.fromCharCode((n-1) % 26 + 65)
    }
    let result = ''
    while (n > 0) {
        let remainder = (n-1) % 26
        result = String.fromCharCode(remainder + 65) + result
        n = Math.floor((n-1) / 26)
    }
    return result
};