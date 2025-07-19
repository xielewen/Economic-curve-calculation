/**
 * LM曲线计算逻辑
 *
 * 公式：M/P = kY - hr
 * 其中 M为货币供给，P为价格水平，k为收入对货币需求的敏感度，h为利率对货币需求的敏感度，Y为收入，r为利率
 *
 * @param {number} M - 货币供给
 * @param {number} P - 价格水平
 * @param {number} k - 收入对货币需求的敏感度
 * @param {number} h - 利率对货币需求的敏感度
 * @param {number} Y - 收入
 * @returns {number} r - LM曲线下的均衡利率
 *
 * 示例：
 *   const r = calculateLM(1000, 2, 0.5, 0.2, 500);
 */
function calculateLM(M, P, k, h, Y) {
    if ([M, P, k, h, Y].some(x => typeof x !== 'number')) {
        throw new Error('参数必须为数字');
    }
    if (h === 0) {
        throw new Error('h 不能为0');
    }
    // LM曲线均衡利率
    const r = (k * Y - M / P) / h;
    return r;
}
window.calculateLM = calculateLM; 