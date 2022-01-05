/**
 * 转换为安全整数
 * @param num number
 * @returns safe integer
 */

export const toSafeInteger = (num: number): number =>
  Math.round(
    Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER)
  );

  /**
   * 角度转换为度数
   * @param rad number 
   * @returns 
   */
export const radToDegrees = (rad: number): number => (rad * 180.0) / Math.PI;

/**
 * 判断入参是否为 
 * @param val undefined
 * @returns boolean
 */
export const isUndefined = (val: any): boolean => val === undefined;

/**
 * val 是否为null
 * @param val 
 * @returns boolean
 */
export const isNull = (val: any):boolean => val === null;

/**
 * 判断 未定义或者空
 * @param val any
 * @returns 
 */

export const isNil = (val: any): boolean => val === undefined || val === null;

/**
 * type symbol
 * @param val 
 * @returns 
 */
export const isSymbol = (val: any) => typeof val === 'symbol';

/**
 * val is number
 * @param val any
 * @returns 
 */
export const isNumber = (val: any): boolean => typeof val === 'number' && val === val;

/**
 * val is boolean
 * @param val any
 * @returns 
 */

export const isBoolean = (val: any): boolean => typeof val === 'boolean';