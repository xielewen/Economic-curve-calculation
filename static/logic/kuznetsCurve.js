/**
 * 库兹涅茨曲线计算逻辑
 *
 * 公式：I = aY - bY^2
 * 其中 I为不平等程度，Y为人均收入，a、b为参数
 *
 * @param {number} a - 系数a
 * @param {number} b - 系数b
 * @param {number} Y - 人均收入
 * @returns {number} I - 不平等程度
 *
 * 示例：
 *   const I = calculateKuznets(0.5, 0.01, 100); // I = 0.5*100 - 0.01*10000 = -50
 */
function calculateKuznets(a, b, Y) {
    if ([a, b, Y].some(x => typeof x !== 'number')) {
        throw new Error('参数必须为数字');
    }
    const I = a * Y - b * Y * Y;
    return I;
}
window.calculateKuznets = calculateKuznets; 