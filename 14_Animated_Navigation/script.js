"use strict";
const navEl = document.querySelector("nav");
const btn = document.querySelector(".icon");
btn.addEventListener("click", () => {
  navEl.classList.toggle("active");
});
