/**
 * 需求曲线计算逻辑
 *
 * 公式：Qd = a - bP
 *
 * @param {number} a - 截距，表示在价格为0时的最大需求量
 * @param {number} b - 斜率，表示价格每增加1，需求量减少多少
 * @param {number} P - 价格
 * @returns {number} Qd - 计算得到的需求量
 *
 * 示例：
 *   const Qd = calculateDemand(100, 2, 10); // Qd = 80
 */
function calculateDemand(a, b, P) {
    // 参数校验
    if (typeof a !== 'number' || typeof b !== 'number' || typeof P !== 'number') {
        throw new Error('参数必须为数字');
    }
    // 计算需求量
    const Qd = a - b * P;
    return Qd;
}
// 使函数可在全局作用域调用
window.calculateDemand = calculateDemand; 