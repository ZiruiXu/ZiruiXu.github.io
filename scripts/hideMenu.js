(function() {
  const menuSwitch = document.getElementById('menuSwitch');

  menuSwitch.addEventListener('click', () => {
    const menu = menuSwitch.parentElement;
    menu.classList.toggle('collapsed');
    menuSwitch.innerHTML = menu.classList.contains('collapsed') ? 'Show Menu' : 'Hide Menu';
  });
})();