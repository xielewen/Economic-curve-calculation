/**
 * 平均收益曲线计算逻辑
 *
 * 公式：AR = TR / Q
 *
 * @param {number} TR - 总收益
 * @param {number} Q - 产量
 * @returns {number} AR - 平均收益
 *
 * 示例：
 *   const AR = calculateAverageRevenue(200, 20); // AR = 10
 */
function calculateAverageRevenue(TR, Q) {
    if (typeof TR !== 'number' || typeof Q !== 'number' || Q === 0) {
        throw new Error('参数必须为数字且产量Q不能为0');
    }
    const AR = TR / Q;
    return AR;
}
window.calculateAverageRevenue = calculateAverageRevenue; 