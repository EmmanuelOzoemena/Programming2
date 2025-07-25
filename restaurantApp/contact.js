const cartIcon = document.querySelector(".cart-icon");
const cartDropdown = document.querySelector(".cart-dropdown");

// Initially hide the cart dropdown
cartDropdown.style.display = "none";

cartIcon.addEventListener("mouseenter", () => {
  cartDropdown.style.display = "block";
});

cartIcon.addEventListener("mouseleave", () => {
  cartDropdown.style.display = "none";
});

// Optional: Hide the dropdown if mouse leaves the dropdown itself
cartDropdown.addEventListener("mouseleave", () => {
  cartDropdown.style.display = "none";
});

cartDropdown.addEventListener("mouseenter", () => {
  cartDropdown.style.display = "block";
});
