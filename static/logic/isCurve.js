/**
 * IS曲线计算逻辑
 *
 * 公式：Y = C0 + c(Y - T) + I0 - ir + G
 * 其中 C0为自发消费，c为边际消费倾向，I0为自发投资，i为投资对利率的敏感度，r为利率，T为税收，G为政府支出
 *
 * @param {number} C0 - 自发消费
 * @param {number} c - 边际消费倾向（0~1）
 * @param {number} Y - 收入
 * @param {number} T - 税收
 * @param {number} I0 - 自发投资
 * @param {number} i - 投资对利率的敏感度
 * @param {number} r - 利率
 * @param {number} G - 政府支出
 * @returns {number} Y_new - IS曲线下的均衡收入
 *
 * 示例：
 *   const Y = calculateIS(50, 0.8, 100, 10, 30, 2, 5, 20);
 */
function calculateIS(C0, c, Y, T, I0, i, r, G) {
    if ([C0, c, Y, T, I0, i, r, G].some(x => typeof x !== 'number')) {
        throw new Error('参数必须为数字');
    }
    // IS曲线均衡收入的近似解
    const Y_new = (C0 + c * (Y - T) + I0 - i * r + G);
    return Y_new;
}
window.calculateIS = calculateIS; 