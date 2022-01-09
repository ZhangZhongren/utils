/**
 * 字符串呢按行锁进
 * @param str 
 * @param count 
 * @param indent 
 * @returns 
 */
export const indentString = (str: string, count: number, indent = ' ') => str.replace(/^/gm, indent.repeat(count));