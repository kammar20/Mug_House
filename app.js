const navBar = document.querySelector(".navbar");
const navMenu = document.querySelector(".nav-menu");
const hamBurger = document.querySelector(".hamburger");
const navLinks = document.querySelectorAll(".nav-link");

// for responsive navbar open and close
hamBurger.addEventListener("click", mobileView);
function mobileView() {
 navBar.classList.toggle("active");
 navMenu.classList.toggle("active");
 hamBurger.classList.toggle("active");
}

// close when click on navlink
navLinks.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
 navBar.classList.remove("active");
 navMenu.classList.remove("active");
 hamBurger.classList.remove("active");
}

// for sticky

window.addEventListener("scroll", stickyNav);

function stickyNav() {
 navBar.classList.toggle("sticky", window.scrollY > 140);
}
