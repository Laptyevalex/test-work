const voiceButton = document.querySelector(".voice-btn");
const btnElement = document.querySelector(".vector-2");

voiceButton.addEventListener("click", onclick);
function onclick() {
  btnElement.classList.toggle("hidden");
  console.log(btnElement);
}
