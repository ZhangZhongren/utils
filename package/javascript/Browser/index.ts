
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
 * 格式化 cookie
 * @param str 
 * @returns 
 */
export const parseCookie = (str: string): any =>
str
  .split(';')
  .map(v => v.split('='))
  .reduce((acc, v) => {
    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
    return acc;
  }, {});

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

/**
 * 设置元素 style
 * @param el 
 * @param rule 
 * @param val 
 * @returns 
 */
export const setStyle = (el: HTMLElement, rule: string, val: string | number) => (el.style[rule] = val);

/**
 * 给定元素到文档顶部的距离。
 * @param el 
 * @returns 
 */
export const getVerticalOffset = (el: HTMLElement) => {
  let offset = el.offsetTop,
    _el: any = el;
  while (_el.offsetParent) {
    _el = _el.offsetParent;
    offset += _el.offsetTop;
  }
  return offset;
};

/**
 * 检测设备是在自动断还是pc端
 * @returns 
 */
export const detectDeviceType = (): string => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) ? 'Mobile': 'Desktop';

/**
 * 切换 class
 * @param el 
 * @param className 
 * @returns 
 */
export const toggleClass = (el: HTMLElement, className: string) => el.classList.toggle(className);

/**
 * 元素清除指定class
 * @param el 
 * @param className 
 * @returns 
 */
export const removeClass = (el: HTMLElement, className: string) => el.classList.remove(className);

/**
 * 增加类名
 * @param el 
 * @param className 
 * @returns 
 */
export const addClass = (el: HTMLElement, className: string) => el.classList.add(className);


/**
 * 获取元素的某个样式
 * @param el 
 * @param ruleName 
 * @returns 
 */
export const getStyle = (el: HTMLElement, ruleName: string) => getComputedStyle(el)[ruleName];

/**
 * 过滤掉 str 中的 html/xml标签
 * @param str 
 * @returns 
 */
export const stripHTMLTags = (str: string) => str.replace(/<[^>]*>/g, '');

/**
 * 手动触发dom事件
 * @param el 
 * @param eventType 
 * @param detail 
 * @returns
 */
export const triggerEvent = (el: HTMLElement, eventType: string, detail: Object) => el.dispatchEvent(new CustomEvent(eventType, { detail }));

/**
 * 平滑的滚动到指定的元素
 * @param element 
 * @returns 
 */
// https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollIntoView
const smoothScroll = (element: string) => document.querySelector(element).scrollIntoView({ behavior: 'smooth' });

/**
 * 回到顶部
 */
export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

/**
 * 使用 SHA-256 创建 hash
 * @param val 
 * @returns 
 * @TextEncoder https://developer.mozilla.org/zh-CN/docs/Web/API/TextEncoder 
 */
export const hashBrowser = (val: string) =>
  crypto.subtle
    .digest('SHA-256', new TextEncoder().encode(val))
    .then(h => {
      let hexes = [],
        view = new DataView(h);
      for (let i = 0; i < view.byteLength; i += 4)
        hexes.push(('00000000' + view.getUint32(i).toString(16)).slice(-8));
      return hexes.join('');
    });

/**
 * hsl 颜色字符串转换为 颜色值
 * @param hslStr 
 * @returns 
 */
export const toHSLObject = (hslStr: string) => {
  const [hue, saturation, lightness] = hslStr.match(/\d+/g).map(Number);
  return { hue, saturation, lightness };
};

/**
 * rgb 字符串转化为 rgb 对象
 * @param rgbStr 
 * @returns 
 */
export const toRGBObject = (rgbStr: string): { red: number, green: number, blue: number } => {
  const [red, green, blue] = rgbStr.match(/\d+/g).map(Number);
  return { red, green, blue };
};


/**
 * 修改 hls 字符串的高亮值
 * @param delta 
 * @param hslStr 
 * @returns 
 */
export const changeLightness = (delta: string, hslStr: string) => {
  const [hue, saturation, lightness] = hslStr.match(/\d+/g).map(Number);

  const newLightness = Math.max(
    0,
    Math.min(100, lightness + parseFloat(delta))
  );

  return `hsl(${hue}, ${saturation}%, ${newLightness}%)`;
};
/**
 * 通过使用 Web Worker 在单独的线程中运行函数，允许长时间运行的函数不会阻塞 UI。
 * @param fn 
 * @returns 
 */
export const runAsync = (fn: Function) => {
  const worker = new Worker(
    URL.createObjectURL(new Blob([`postMessage((${fn})());`]))
  );
  return new Promise((res, rej) => {
    worker.onmessage = ({ data }) => {
      res(data), worker.terminate();
    };
    worker.onerror = err => {
      rej(err), worker.terminate();
    };
  });
};

/**
 * 创建一个发布订阅者模式
 * @returns 
 */
export const createEventHub = () => ({
  hub: Object.create(null),
  emit(event, data) {
    (this.hub[event] || []).forEach(handler => handler(data));
  },
  on(event, handler) {
    if (!this.hub[event]) this.hub[event] = [];
    this.hub[event].push(handler);
  },
  off(event, handler) {
    const i = (this.hub[event] || []).findIndex(h => h === handler);
    if (i > -1) this.hub[event].splice(i, 1);
    if (this.hub[event].length === 0) delete this.hub[event];
  }
});

/**
 * 获取所有同级元素
 * @param el 
 * @returns 
 */
export const getSiblings = (el: HTMLElement) => [...el.parentNode.childNodes].filter(node => node !== el);

/**
 * 转译html标签
 * @param str 
 * @returns 
 */
export const escapeHTML = (str: string): string =>
str.replace(
  /[&<>'"]/g,
  tag =>
    ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
);
/**
 * 反转译
 * @param str 
 * @returns 
 */
export const unescapeHTML = (str: string): string =>
str.replace(
  /&amp;|&lt;|&gt;|&#39;|&quot;/g,
  tag =>
    ({
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&#39;': "'",
      '&quot;': '"'
    }[tag] || tag)
);
/**
 * 为元素创建 监听事件
 * @param element 
 * @param callback 
 * @param options 
 * @returns 
 */
export const observeMutations = (element, callback, options) => {
  const observer = new MutationObserver(mutations =>
    mutations.forEach(m => callback(m))
  );
  observer.observe(
    element,
    Object.assign(
      {
        childList: true,
        attributes: true,
        attributeOldValue: true,
        characterData: true,
        characterDataOldValue: true,
        subtree: true,
      },
      options
    )
  );
  return observer;
};


/**
 * 获取 form 的值
 * @param form 
 * @returns 
 */
export const formToObject = (form: HTMLFormElement) =>
Array.from(new FormData(form)).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: value
  }),
  {}
);

/**
 * 浏览器生成 uuid
 * @returns 
 */
export const UUIDGeneratorBrowser = () =>
('10000000-1000-4000-8000-100000000000').replace(/[018]/g, (c: any) =>
  (
    c ^
    (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
  ).toString(16)
);

/**
 * 获取imgae 的 srv
 * @param el 
 * @param includeDuplicates 是否去重
 * @returns 
 */
export const getImages = (el: HTMLElement, includeDuplicates = false) => {
  const images = [...el.getElementsByTagName('img')].map(img =>
    img.getAttribute('src')
  );
  return includeDuplicates ? images : [...new Set(images)];
};

/**
 * 获取 baseurl
 * @param url 
 * @returns 
 */
export const getBaseURL = (url: string) => url.replace(/[?#].*$/, '');

/**
 * post 请求
 * @param url 
 * @param data json 字符串
 * @param callback 
 * @param err 
 */
export const httpPost = (url: string, data: string, callback: Function, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send(data);
};

/**
 * http put 请求
 * @param url 
 * @param data json 字符串
 * @param callback 
 * @param err 
 */
export const httpPut = (url: string, data: string, callback: Function, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('PUT', url, true);
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.onload = () => callback(request);
  request.onerror = () => err(request);
  request.send(data);
};

/**
 * http get 请求
 * @param url 
 * @param callback 
 * @param err 
 */
export const httpGet = (url: string, callback: Function, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send();
};

/**
 * http del 请求
 * @param url 
 * @param callback 
 * @param err 
 */
export const httpDelete = (url: string, callback: Function, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('DELETE', url, true);
  request.onload = () => callback(request);
  request.onerror = () => err(request);
  request.send();
};

/**
 * 当点击事件在元素之外发生时触发
 * @param element 
 * @param callback 
 */
export const onClickOutside = (element: any, callback: Function) => {
  document.addEventListener('click', e => {
    if (!element.contains(e.target)) callback();
  });
};

/**
 * 为元素增加样式
 * @param el 
 * @param styles 
 * @returns 
 */
export const addStyles = (el: HTMLElement, styles: any) => Object.assign(el.style, styles);

/**
 * 获取元素的所有父元素
 * @param el 
 * @returns 
 */
export const getAncestors = (el: any) => {
  let ancestors = [];
  while (el) {
    ancestors.unshift(el);
    el = el.parentNode;
  }
  return ancestors;
};

/**
 * 判断当前是不是浏览器环境
 * @returns 
 */
export const isBrowser = () => ![typeof window, typeof document].includes('undefined');

/**
 * 增加css 标签
 * @param css 
 * @returns 
 */
export const injectCSS = (css: string) => {
  let el = document.createElement('style');
  el.type = 'text/css';
  el.innerText = css;
  document.head.appendChild(el);
  return el;
};

/**
 * 是否含有指定标签
 * @param el 
 * @param className 
 * @returns 
 */
export const hasClass = (el: HTMLElement, className: string) => el.classList.contains(className);

/**
 * 检查路径是否是绝对路径
 * @param str 
 * @returns 
 */
export const isAbsoluteURL = (str: string) => /^[a-z][a-z0-9+.-]*:/.test(str);

