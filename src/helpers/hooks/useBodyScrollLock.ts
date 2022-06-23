import { useLayoutEffect } from 'react'

const body = document.querySelector('body');

const getScrollbarWidth = () => {
  if (!body) return undefined;
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  body.appendChild(outer);
  const inner = document.createElement('div');
  outer.appendChild(inner);
  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
  outer?.parentNode?.removeChild(outer);
  if (body.offsetHeight > window.innerHeight) {
    return scrollbarWidth;
  }
};

const disableScrolling = () => {
  if (body && !body.classList.contains('scroll-lock')) {
    const scrollWidth = getScrollbarWidth();
    body.setAttribute('style', `padding-right: ${scrollWidth}px;`);
    body.style.overflow = 'hidden';
    body.classList.add('scroll-lock');
  }
};

const enableScrolling = () => {
  if (!body) return undefined;
  body.removeAttribute('style');
  body.classList.remove('scroll-lock');
};

const useBodyScrollLock = (flag?: boolean) => {
  useLayoutEffect(() => {
    disableScrolling();
    return () => {
      if (flag || flag === undefined) enableScrolling();
    };
  }, [flag]);
};

export default useBodyScrollLock
