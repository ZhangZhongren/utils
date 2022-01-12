
/**
 * 获取数组第一个元素
 * @param arr 
 * @returns 
 */
export const head = arr => (arr && arr.length ? arr[0] : undefined);

/**
 * 数组去重合并
 * @param arg
 * @returns 
 */
export const union = (...arg: Array<Array<any>>) => Array.from(new Set([...arg.reduce((total, current) => total = [...total, ...current] , [])]));

/**
 * any to array
 * @param val 
 * @returns 
 */
export const castArray = (val: any): Array<any> => (Array.isArray(val) ? val : [val]);


/**
 * 截取数组 从 第 n 位开始
 * @param arr 
 * @param n 
 * @returns 
 */
export const take = (arr: Array<any>, n = 1): Array<any> => arr.slice(0, n);

/**
 * 返回数组除第一个以外的元素
 * @param arr 
 * @returns 
 */
export const tail = (arr: Array<any>) => (arr.length > 1 ? arr.slice(1) : arr);
