const pulseButton = document.querySelector(".center-pulse");
const wrapper = document.querySelector(".center-wrapper");
const clickHere = document.querySelector(".click-here");
const pulse = document.querySelector(".center-pulse");
const links = document.querySelectorAll(".center-text a");

// Funkcja pokazująca center-text + odpala falę
function showText(e) {
    e.preventDefault();
    e.stopPropagation();
    wrapper.classList.add("show-text");

    // Odpalenie fali przy kliknięciu
    pulse.classList.remove("pulse-hover");
    void pulse.offsetWidth; // restart animacji
    pulse.classList.add("pulse-hover");
}

// Kliknięcie w pulsujące kółko
if (pulseButton) pulseButton.addEventListener("click", showText);
// Kliknięcie w "click here"
if (clickHere) clickHere.addEventListener("click", showText);

// Klik poza wrapper → ukryj tekst
document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
        wrapper.classList.remove("show-text");
    }
});

// Efekt fali przy hover na linkach
links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        pulse.classList.remove("pulse-hover");
        void pulse.offsetWidth; // restart animacji
        pulse.classList.add("pulse-hover");
    });
});
