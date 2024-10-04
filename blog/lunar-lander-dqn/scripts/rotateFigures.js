(function() {
  window.addEventListener('load', adjustSvgSize);
  window.addEventListener('resize', adjustSvgSize);

  function adjustSvgSize() {

    const screenWidth = window.innerWidth;
    const EMtoPT = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const elements = document.querySelectorAll('.rotate-for-narrow-screen');
    const maxSizes = [20, 21.5];

    for (let i = 0; i < elements.length; i++) {

      elements[i].parentElement.style.display = 'flex';
      elements[i].parentElement.style.justifyContent = 'center';
      elements[i].parentElement.style.alignItems = 'center';

      if (getComputedStyle(elements[i]).transform !== 'none') {

        const calculatedHeight = Math.min(0.95*screenWidth, maxSizes[i]*EMtoPT);
        elements[i].style.height = `${calculatedHeight}px`;
        elements[i].parentElement.style.height = elements[i].style.width = `${(elements[i].naturalWidth/elements[i].naturalHeight)*calculatedHeight}px`;

      } else {

        elements[i].style.width = '100%';
        elements[i].style.height = 'unset';
        elements[i].parentElement.style.height = 'unset';

      }
    }
  }
})();