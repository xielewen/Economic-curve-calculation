/**
 * 平均产量曲线计算逻辑
 *
 * 公式：AP = Q / L
 * 其中 Q为产量，L为劳动投入
 *
 * @param {number} Q - 产量
 * @param {number} L - 劳动投入
 * @returns {number} AP - 平均产量
 *
 * 示例：
 *   const AP = calculateAverageProduct(100, 10); // AP = 10
 */
function calculateAverageProduct(Q, L) {
    if (typeof Q !== 'number' || typeof L !== 'number' || L === 0) {
        throw new Error('参数必须为数字且劳动投入L不能为0');
    }
    const AP = Q / L;
    return AP;
}
window.calculateAverageProduct = calculateAverageProduct; 