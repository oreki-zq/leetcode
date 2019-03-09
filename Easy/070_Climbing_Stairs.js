/**
 * @param {number} n
 * @return {number}
 */
//  规律为[0,1,2,3,5,8,13......]

let climbStairs = function(n) {
    let stairs = [0, 1, 2]
    if (n <= 2) { return n }
    for (let i = 3; i <= n; i++) {
        stairs[i] = stairs[i-1] + stairs[i-2]
    }
    return stairs[n]
};

/*let climbStairs = function(n) {
    if (n <= 1) { return 1 }
    let pre = 1,
        cur = 1
    for (let i = 2; i <= n; i++) {
        let tmp = cur
        cur += pre
        pre = tmp
    }
    return cur
};*/

/*   递归
let stairs = [0, 1, 2]
let climbStairs = function(n) {
    if (stairs[n] === undefined) {
        stairs[n] = climbStairs(n-1) + climbStairs(n-2)
    }
    return stairs[n]
};*/
