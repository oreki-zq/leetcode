/**
 * @param {number} rowIndex
 * @return {number[]}
 */
let getRow = function(rowIndex) {
    let row = [1]
    for (let i = 1; i <= rowIndex; i++) {
        // 储存row[n-1]的数字
        let pre = row[i-1]
        for (let j = 1; j < i; j++) {
            // preRow[n]的数字，如果preRow没有n，设为0
            let cur = row[j] ? row[j] : 0
            // 当前row[n]的值为上一个preRow[n-1]+preRow[n]
            row[j] = pre + cur
            pre = cur
        }
        row.push(1)
    }
    return row
};