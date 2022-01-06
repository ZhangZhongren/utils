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

/**
 * 测量函数执行时间
 * @param callback 
 * @returns 
 */
export const timeTaken = (callback: Function) => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

/**
 * 浅克隆
 * @param obj 
 * @returns 
 */

export const shallowClone = (obj: Object) => Object.assign({}, obj);

/**
 * 随机布尔值
 * @returns boolean
 */

export const randomBoolean = (): boolean => Math.random() >= 0.5;

/**
 * 否定谓词函数
 * @param func 
 * @returns
 */
export const negate = (func: Function) => (...args) => !func(...args);

/**
 * 检查是否大些
 * @param str 
 * @returns 
 */

export const isUpperCase = (str: string): boolean => str === str.toUpperCase();

/**
 * 检查是否小写
 * @param str 
 * @returns 
 */

export const isLowerCase = (str: string): boolean => str === str.toLowerCase();