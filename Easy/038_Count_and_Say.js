/**
 * @param {number} n
 * @return {string}
 */
let countAndSay = function(n) {
    let result = '1'
    for (let i = 1; i < n; i++) {
        let num = result.charAt(0)
        let temp = result
        let count = 1
        result = ''     // 清空存储这轮数完后得到的字符

        for (let j = 1; j < temp.length; j++) {
            if (temp.charAt(j) === num) {
                count++
            } else {
                // 将目前的count与num加到字符串，更新num再从1开始数起
                result += count + num
                num = temp.charAt(j)
                count = 1
            }
        }
        result += count + num
    }
    return result
};