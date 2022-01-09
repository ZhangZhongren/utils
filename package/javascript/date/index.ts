

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