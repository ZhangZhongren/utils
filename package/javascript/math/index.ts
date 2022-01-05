
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