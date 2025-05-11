//Open email app on click
function openEmailApp() {
  window.location.href = "mailto:sandroodangelo@hotmail.com";
}

//Scroll effect for navigation
const nav = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 85) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Scroll reveal effect
const hiddenElements = document.querySelectorAll(".about-me, .container-project-title, .project-container, .contact-section");

hiddenElements.forEach((element) => {
  element.classList.add("hidden");
});

function checkScroll() {
  hiddenElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", checkScroll);
window.addEventListener("load", checkScroll);

//Open and close sidebar
const hamburger = document.getElementById("hamburger");
const navRight = document.getElementById("nav-right");
const navLinks = document.querySelectorAll(".nav-right a");

hamburger.addEventListener("click", () => {
  navRight.classList.toggle("active");
});

navLinks.forEach((span) => {
  span.addEventListener("click", () => {
    navRight.classList.remove("active");
  });
});

window.addEventListener("click", (event) => {
  const isClickInsideNav = navRight.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (!isClickInsideNav && !isClickOnHamburger) {
    navRight.classList.remove("active");
  }
});
