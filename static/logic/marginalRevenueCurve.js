/**
 * 边际收益曲线计算逻辑
 *
 * 公式：MR = ΔTR / ΔQ
 *
 * @param {number} TR1 - 产量Q1时的总收益
 * @param {number} TR2 - 产量Q2时的总收益
 * @param {number} Q1 - 产量Q1
 * @param {number} Q2 - 产量Q2
 * @returns {number} MR - 边际收益
 *
 * 示例：
 *   const MR = calculateMarginalRevenue(100, 120, 10, 12); // MR = 10
 */
function calculateMarginalRevenue(TR1, TR2, Q1, Q2) {
    if ([TR1, TR2, Q1, Q2].some(x => typeof x !== 'number')) {
        throw new Error('参数必须为数字');
    }
    if (Q2 === Q1) {
        throw new Error('Q2 不能等于 Q1');
    }
    const MR = (TR2 - TR1) / (Q2 - Q1);
    return MR;
}
window.calculateMarginalRevenue = calculateMarginalRevenue; 