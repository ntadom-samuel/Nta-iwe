"use strict";
const right_button = document.querySelector(".right-arrow-container");
const left_button = document.querySelector(".left-arrow-container");
const slides = document.querySelectorAll(".price-card");

//Implementing side scrolling
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
//Implementing smooth scrolling from navs to sections
const landingPage = document.querySelector(".landing-page");
const productPage = document.querySelector(".product-page");
const featuresSection = document.querySelector(".features-section");
const footer = document.querySelector(".footer");

document
  .querySelector(".nav-links-list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.getAttribute("href"));
    console.log(e.target.closest("a").getAttribute("href"));
    let id;

    if (
      e.target.classList.contains("nav-links") ||
      e.target.classList.contains("nav-icon")
    ) {
      if (e.target.classList.contains("nav-icon")) {
        id = e.target.closest("a").getAttribute("href");
      } else {
        id = e.target.getAttribute("href");
      }

      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

//Implementing changing feature tabs
const featureTabSelectors = document.querySelectorAll(".feature-selector");

//With querySelector, you can only add an event for one single element at a time, so the below will only work for one tab
// document
//   .querySelector(".feature-selector")
//   .addEventListener("click", function (e) {})

document.querySelector(".features-nav").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("feature-selector")) {
    featureTabSelectors.forEach((tab) =>
      tab.classList.remove("feature-selector-active")
    );
    e.target.classList.add("feature-selector-active");

    document
      .querySelectorAll(".feature-text-container")
      .forEach((el) => el.classList.remove("feature-container-active"));

    document
      .querySelector(`.features-text-container--${e.target.dataset.tab}`)
      .classList.add("feature-container-active");
  }
});
