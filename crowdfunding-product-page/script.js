console.log("Hi");

function toggleMenu() {
  const navBar = document.querySelector(".navbar");
  const navLinks = document.querySelector("nav");

  navLinks.classList.toggle("active");
  navBar.classList.toggle("active");
}
