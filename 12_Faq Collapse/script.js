"use strict";
const toggles = document.querySelectorAll(".faq-toggle");
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.closest("div").classList.toggle("active");
  });
});
