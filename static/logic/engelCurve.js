/**
 * 恩格尔曲线计算逻辑
 *
 * 公式：E = a + bY
 * 其中 E为某商品消费支出，Y为收入，a为截距，b为边际消费倾向
 *
 * @param {number} a - 截距
 * @param {number} b - 边际消费倾向
 * @param {number} Y - 收入
 * @returns {number} E - 消费支出
 *
 * 示例：
 *   const E = calculateEngel(10, 0.3, 100); // E = 40
 */
function calculateEngel(a, b, Y) {
    if ([a, b, Y].some(x => typeof x !== 'number')) {
        throw new Error('参数必须为数字');
    }
    const E = a + b * Y;
    return E;
}
window.calculateEngel = calculateEngel; 