const menuSwitch = document.getElementById("menuSwitch");

menuSwitch.addEventListener("click", () => {
  const menu = menuSwitch.parentElement;
  if (menu.className === "sidebar") {
    menu.className += " hide";
    menuSwitch.innerHTML = "Show Menu";
  }
  else {
    menu.className = "sidebar";
    menuSwitch.innerHTML = "Hide Menu";
  }
});