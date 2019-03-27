/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
let reverseBits = function(n) {
    if (n === 0) { return 0 }
    let list = []

    for (let i = 0; i < 32; i++) {
        if (n > 0) {
            list.push(parseInt(n % 2))
            n = parseInt(n / 2)
        } else {
            list.push(0)
        }
    }
    return parseInt(list.join(''), 2)
};