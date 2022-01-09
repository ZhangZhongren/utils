
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