"use strict";
const labels = document.querySelectorAll(".form-control label");
console.log(labels);
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map((letter, idx) => {
      return `<span style='transition-delay:${idx * 50}ms'>${letter}</span>`;
    })
    .join("");
});
