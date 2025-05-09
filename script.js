function openEmailApp() {
  window.location.href = "mailto:sandroodangelo@hotmail.com";
}

const nav = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
  if (window.scrollY > 85) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
