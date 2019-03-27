/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
let hammingWeight = function(n) {
    let arr = n.toString(2).split(''),
        count = 0
    for (let i in arr) {
        if (arr[i]%2 === 1) {
            count++
        }
    }
    return count

    /*if (n === 0) { return 0 }
    let count = 0

    for (let i = 0; i < 32; i++) {
        if (n > 0) {
            if (n%2 === 1) {
                count++
            }
            n = parseInt(n / 2)
        }
    }
    return count*/
};