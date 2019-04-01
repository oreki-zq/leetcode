/**
 * @param {number} n
 * @return {boolean}
 */
let isHappy = function(n) {
    // 当出现重复数字表示出现循环，停止计算，否则将结果作为键值存入对象中，继续遍历看是否出现1

    let store = {}
    while (!store[n] && n !== 1) {
        store[n] = n
        n.toString().split('').forEach(function(item, index) {
            if (index === 0) { n = 0 }
            // 强制类型转换
            n += Math.pow(item, 2)
        })
    }
    return n === 1
};