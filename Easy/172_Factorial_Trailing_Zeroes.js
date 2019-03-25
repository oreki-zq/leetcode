/**
 * @param {number} n
 * @return {number}
 */
let trailingZeroes = function(n) {
    // 出现0是因为2和5，数字中包含多少个5决定了末尾有几个0
    if (n < 5) { return 0 }
    let count = 0
    while (n>=5) {
        count += Math.floor(n/5)
        n = Math.floor(n/5)
    }
    return count

    // 数字大时出错
    /*let factorial = 1
    for (let i = 1; i <= n; i++) {
        factorial *= i
    }
    let facStr = factorial.toString(),
        count = 0
    for (let i = facStr.length-1; i >=0; i--) {
        if (facStr[i] === '0') {
            count++
        } else {
            return count
        }
    }*/
};