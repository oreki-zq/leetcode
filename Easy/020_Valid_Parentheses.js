/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
    if (s.length % 2 !== 0) { return false }
    let stack = [],
        left = ['(', '[', '{'],
        right = [')', ']', '}'],
        match = {
            '(': ')',
            '[': ']',
            '{': '}'
        };
    for (let i = 0; i < s.length; i++) {
        // 左括号放入stack栈中
        if (left.indexOf(s[i]) > -1) {
            stack.push(s[i])
        }
        // 右括号与stack顶部元素是否匹配
        if (right.indexOf(s[i]) > -1) {
            if (match[stack.pop()] !== s[i]) {
                return false
            }
        }
    }
    // 完全匹配时stack为空
    return stack.length === 0
};