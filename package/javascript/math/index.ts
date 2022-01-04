
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
