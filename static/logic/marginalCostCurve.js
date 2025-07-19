/**
 * 边际成本曲线计算逻辑
 *
 * 公式：MC = ΔTC / ΔQ
 *
 * @param {number} TC1 - 产量Q1时的总成本
 * @param {number} TC2 - 产量Q2时的总成本
 * @param {number} Q1 - 产量Q1
 * @param {number} Q2 - 产量Q2
 * @returns {number} MC - 边际成本
 *
 * 示例：
 *   const MC = calculateMarginalCost(100, 120, 10, 12); // MC = 10
 */
function calculateMarginalCost(TC1, TC2, Q1, Q2) {
    if ([TC1, TC2, Q1, Q2].some(x => typeof x !== 'number')) {
        throw new Error('参数必须为数字');
    }
    if (Q2 === Q1) {
        throw new Error('Q2 不能等于 Q1');
    }
    const MC = (TC2 - TC1) / (Q2 - Q1);
    return MC;
}
window.calculateMarginalCost = calculateMarginalCost; 