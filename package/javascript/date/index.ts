

/**
 * 日期是否在两者之间
 * @param dateStart 
 * @param dateEnd 
 * @param date 
 * @returns 
 */
export const isBetweenDates = (dateStart, dateEnd, date): boolean =>
  date > dateStart && date < dateEnd;


  /**
   * 获取 页面使用的协议
   * @returns 
   */

export const getProtocol = () => window.location.protocol;

/**
 * 检查日期是否是周末
 * @param d 
 * @returns 
 */
export const isWeekend = (d = new Date()) => d.getDay() % 6 === 0;

/**
 * 检查日期是否是工作日
 * @param d 
 * @returns 
 */
export const isWeekday = (d = new Date()) => d.getDay() % 6 !== 0;

/**
 * 检查是否为闰年
 * @param year 
 * @returns 
 */
export const isLeapYear = (year: number): boolean => new Date(year, 1, 29).getMonth() === 1;


/**
 * 判断两个时间是否相同
 * @param dateA 
 * @param dateB 
 * @returns 
 */
export const isSameDate = (dateA: Date, dateB: Date): boolean => dateA.toISOString() === dateB.toISOString();

/**
 * 获取指定年的月份的天数
 * @param year 
 * @param month 
 * @returns 
 */
export const daysInMonth = (year: number, month: number) => new Date(year, month, 0).getDate();

/**
 * 计算两个时间差 以秒为单位
 * @param dateInitial 
 * @param dateFinal 
 * @returns 
 */
export const getSecondsDiffBetweenDates = (dateInitial: number, dateFinal: number): number => (dateFinal - dateInitial) / 1000;

/**
 * 计算两个时间差 以分钟为单位
 * @param dateInitial 
 * @param dateFinal 
 * @returns 
 */
export const getMinutesDiffBetweenDates = (dateInitial: number, dateFinal: number): number => (dateFinal - dateInitial) / (1000 * 60);

/**
 * 计算两个时间差 以天为单位
 * @param dateInitial 
 * @param dateFinal 
 * @returns 
 */
export const getHoursDiffBetweenDates = (dateInitial: number, dateFinal: number): number => (dateFinal - dateInitial) / (1000 * 3600);

/**
 * 转换为12小时表达式
 * @param num 
 * @returns 
 */
export const getMeridiemSuffixOfInteger = num =>
num === 0 || num === 24
  ? 12 + 'am'
  : num === 12
  ? 12 + 'pm'
  : num < 12
  ? (num % 12) + 'am'
  : (num % 12) + 'pm';