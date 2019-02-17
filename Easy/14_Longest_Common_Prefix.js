/**
 * @param {string[]} strs
 * @return {string}
 */

let longestCommonPrefix = function(strs) {
    if (strs.length === 0) { return '' }
    let longestPre = strs[0]
    for (let i = 0; i < strs.length; i++) {
        for (let j = 0; j < longestPre.length; j++) {
            if (strs[i][j] !== longestPre[j]) {
                longestPre = longestPre.substring(0, j)
            }
        }
    }
    return longestPre
}
/*
let longestCommonPrefix = function(strs) {
    let obj = {}
    for (let i = 0; i < strs.length; i++) {
        if (obj.hasOwnProperty(strs[i])) {
            obj[strs[i]] ++
        } else {
            obj[strs[i]] = 1
        }
    }
    let max = 0,
        maxStr = ''
    for (let i in obj) {
        if (obj[i] > max) {
            max = obj[i]
            maxStr = i
        }
    }
    return maxStr
};*/
