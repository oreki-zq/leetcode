/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStr = function(haystack, needle) {
    let len = needle.length
    if (len === 0) { return 0 }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substr(i, len) === needle) {
            return i
        }
    }
    return -1

    // return haystack.indexOf(needle)
};