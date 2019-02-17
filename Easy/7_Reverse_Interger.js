/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
    const xArr = x.toString().split('');

    let result;
    if (xArr[0] === '-') {
        result = xArr.splice(1).reverse()
        result.unshift('-')
    } else {
        result = xArr.reverse()
    }
    const res = parseInt(result.join(''));
    if (Math.abs(res) > Math.pow(2, 31)) {
        return 0
    }
    return res
};