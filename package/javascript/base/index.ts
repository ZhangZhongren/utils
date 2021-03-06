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
 * val is string
 * @param val any
 * @returns boolean
 */
export const isString = (val: any): boolean => typeof val === 'string';

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

/**
 * 是否支持 session
 * @returns boolean
 */
export const isSessionStorageEnabled = (): boolean => {
  try {
    const key = `__storage__test`;
    window.sessionStorage.setItem(key, null);
    window.sessionStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * 是否支持 localstorage
 * @returns 
 */
export const isLocalStorageEnabled = (): boolean => {
  try {
    const key = `__storage__test`;
    window.localStorage.setItem(key, null);
    window.localStorage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
};

/**
 * check like object
 * @param val 
 * @returns boolean
 */
export const isObjectLike = (val: any):boolean => val !== null && typeof val === 'object';


/**
 * 将给定的数字填充到指定的长度。
 * @param n 
 * @param l 
 * @returns 
 */
 export const padNumber = (n: number | string, l: number) => `${n}`.padStart(l, '0');

 /**
  * 检查是否是 function
  * @param val 
  * @returns 
  */
 export const isFunction = (val: any) => typeof val === 'function';

 /**
  * 数组中是否含有后面的数组选项
  * @param arr 
  * @param values 
  * @returns 
  */
 export const includesAny = (arr: Array<string|number>, values: Array<string|number>) => values.some(v => arr.includes(v));

 /**
  * values中元素 是否所有被 arr包含
  * @param arr 
  * @param values 
  * @returns 
  */
 export const includesAll = (arr: Array<string|number>, values: Array<string|number>) => values.every(v => arr.includes(v));

 /**
  * clone regExp
  * @param regExp 
  * @returns 
  */
 export const cloneRegExp = (regExp: RegExp): RegExp => new RegExp(regExp.source, regExp.flags);

/**
 * 检查参数是否为number
 * @param n 
 * @returns 
 */
 export const validateNumber = (n: any): boolean => {
  const num = parseFloat(n);
  return !Number.isNaN(num) && Number.isFinite(num) && Number(n) == n;
}

/**
 * 将数字转换为小数点格式的字符串。
 * @param num 
 * @returns 
 */

export const toDecimalMark = (num: number): string => num.toLocaleString('en-US');

/**
 * 检查参数是否为基本数据类型
 * @param val 
 * @returns 
 */
export const isPrimitive = (val: any): boolean => Object(val) !== val;

/**
 * 返回值的基本类型
 * @param v 
 * @returns 
 */
export const getType = (v: any) => (v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name);

/**
 * 检查 value 是否为指定类型
 * @param type 
 * @param val 
 * @returns 
 */
export const is = <T>(type: T, val: any) => ![, null].includes(val) && val.constructor === type;

/**
 * 检查参数重是否含有空格
 * @param str 
 * @returns 
 */

export const containsWhitespace = (str: string): boolean => /\s/.test(str);

/**
 * 接受一个数字并以指定的货币格式返回它。
 * @param n 
 * @param curr 
 * @param LanguageFormat 
 * @returns 
 */
export const toCurrency = (n: number, curr: string, LanguageFormat: any = undefined) =>
Intl.NumberFormat(LanguageFormat, {
  style: 'currency',
  currency: curr,
}).format(n);

/**
 * 是否为json格式的字符串
 * @param str 
 * @returns 
 */
export const isJSON = (str: string):boolean => { try { JSON.parse(str); return true } catch (e) { return false; }};

/**
 * 检测字符串是否只包含字符串
 * @param str 
 * @returns 
 */
export const isAlpha = (str: string): boolean => /^[a-zA-Z]*$/.test(str);

/**
 * 驼峰转为字符串
 * @param str 
 * @param separator 
 * @returns 
 */
export const fromCamelCase = (str: string, separator = '_') =>
str
  .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
  .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
  .toLowerCase();

/**
 * 返回字符串的长度以字节为单位
 * @param str 
 * @returns 
 */
export const byteSize = (str: string) => new Blob([str]).size;

/**
 * 过滤空格
 * @param str 
 * @returns 
 */
export const removeWhitespace = (str: string) => str.replace(/\s+/g, '');

/**
 * 用特定字符隐藏字符
 * @param cc 
 * @param num 
 * @param mask 
 * @returns 
 */
export const mask = (cc: string, num = 4, mask = '*') => `${cc}`.slice(-num).padStart(`${cc}`.length, mask);

/**
 * 检查当前用户的首选语言
 * @param defaultLang 
 * @returns 
 */
export const detectLanguage = (defaultLang = 'en-US') => 
navigator.language ||
(Array.isArray(navigator.languages) && navigator.languages[0]) ||
defaultLang;

/**
 * 合并空格
 * @param str 
 * @returns 
 */
export const compactWhitespace = (str: string) => str.replace(/\s{2,}/g, ' ');
