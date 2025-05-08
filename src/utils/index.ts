/**
 * 指定范围的随机数
 * @param min
 * @param max
 */
export function randomNumber (min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * 随机生成一个颜色
 */
export function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

/**
 * 随机生成一个相似的颜色
 * @param rgbStr rgb(r, g, b)
 */
export function randomSimilarColor (rgbStr: string): string {
    // 从字符串中提取 R、G、B 值
    let [r, g, b] = rgbStr.slice(rgbStr.indexOf('(') + 1, rgbStr.indexOf(')')).split(',').map(Number)

    // 在 -5 到 +5 的范围内随机调整每个通道
    const randomOffset = () => Math.floor(randomNumber(-10, 10));

    r = Math.max(0, Math.min(255, r + randomOffset()));
    g = Math.max(0, Math.min(255, g + randomOffset()));
    b = Math.max(0, Math.min(255, b + randomOffset()));

    return `rgb(${r}, ${g}, ${b})`;
}