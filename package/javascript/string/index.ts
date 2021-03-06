/**
 * 字符串呢按行锁进
 * @param str 
 * @param count 
 * @param indent 
 * @returns 
 */
export const indentString = (str: string, count: number, indent = ' ') => str.replace(/^/gm, indent.repeat(count));

/**
 * 填充字符串到指定长度
 * @param str 
 * @param length 
 * @param char 
 * @returns 
 */
export const pad = (str: string, length: number, char = ' '): string => str.padStart((str.length + length) / 2, char).padEnd(length, char);

/**
 * 按换行符分割
 * @param str 
 * @returns 
 */
export const splitLines = (str: string): Array<string> => str.split(/\r?\n/);


/**
 * 删除重音符号
 * @param str 
 * @returns 
 */
export const removeAccents = (str: string): string => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');