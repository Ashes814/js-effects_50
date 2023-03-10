"use strict";
const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const blurring = function () {
  load++;
  if (load > 99) {
    clearInterval(timer);
  }
  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};
let load = 0;
let timer = setInterval(blurring, 30);
