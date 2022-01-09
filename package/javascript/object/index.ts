
/**
 * 检查是欧时 object 构造的
 * @param val 
 * @returns 
 */
export const isPlainObject = (val: any): boolean => !!val && typeof val === 'object' && val.constructor === Object;

