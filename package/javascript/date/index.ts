

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