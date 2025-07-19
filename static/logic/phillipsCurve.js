/**
 * 菲利普斯曲线计算逻辑
 *
 * 公式：π = πe - β(u - un)
 * 其中 πe为预期通胀，β为斜率，u为失业率，un为自然失业率
 *
 * @param {number} pi_e - 预期通胀率
 * @param {number} beta - 斜率
 * @param {number} u - 实际失业率
 * @param {number} u_n - 自然失业率
 * @returns {number} pi - 实际通胀率
 *
 * 示例：
 *   const pi = calculatePhillips(2, 0.5, 6, 4); // pi = 1
 */
function calculatePhillips(pi_e, beta, u, u_n) {
    if ([pi_e, beta, u, u_n].some(x => typeof x !== 'number')) {
        throw new Error('参数必须为数字');
    }
    const pi = pi_e - beta * (u - u_n);
    return pi;
}
window.calculatePhillips = calculatePhillips; 