/**
 * 
 * @param ms waiting times(seconds)
 */
export const sleep = (ms = 30) => {
  const end = new Date().getTime() + ms;
  while (new Date().getTime() < end) { /* do nothing */ }
}

/**
 * 
 * @param ms waiting times(seconds)
 */
export const sleepAsync = (ms = 30) => {
  new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 
 * @param args functions 从右到左执行
 * @returns 函数依次运行结果
 */
export const compose = (...args:  Array<Function>) => <T>(x: T) => args.reduceRight(<U>(res: U, cb: Function) => cb(res), x);
/**
 * 
 * @param args functions 从左到右执行
 * @returns 函数依次运行结果
 */
export const pipe = (...args: Array<Function>) => <T>(x: T) => args.reduce(<U>(res: U, cb: Function) => cb(res), x)
