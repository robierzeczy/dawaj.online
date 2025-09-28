const pulseButton = document.querySelector(".center-pulse");
const wrapper = document.querySelector(".center-wrapper");
const clickHere = document.querySelector(".click-here");
const pulse = document.querySelector(".center-pulse");
const links = document.querySelectorAll(".center-text a");
const footer = document.querySelector("footer");

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

// Funkcja odpala falę w kółku
function triggerPulse() {
    pulse.classList.remove("pulse-hover");
    void pulse.offsetWidth; // restart animacji
    pulse.classList.add("pulse-hover");
}

// Kliknięcie w pulsujące kółko
if (pulseButton) {
    pulseButton.addEventListener("click", showText);
    pulseButton.addEventListener("touchstart", showText);
}

// Kliknięcie w "click here"
if (clickHere) {
    clickHere.addEventListener("click", showText);
    clickHere.addEventListener("touchstart", showText);
}

// Klik poza wrapper → ukryj tekst
document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
        wrapper.classList.remove("show-text");
    }
});

// Efekt fali przy linkach i opóźnienie otwarcia linku
links.forEach(link => {
    const handleClick = (e) => {
        e.preventDefault();
        triggerPulse();
        
        setTimeout(() => {
            window.open(link.href, link.target || "_self");
        }, 500);
    };

    link.addEventListener("mouseenter", triggerPulse);
    link.addEventListener("click", handleClick);
    link.addEventListener("touchstart", handleClick);
});

// --- NOWOŚĆ: Fala ze środka kółka po hover/tap na footer ---
if (footer) {
    // Hover na desktopie
    footer.addEventListener("mouseenter", triggerPulse);

    // Tap na telefonie
    footer.addEventListener("touchstart", (e) => {
        e.preventDefault(); // zapobiega scrollowi podczas tap
        triggerPulse();
    });
}


