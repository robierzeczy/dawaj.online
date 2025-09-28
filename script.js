const pulseButton = document.querySelector(".center-pulse");
const wrapper = document.querySelector(".center-wrapper");
const clickHere = document.querySelector(".click-here");
const pulse = document.querySelector(".center-pulse");
const links = document.querySelectorAll(".center-text a");
const footer = document.querySelector("footer");

// --- Funkcja pokazuje center-text + odpala falę ---
function showText(e) {
    e.preventDefault();
    e.stopPropagation();
    wrapper.classList.add("show-text");

    // Odpalenie fali przy kliknięciu
    triggerPulse();
}

// --- Funkcja odpala falę w kółku ---
function triggerPulse() {
    pulse.classList.remove("pulse-hover");
    void pulse.offsetWidth; // restart animacji
    pulse.classList.add("pulse-hover");
}

// --- Obsługa kliknięcia w pulsujące kółko ---
if (pulseButton) {
    pulseButton.addEventListener("click", showText);
    pulseButton.addEventListener("touchstart", showText, { passive: false });
}

// --- Kliknięcie w "dotknij" ---
if (clickHere) {
    clickHere.addEventListener("click", showText);
    clickHere.addEventListener("touchstart", showText, { passive: false });
}

// --- Klik poza wrapper → ukryj tekst ---
document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
        wrapper.classList.remove("show-text");
    }
});

// --- Efekt fali przy linkach i opóźnienie otwarcia linku ---
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
    link.addEventListener("touchstart", handleClick, { passive: false });
});

// --- Hover/tap na footer → efekt fali ---
if (footer) {
    // Hover na desktopie
    footer.addEventListener("mouseenter", triggerPulse);

    // Tap na telefonie
    footer.addEventListener("touchstart", (e) => {
        e.preventDefault();
        triggerPulse();
    }, { passive: false });
}
