"use strict";

const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("mouseover", function () {
    // console.log(panel.parentElement.children);
    Array.prototype.filter
      .call(panel.parentElement.children, (item) => {
        return item !== panel;
      })
      .forEach((el) => {
        el.classList.remove("active");
      });
    panel.classList.add("active");
  });
});
