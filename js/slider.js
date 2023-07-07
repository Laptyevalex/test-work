const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const slideWidth = document.querySelector(".slide").offsetWidth;

let position = 0;

nextButton.addEventListener("click", () => {
  position -= slideWidth;
  setPosition();
});

prevButton.addEventListener("click", () => {
  position += slideWidth;
  setPosition();
});

function setPosition() {
  if (position > -(slideWidth * (slider.children.length - 1))) {
    slider.style.transform = `translateX(${position}px)`;
  } else {
    position = 0;
    slider.style.transform = `translateX(${position}px)`;
  }
}
