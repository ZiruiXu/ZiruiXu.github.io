(function() {
  function loadPrism(src, fallbackSrc, integrity, onload) {
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
      if (fallbackSrc) loadPrism(fallbackSrc, null, integrity, onload);
    };
    elem.onload = function() {
      clearTimeout(timeout);
      if (onload) onload();
    };
    (isJS ? document.body : document.head).appendChild(elem);
  }

  const plugins = document.currentScript?.getAttribute('data-plugins');

  loadPrism(
    'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.min.css',
    '/prismjs@1.29.0/themes/prism.min.css',
    'sha384-rCCjoCPCsizaAAYVoz1Q0CmCTvnctK0JkfCSjx7IIxexTBg+uCKtFYycedUjMyA2',
    function() {
      loadPrism(
        'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/components/prism-core.min.js',
        '/prismjs@1.29.0/components/prism-core.min.js',
        'sha384-MXybTpajaBV0AkcBaCPT4KIvo0FzoCiWXgcihYsw4FUkEz0Pv3JGV6tk2G8vJtDc',
        function() {
          loadPrism(
            'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',
            '/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',
            'sha384-Uq05+JLko69eOiPr39ta9bh7kld5PKZoU+fF7g0EXTAriEollhZ+DrN8Q/Oi8J2Q',
            function() {
              if (plugins && plugins.includes('treeview')) {
                Prism.plugins.autoloader.languages = {'language-treeview': false};
                loadPrism(
                  'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/treeview/prism-treeview.min.css',
                  '/prismjs@1.29.0/plugins/treeview/prism-treeview.min.css',
                  'sha384-V2W3t0ESati9Nh7S0n1tDV9JymyGPaVqIjJ7Sp9cqnv3565lghJ1bCxMj85FcKWh',
                  function() {
                    loadPrism(
                      'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/treeview/prism-treeview.min.js',
                      '/prismjs@1.29.0/plugins/treeview/prism-treeview.min.js',
                      'sha384-+LFIv/9zc4eu64Zw0SBaXGCkaD4UJpKb7XnkoXndPOwIgdm6U6qdCCFQ0w7ViEmx',
                      function() {
                        Prism.highlightAll();
                        window.dispatchEvent(new Event('load'));
                      }
                    );
                  }
                );
              } else {
                Prism.highlightAll();
                window.dispatchEvent(new Event('load'));
              }
            }
          );
        }
      );  
    }
  );
})();