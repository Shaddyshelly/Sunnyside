const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".menu-layout");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hide");
  mobileMenu.classList.toggle("menu-mobile");
});
