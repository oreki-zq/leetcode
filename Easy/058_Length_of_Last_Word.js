/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function(s) {

    let arr = s.split(' ')
    while (arr.length > 0) {
        let last = arr.pop()
        if (last.length >0) {
            return last.length
        }
    }
    return 0

    /*let lastLen = 0,
        str = s.trim()
    if (str.length === 0) { return 0 }
    for (let i = str.length-1; i > 0; i--) {
        if (str.charAt(i) !== ' ') {
            lastLen++
        } else {
            break
        }
    }
    return lastLen*/
};