(function() {
  window.addEventListener('load', fileSizeQuery);

  function fileSizeQuery() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      if (this.status == 200) {
        document.getElementById('fileSize').innerHTML = formatBytes(this.getResponseHeader('Content-Length'),3);
      }
    };
    let address = window.location.href;
    if (address.slice(-1) != '/' && address.slice(-4)!='html') address += '/';
      address = address.substring(0,address.lastIndexOf('/')) + '/attachments/CV.pdf';
    xhttp.open('HEAD', address);
    xhttp.setRequestHeader('Content-Type', 'text/html');
    xhttp.send();
  }

  function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 B';
    const k = 1000;
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log2(bytes)/Math.log2(k));
    return `${(bytes/Math.pow(k,i)).toFixed(Math.max(decimals,0))} ${units[i]}`;
  }
})();