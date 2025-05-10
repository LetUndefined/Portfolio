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
