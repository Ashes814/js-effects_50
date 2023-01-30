"use strict";
const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((smallCup, idx) => {
  smallCup.addEventListener("click", () => highlighCups(idx));
});

updateBigCup();

function highlighCups(index) {
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling
  ) {
    index--;
  }
  if (
    smallCups[index].classList.contains("full") &&
    !smallCups[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }
  smallCups.forEach((smallCup, idx) => {
    if (idx <= index) {
      smallCup.classList.add("full");
    } else {
      smallCup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const numberOfFullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (numberOfFullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(numberOfFullCups / totalCups) * 330}px`;
    percentage.innerText = `${(numberOfFullCups / totalCups) * 100}%`;
  }

  if (numberOfFullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - numberOfFullCups * 0.25}L`;
  }
}
