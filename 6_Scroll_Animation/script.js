"use strict";
const boxes = document.querySelectorAll(".box");

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 40;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
  });
}

window.addEventListener("scroll", checkBoxes);
checkBoxes();
checkBoxes();
checkBoxes();
