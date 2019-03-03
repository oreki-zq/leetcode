/**
 * @param {string} s
 * @return {number}
 */

let romanToInt = function(s) {
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let res = 0
    for (let i = 0; i < s.length; i++) {
        let v1 = map[s[i]],
            v2 = map[s[i+1]]
        if (v2 > v1) {
            res = res + v2 - v1
            i++
        } else {
            res += v1
        }
    }
    return res
};
/*
let romanToInt = function(s) {
    let i = 0,
        res = 0
    while (true) {
        if (s.charAt(i) === 'V') {
            res += 5
        } else if (s.charAt(i) === 'L') {
            res += 50
        } else if (s.charAt(i) === 'D') {
            res += 500
        } else if (s.charAt(i) === 'M') {
            res += 1000
        }
        if (s.charAt(i) === 'I') {
            if (s.charAt(i+1) === 'V') {
                res += 4
                i++
            } else if (s.charAt(i+1) === 'X') {
                res += 9
                i++
            } else {
                res += 1
            }
        } else if (s.charAt(i) === 'X') {
            if (s.charAt(i+1) === 'L') {
                res += 40
                i++
            } else if(s.charAt(i+1) === 'C') {
                res += 90
                i++
            } else {
                res += 10
            }
        } else if (s.charAt(i) === 'C') {
            if (s.charAt(i+1) === 'D') {
                res += 400
                i++
            } else if (s.charAt(i+1) === 'M') {
                res += 900
                i++
            } else {
                res += 100
            }
        }

        if (i++ > s.length) {
            break
        }
    }
    return res
};*/
