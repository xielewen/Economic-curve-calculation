/**
 * 拉弗曲线计算逻辑
 *
 * 公式：T = t * B * (1 - t)
 * 其中 t为税率（0~1），B为税基
 *
 * @param {number} t - 税率（0~1）
 * @param {number} B - 税基
 * @returns {number} T - 税收收入
 *
 * 示例：
 *   const T = calculateLaffer(0.3, 1000); // T = 210
 */
function calculateLaffer(t, B) {
    if (typeof t !== 'number' || typeof B !== 'number') {
        throw new Error('参数必须为数字');
    }
    if (t < 0 || t > 1) {
        throw new Error('税率t必须在0到1之间');
    }
    const T = t * B * (1 - t);
    return T;
}
window.calculateLaffer = calculateLaffer; 