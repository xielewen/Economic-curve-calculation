/**
 * 边际产量曲线计算逻辑
 *
 * 公式：MP = ΔQ / ΔL
 * 其中 Q为产量，L为劳动投入
 *
 * @param {number} Q1 - 劳动L1时的产量
 * @param {number} Q2 - 劳动L2时的产量
 * @param {number} L1 - 劳动投入L1
 * @param {number} L2 - 劳动投入L2
 * @returns {number} MP - 边际产量
 *
 * 示例：
 *   const MP = calculateMarginalProduct(100, 120, 10, 12); // MP = 10
 */
function calculateMarginalProduct(Q1, Q2, L1, L2) {
    if ([Q1, Q2, L1, L2].some(x => typeof x !== 'number')) {
        throw new Error('参数必须为数字');
    }
    if (L2 === L1) {
        throw new Error('L2 不能等于 L1');
    }
    const MP = (Q2 - Q1) / (L2 - L1);
    return MP;
}
window.calculateMarginalProduct = calculateMarginalProduct; 