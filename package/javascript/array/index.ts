
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

/**
 * 返回数组中除最后一个元素之外的所有元素。
 * @param arr 
 * @returns 
 */
export const initial = (arr: Array<any>) => arr.slice(0, -1);


/**
 * 用指定的值来初始化指定长度的数组
 * @param n 
 * @param val 
 * @returns 
 */
export const initializeArrayWithValues = (n: number, val = 0) => Array.from({ length: n }).fill(val)


/**
 * 检查数组是否已经排序 1 正序 -1 倒叙 0 未排序
 * @param arr 
 * @returns 
 */
export const isSorted = (arr: Array<number>) => {
  if (arr.length <= 1) return 0;
  const direction = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if ((arr[i] - arr[i - 1]) * direction < 0) return 0;
  }
  return Math.sign(direction);
};