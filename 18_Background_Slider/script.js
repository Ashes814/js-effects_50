"use strict";
const body = document.body;
const slides = document.querySelectorAll(".slide"); // 为NodeList,与数组Array类似·
const leftBtn = document.getElementById("left");
const rightBth = document.getElementById("right");

let activeSlide = 0;

rightBth.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBgToBody();
  setActiveSlide();
});

setBgToBody();

function setBgToBody() {
  // 将背景的图片设置为container中的图片
  // background-image 在这里需要使用驼峰规则 backgroundImage
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  // 移除每个slide中的active类
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  // 激活当前activeSlide所指定的标签，为其添加active类
  slides[activeSlide].classList.add("active");
}
