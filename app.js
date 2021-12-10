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

// close navmenu when click on navlink and hamburger
navLinks.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
 navBar.classList.remove("active");
 navMenu.classList.remove("active");
 hamBurger.classList.remove("active");
}

// for sticky navbar
window.addEventListener("scroll", stickyNav);
function stickyNav() {
 navBar.classList.toggle("sticky", window.scrollY > 140);
}

// js counter
const counters = document.querySelectorAll(".count");
const speed = 200;

counters.forEach((counter) => {
 const updateCount = () => {
  const target = parseInt(counter.getAttribute("data-target"));
  const count = parseInt(counter.innerText);
  const increment = Math.trunc(target / speed);

  if (count < target) {
   counter.innerText = count + increment;
   setTimeout(updateCount, 10);
  } else {
   counter.innerText = target;
  }
 };
 updateCount();
});
