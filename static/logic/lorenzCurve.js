/**
 * 洛伦兹曲线计算逻辑
 *
 * 输入为收入（或财富）数组，输出为累积人口比例和累积收入比例的数组（用于绘图）
 *
 * @param {number[]} incomes - 各个体的收入数组
 * @returns {{population: number[], income: number[]}} - 累积人口比例和累积收入比例
 *
 * 示例：
 *   const result = calculateLorenz([10, 20, 30]);
 *   // result.population = [0, 1/3, 2/3, 1]
 *   // result.income = [0, 0.166, 0.5, 1]
 */
function calculateLorenz(incomes) {
    if (!Array.isArray(incomes) || incomes.some(x => typeof x !== 'number')) {
        throw new Error('参数必须为数字数组');
    }
    const n = incomes.length;
    const sorted = incomes.slice().sort((a, b) => a - b);
    const total = sorted.reduce((sum, x) => sum + x, 0);
    let cumIncome = 0;
    const population = [0];
    const income = [0];
    for (let i = 0; i < n; i++) {
        population.push((i + 1) / n);
        cumIncome += sorted[i];
        income.push(cumIncome / total);
    }
    return { population, income };
}
window.calculateLorenz = calculateLorenz; 