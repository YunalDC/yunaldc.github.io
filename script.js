// script.js

document.addEventListener("DOMContentLoaded", () => {

  // Mobile menu toggle (for small screens)
  const menuBtn = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("mobile-active");
      menuBtn.setAttribute(
        "aria-expanded",
        navMenu.classList.contains("mobile-active") ? "true" : "false"
      );
    });

    // If user resizes to desktop, close the menu
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        navMenu.classList.remove("mobile-active");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Product filter (gallery page)
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(".product-card-detailed");

  if (filterButtons.length && productCards.length) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Button active state
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // Get requested category
        const category = btn.getAttribute("data-category") || "all";

        // Show / hide cards based on category
        productCards.forEach((card) => {
          const cardCats = card.getAttribute("data-category") || "";
          const show = category === "all" || cardCats.includes(category);
          card.style.display = show ? "block" : "none";
        });
      });
    });
  }
});
