const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

const pulseButton = document.querySelector(".center-pulse");
const text = document.querySelector(".center-text");

if (pulseButton && text) {
  pulseButton.addEventListener("click", () => text.classList.toggle("show"));
}
