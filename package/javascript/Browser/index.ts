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