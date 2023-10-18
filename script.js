"use strict";
const right_button = document.querySelector(".right-arrow-container");
const left_button = document.querySelector(".left-arrow-container");
const slides = document.querySelectorAll(".price-card");

let curSlide = 0;
const maxSlide = slides.length - 1;

const arrowRemove = (slideNumber) => {
  if (curSlide === 0) left_button.style.display = "none"; //"Remove Left arrow"
  else left_button.style.display = "inline";

  if (curSlide === 2) right_button.style.display = "none";
  else right_button.style.display = "inline";
};

const getCurSlide = (slide) => {
  arrowRemove(slide);

  slides.forEach(
    (slide, index) =>
      (slide.style.transform = `translateX(${100 * (index - curSlide)}%)`)
  );
};

const nextSlide = () => {
  if (curSlide === maxSlide) curSlide = 0;
  else curSlide++;

  getCurSlide(curSlide);
};

const prevSlide = () => {
  if (curSlide === 0) curSlide = maxSlide;
  else curSlide--;

  getCurSlide(curSlide);
};

getCurSlide();
right_button.addEventListener("click", nextSlide);
left_button.addEventListener("click", prevSlide);
