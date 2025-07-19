/**
 * 平均成本曲线计算逻辑
 *
 * 公式：AC = TC / Q
 *
 * @param {number} TC - 总成本
 * @param {number} Q - 产量
 * @returns {number} AC - 平均成本
 *
 * 示例：
 *   const AC = calculateAverageCost(200, 20); // AC = 10
 */
function calculateAverageCost(TC, Q) {
    if (typeof TC !== 'number' || typeof Q !== 'number' || Q === 0) {
        throw new Error('参数必须为数字且产量Q不能为0');
    }
    const AC = TC / Q;
    return AC;
}
window.calculateAverageCost = calculateAverageCost; 