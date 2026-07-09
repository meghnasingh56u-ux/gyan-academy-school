/*==========================================
  GYAN ACADEMY V2
  SCRIPT.JS - PART 1
==========================================*/

// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});