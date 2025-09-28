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
        // odpalenie fali
        pulse.classList.remove("pulse-hover");
        void pulse.offsetWidth; // restart animacji
        pulse.classList.add("pulse-hover");
        
        // opóźnione otwarcie linku po 400ms
        setTimeout(() => {
            window.open(link.href, link.target || "_self");
        }, 500);
    };

    link.addEventListener("mouseenter", () => {
        // desktop hover – nadal działa
        pulse.classList.remove("pulse-hover");
        void pulse.offsetWidth;
        pulse.classList.add("pulse-hover");
    });

    // kliknięcie / dotyk
    link.addEventListener("click", handleClick);
    link.addEventListener("touchstart", handleClick);
});
