/**
 * @param {number} n
 * @return {number}
 */
let climbStairs = function(n) {
    if (n <= 1) { return 1 }
    let pre = 1,
        cur = 1
    for (let i = 2; i < n; i++) {
        let tmp = cur
        cur += pre
        pre = tmp
    }
    return cur
};