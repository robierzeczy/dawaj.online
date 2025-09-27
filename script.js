const pulseButton = document.querySelector(".center-pulse");
const wrapper = document.querySelector(".center-wrapper");
const clickHere = document.querySelector(".click-here");

// Funkcja pokazująca center-text
function showText(e) {
  e.preventDefault();    // blokuje domyślne akcje linków
  e.stopPropagation();   // zatrzymuje propagację kliknięcia
  wrapper.classList.add("show-text");
}

// Kliknięcie w pulsujące kółko
if (pulseButton) {
  pulseButton.addEventListener("click", showText);
}

// Kliknięcie w "click here"
if (clickHere) {
  clickHere.addEventListener("click", showText);
}

// Klik poza wrapper → ukryj tekst
document.addEventListener("click", (e) => {
  if (!wrapper.contains(e.target)) {
    wrapper.classList.remove("show-text");
  }
});
