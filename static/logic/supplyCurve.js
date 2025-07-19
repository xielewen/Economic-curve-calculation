/**
 * 供给曲线计算逻辑
 *
 * 公式：Qs = c + dP
 *
 * @param {number} c - 截距，表示在价格为0时的基础供给量
 * @param {number} d - 斜率，表示价格每增加1，供给量增加多少
 * @param {number} P - 价格
 * @returns {number} Qs - 计算得到的供给量
 *
 * 示例：
 *   const Qs = calculateSupply(20, 3, 10); // Qs = 50
 */
function calculateSupply(c, d, P) {
    if (typeof c !== 'number' || typeof d !== 'number' || typeof P !== 'number') {
        throw new Error('参数必须为数字');
    }
    const Qs = c + d * P;
    return Qs;
}
window.calculateSupply = calculateSupply; 