
/**
 * 
 * @param url location.href
 * @returns url params object
 */
 export const getURLParameters = (url: string) =>
 (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
   (a, v) => (
     (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
   ),
   {}
 )
/**
* 
* @param str copy
*/
export const copyToClipboard = (str: string) => {
 const el = document.createElement('textarea');
 el.value = str;
 el.setAttribute('readonly', '');
 el.style.position = 'absolute';
 el.style.left = '-9999px';
 document.body.appendChild(el);
 const selected =
   document.getSelection().rangeCount > 0
     ? document.getSelection().getRangeAt(0)
     : false;
 el.select();
 document.execCommand('copy');
 document.body.removeChild(el);
 if (selected) {
   document.getSelection().removeAllRanges();
   document.getSelection().addRange(selected);
 }
}

/**
 * 浏览器是否聚焦
 * @returns boolean
 */

export const isBrowserTabFocused = (): boolean => !document.hidden;

/**
 * 指定元素是否聚焦
 * @param el HTMLElement
 * @returns boolean
 */
export const elementIsFocused = (el: HTMLElement): boolean => (el === document.activeElement);

/**
 * 检查页面底部是否可见
 */

export const bottomVisible = (): boolean =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight ||
    document.documentElement.clientHeight);

/**
 * 删除 dom
 * @param el 
 * @returns 
 */
export const removeElement = (el: HTMLElement) => el.parentNode.removeChild(el);

/**
 * 是否支持 touch事件
 * @returns 
 */
export const supportsTouchEvents = (): boolean => window && 'ontouchstart' in window;

/**
 * 字符串截取前 num位 补 。。。
 * @param str 
 * @param num 
 * @returns 
 */
export const truncateString = (str: string, num: number) => str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;

/**
 * check urls the same origin
 * @param origin Location
 * @param destination Location
 * @returns 
 */
export const isSameOrigin = (origin: URL, destination: URL) => origin.protocol === destination.protocol && origin.host === destination.host;

/**
 * 在指定的 element前插入 html string
 * @param el HTMLElement
 * @param htmlString 
 * @returns 
 */
export const insertBefore = (el: HTMLElement, htmlString: string) => el.insertAdjacentHTML('beforebegin', htmlString);

/**
 * 在指定的元素后插入 html string
 * @param el 
 * @param htmlString 
 * @returns 
 */
export const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

/**
 * 切换全屏幕
 * @param mode 
 * @param el 
 * @returns 
 */
export const fullscreen = (mode = true, el = 'body') => mode ? document.querySelector(el).requestFullscreen() : document.exitFullscreen();

/**
 * 判断元素是否在可视窗口中
 * @param el 
 * @param partiallyVisible 
 * @returns 
 */
export const elementIsVisibleInViewport = (el: HTMLElement, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

/**
 * 父元素是否包含子元素
 * @param parent 
 * @param child 
 * @returns 
 */
export const elementContains = (parent: HTMLElement, child: HTMLElement): Boolean => parent !== child && parent.contains(child);

/**
 * 获取当前选中的文字
 * @returns 
 */
export const getSelectedText = () => window.getSelection().toString();

/**
 * 获取滚动位置
 * @param el 
 * @returns 
 */
export const getScrollPosition = (el = window as any) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});