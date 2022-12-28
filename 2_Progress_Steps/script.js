"use strict";
const $ = (v) => {
  return document.querySelector(v);
};
const $$ = (v) => {
  return document.querySelectorAll(v);
};

const prevBtn = $("#prev");
const nextBtn = $("#next");
const progress = $("#progress");
const circleElements = $$(".circle");
const min = 0,
  max = circleElements.length - 1;
let currentActive = 0;

nextBtn.addEventListener("click", function () {
  if (nextBtn.classList.contains("disabled")) return;
  if (currentActive >= max - 1) {
    handleClass(nextBtn).addClass("disabled").removeClass("active");
  }

  if (currentActive <= max - 1) {
    currentActive++;
  }

  if (currentActive > 0) {
    handleClass(prevBtn).addClass("active").removeClass("disabled");
  }
  update();
});

prevBtn.addEventListener("click", function () {
  if (prevBtn.classList.contains("disabled")) return;
  if (currentActive <= 1) {
    handleClass(prevBtn).addClass("disabled").removeClass("active");
  }

  if (currentActive > 0) {
    currentActive--;
  }

  if (currentActive >= max - 1) {
    handleClass(nextBtn).addClass("active").removeClass("disabled");
  }
  update();
});

function handleClass(el) {
  let methods = {
    addClass,
    removeClass,
  };
  function addClass(c) {
    el.classList.add(c);
    return methods;
  }
  function removeClass(c) {
    el.classList.remove(c);
    return methods;
  }
  return methods;
}

// function handleClass(el) {
//   let methods = {
//     addClass,
//     removeClass,
//   };

//   function addClass(c) {
//     el.classList.add(c);
//     return methods;
//   }

//   function removeClass(c) {
//     el.classList.remove(c);
//     return methods;
//   }

//   return methods;
// }

function update() {
  circleElements.forEach((item, index) => {
    if (index <= currentActive) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
  progress.style.width = ((98 / max) * currentActive).toFixed(4) + "%";
}
