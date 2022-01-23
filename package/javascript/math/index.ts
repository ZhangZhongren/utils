
/**
 * 检查入参是否为2的幂数
 * @param n number
 * @returns 
 */
export const isPowerOfTwo = (n: number): boolean => !!n && (n & (n - 1)) == 0;

/**
 * 检查入参是否为10的幂数
 * @param n number
 * @returns 
 */
 export const isPowerOfTen = (n: number):boolean => Math.log10(n) % 1 === 0;

 /**
  * num 是否为奇数
  * @param num number
  * @returns 
  */
 export const isOdd = (num: number): boolean => num % 2 === 1;

 /**
  * num 是否为偶数
  * @param num  number
  * @returns 
  */

 export const isEven = (num: number) => num % 2 === 0;

 /**
  * 
  * @param dividend 第二个数能付被第一个整除
  * @param divisor 
  * @returns 
  */

 export const isDivisible = (dividend: number, divisor: number) => dividend % divisor === 0;

 /**
  * 角度转弧度
  * @param deg 
  * @returns 
  */

 export const degreesToRads = (deg: number) => (deg * Math.PI) / 180.0;

/**
 * 将num 限定在范围之内
 * @param num 
 * @param a 下边界
 * @param b 上边界
 * @returns fix number
 */
 export const clampNumber = (num: number, a: number, b: number) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

 /**
  * 检查是否是素数
  * @param num 
  * @returns 
  */
 export const isPrime = (num: number): boolean => {
  const boundary = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= boundary; i++) if (num % i === 0) return false;
  return num >= 2;
};

/**
 * 计算两点之间的距离
 * @param x0 
 * @param y0 
 * @param x1 
 * @param y1 
 * @returns 
 */
export const distance = (x0: number, y0: number, x1: number, y1: number):number => Math.hypot(x1 - x0, y1 - y0);

/**
 * 保留指定小数四舍五入
 * @param n 
 * @param decimals 
 * @returns 
 */
export const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}` as unknown as number)}e-${decimals}`);

/**
 * 求两点的中间点
 * @param param0 
 * @param param1 
 * @returns 
 */
export const midpoint = ([x1, y1], [x2, y2]) => [(x1 + x2) / 2, (y1 + y2) / 2];

/**
 * 
 * @param n 计算一个数的阶乘
 * @returns 
 */
export const factorial = (n: number) => n < 0 ? (() => { throw new TypeError('Negative numbers are not allowed!'); })() : n <= 1 ? 1 : n * factorial(n - 1);

/**
 * 在范围内生成随机数
 * @param min 
 * @param max 
 * @returns 
 */
export const randomNumberInRange = (min: number, max: number) => Math.random() * (max - min) + min;


/**
 * 计算数组的中位数
 * @param arr 
 * @returns 
 */
export const median = (arr: Array<number>) => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

