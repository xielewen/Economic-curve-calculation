/**
 * 学习曲线计算逻辑
 *
 * 公式：C = aQ^b
 * 其中 C为单位成本，Q为累计产量，a为初始单位成本，b为学习指数（b<0）
 *
 * @param {number} a - 初始单位成本
 * @param {number} b - 学习指数（b<0）
 * @param {number} Q - 累计产量
 * @returns {number} C - 单位成本
 *
 * 示例：
 *   const C = calculateLearning(100, -0.3, 10); // C = 100 * 10^(-0.3)
 */
function calculateLearning(a, b, Q) {
    if ([a, b, Q].some(x => typeof x !== 'number')) {
        throw new Error('参数必须为数字');
    }
    const C = a * Math.pow(Q, b);
    return C;
}
window.calculateLearning = calculateLearning; 