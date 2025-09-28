const pulseButton = document.querySelector(".center-pulse");
const wrapper = document.querySelector(".center-wrapper");
const clickHere = document.querySelector(".click-here");
const pulse = document.querySelector(".center-pulse");
const links = document.querySelectorAll(".center-text a");
const footer = document.querySelector("footer");

// --- pokazuje center-text + odpala falę ---
function showText(e) {
    e.preventDefault();
    e.stopPropagation();
    wrapper.classList.add("show-text");
    triggerPulse();
}

// --- odpala falę w kółku ---
function triggerPulse() {
    pulse.classList.remove("pulse-hover");
    void pulse.offsetWidth; // restart animacji
    pulse.classList.add("pulse-hover");
}

// --- click w pulsujące kółko ---
if (pulseButton) {
    pulseButton.addEventListener("click", showText);
    pulseButton.addEventListener("touchstart", showText, { passive: false });
}

// --- click w "dotknij" ---
if (clickHere) {
    clickHere.addEventListener("click", showText);
    clickHere.addEventListener("touchstart", showText, { passive: false });
}

// --- click poza wrapper → ukryj tekst ---
document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
        wrapper.classList.remove("show-text");
    }
});

// --- click w linki (fala + otwarcie linku) ---
links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        triggerPulse();

        // Otwieramy link natychmiast w nowej karcie
        const newTab = window.open(link.href, "_blank");
        if (newTab) newTab.focus();
    });

    link.addEventListener("mouseenter", triggerPulse); // efekt fali na hover
});

// --- Hover/tap/klik w footer → efekt fali ---
if (footer) {
    // Hover na desktopie
    footer.addEventListener("mouseenter", triggerPulse);

    // Kliknięcie na desktopie
    footer.addEventListener("click", triggerPulse);

    // Tap na telefonie
    footer.addEventListener("touchstart", (e) => {
        e.preventDefault();
        triggerPulse();
    }, { passive: false });
}
