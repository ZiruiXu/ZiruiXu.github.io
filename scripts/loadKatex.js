(function() {
  function loadKatex(src, fallbackSrc, integrity, onload) {
    const isJS = src.endsWith('.js');
    const elem = document.createElement(isJS ? 'script' : 'link');
    if (isJS) {elem.defer = true; elem.src = src;}
    else {elem.rel = 'stylesheet'; elem.href = src;}
    elem.integrity = integrity;
    elem.crossOrigin = 'anonymous';
    const timeout = setTimeout(function(){elem.onerror();},1000);
    elem.onerror = function() {
      elem.onload = null;
      elem.onerror = null;
      clearTimeout(timeout);
      elem.remove();
      if (fallbackSrc) loadKatex(fallbackSrc, null, integrity, onload);
    };
    elem.onload = function() {
      clearTimeout(timeout);
      if (onload) onload();
    };
    (isJS ? document.body : document.head).appendChild(elem);
  }

  loadKatex(
    'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
    '/katex@0.16.11/katex.min.css',
    'sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+',
    function() {
      loadKatex(
        'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js',
        '/katex@0.16.11/katex.min.js',
        'sha384-7zkQWkzuo3B5mTepMUcHkMB5jZaolc2xDwL6VFqjFALcbeS9Ggm/Yr2r3Dy4lfFg',
        function() {
          loadKatex(
            'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/contrib/auto-render.min.js',
            '/katex@0.16.11/contrib/auto-render.min.js',
            'sha384-43gviWU0YVjaDtb/GhzOouOXtZMP/7XUzwPTstBeZFe/+rCMvRwr4yROQP43s0Xk',
            function() {
              renderMathInElement(document.body);
              window.dispatchEvent(new Event('load'));
            }
          );
        }
      );  
    }
  );
})();