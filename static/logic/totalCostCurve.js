/**
 * 总成本曲线计算逻辑
 *
 * 公式：TC = FC + VC(Q)
 * 其中 VC(Q) = v * Q（假设可变成本为线性）
 *
 * @param {number} FC - 固定成本
 * @param {number} v - 单位可变成本
 * @param {number} Q - 产量
 * @returns {number} TC - 总成本
 *
 * 示例：
 *   const TC = calculateTotalCost(100, 5, 20); // TC = 200
 */
function calculateTotalCost(FC, v, Q) {
    if (typeof FC !== 'number' || typeof v !== 'number' || typeof Q !== 'number') {
        throw new Error('参数必须为数字');
    }
    const TC = FC + v * Q;
    return TC;
}
window.calculateTotalCost = calculateTotalCost; 