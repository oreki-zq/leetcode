/**
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
    let primes = Array(n).fill(true) // 建立n个true元素的数组，代表0-99个数
    let count = 0
    for (let i = 2; i < n; i++) {
        if (primes[i]) {
            count++
            /*对于存在i*j < n的两个数，表示i*j不为素数，该位置为false
            例如i=2，下面的循环即可去除所有可以被2整除的数*/
            for (let j = 2; i * j < n; j++) {
                primes[i * j] = false
            }
        }
    }
    return count
}

/*function isPrime(n) {
    if (n === 2 || n === 3) {
        return true
    }
    if ((n % 6 !== 1) && (n % 6 !== 5)) {
        return false
    }
    for (let i = 3; i < Math.sqrt(n); i+=2) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
function countPrimes(n) {
    let count = 0
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            count++
        }
    }
    return count
}*/

/*let countPrimes = function(n) {
    if (n < 3) { return 0 }
    let count = 1
    for (let i = 3; i < n; i+=2) {
        let flag = true
        for (let j = 3; j <= Math.sqrt(i); j+=2) {
            if (i % j === 0) {
                flag = false
                break
            }
        }
        if (flag) { count++ }
    }
    return count
};*/
