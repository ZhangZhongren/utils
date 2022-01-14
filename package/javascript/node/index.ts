
/**
 * 如果目录不存在就创建目录
 */
import fs = require('fs');
const createDirIfNotExists = (dir: string) => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);

/**
 * 清空缓存再次获取
 * @param module 
 * @returns 
 */

export const requireUncached = (module: string): NodeModule => {
  delete require.cache[require.resolve(module)];
  return require(module);
};

/**
 * base64解码
 * @param str 
 * @returns string
 */

export const atob = (str: string): string => Buffer.from(str, 'base64').toString('binary');

/**
 * 字符串转base64
 * @param str 
 * @returns 
 */
export const btoa = (str: string) => Buffer.from(str, 'binary').toString('base64');
