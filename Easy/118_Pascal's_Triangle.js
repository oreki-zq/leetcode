/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function(numRows) {
    if (numRows === 0) { return [] }
    // 放入第一列
    let trigle = [[1]]
    for (let i = 1; i < numRows; i++) {
        let prevRow = trigle[i-1]   // 前一列
        let curRow = [1]            // 每列开始都是1

        for(let j = 1; j <= i; j++) {
            // 每列第n个值都是前一列pre[n-1]+pre[n]
            let pre1 = prevRow[j-1]
            let pre2 = prevRow[j] ? prevRow[j] : 0  // 每列最后一个数在前一列没有对应的pre[n]，pre[n]视为0
            curRow.push(pre1+pre2)
        }
        trigle.push(curRow)
    }
    return trigle
};