document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const menuOpen = document.getElementById("menu-open");
  const menuClose = document.getElementById("menu-close");

  function menOpen() {
    menu.classList.add("show");
    menuOpen.style.display = "none";
    menuClose.style.display = "inline";
  }

  function menClose() {
    menu.classList.remove("show");
    menuOpen.style.display = "inline";
    menuClose.style.display = "none";
  }

  menuOpen.addEventListener("click", menOpen);
  menuClose.addEventListener("click", menClose);
});
