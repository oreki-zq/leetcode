/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
    let minPrice = prices[0],
        maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        minPrice = prices[i] < minPrice ? prices[i] : minPrice
        maxProfit = prices[i] - minPrice > maxProfit ? prices[i] - minPrice : maxProfit
    }
    return maxProfit
};