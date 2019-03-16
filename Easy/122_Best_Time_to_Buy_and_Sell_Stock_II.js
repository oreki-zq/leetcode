/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
    let buyPrice = prices[0],
        maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > buyPrice) {
            maxProfit += prices[i] - buyPrice
        }
        buyPrice = prices[i]
        /*if (prices[i] <= buyPrice) {
            buyPrice = prices[i]
        } else {
            maxProfit += prices[i] - buyPrice
            buyPrice = prices[i]
        }*/
    }
    return maxProfit
};