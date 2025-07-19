/**
 * 生产可能性边界（PPF）曲线计算逻辑
 *
 * 公式：aX + bY = R
 * 其中 X、Y 为两种商品产量，a、b 为资源消耗系数，R 为总资源量
 *
 * @param {number} a - 商品X的资源消耗系数
 * @param {number} b - 商品Y的资源消耗系数
 * @param {number} R - 总资源量
 * @param {number} X - 商品X的产量（可选，若已知）
 * @returns {number} Y - 在给定X下，商品Y的最大产量
 *
 * 示例：
 *   const Y = calculatePPF(2, 4, 100, 10); // Y = 20
 */
function calculatePPF(a, b, R, X) {
    if ([a, b, R, X].some(x => typeof x !== 'number')) {
        throw new Error('参数必须为数字');
    }
    if (b === 0) {
        throw new Error('b 不能为0');
    }
    const Y = (R - a * X) / b;
    return Y;
}
window.calculatePPF = calculatePPF; 