/**
 * JavaScript Debounce Function
 * http://davidwalsh.name/javascript-debounce-function
 */

export default function (func, wait, immediate) {
  let timeout = null;
  return function () {
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(this, arguments);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(this, arguments);
  };
};
