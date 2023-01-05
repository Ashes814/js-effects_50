"use strict";
const openBtn = document.querySelector("#open");
const closeBtn = document.querySelector("#close");
const pageContainer = document.querySelector(".page-container");
const addClass = (el, className) => el.classList.add(className);
const removeClass = (el, className) => el.classList.remove(className);
openBtn.addEventListener("click", function () {
  console.log("open", openBtn);
  addClass(openBtn, "hidden");
  removeClass(closeBtn, "hidden");
  removeClass(pageContainer, "show-nav");
});
closeBtn.addEventListener("click", function () {
  console.log("close", closeBtn);
  addClass(closeBtn, "hidden");
  removeClass(openBtn, "hidden");
  addClass(pageContainer, "show-nav");
});
