const voiceButton = document.querySelector(".voice-btn");
const btnElement = document.querySelector(".vector-2");

voiceButton.addEventListener("click", onclick);
function onclick() {
  btnElement.classList.toggle("hidden");
  console.log(btnElement);
}

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
