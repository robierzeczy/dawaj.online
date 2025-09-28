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

    // Wibracja na telefonie
    if (navigator.vibrate) {
        navigator.vibrate(50); // 50ms wibracja
    }
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

        // Odpalenie fali
        pulse.classList.remove("pulse-hover");
        void pulse.offsetWidth; // restart animacji
        pulse.classList.add("pulse-hover");

        // Wibracja na telefonie
        if (navigator.vibrate) {
            navigator.vibrate(30);
        }

        // Opóźnione otwarcie linku po 500ms
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

    // Kliknięcie / dotyk
    link.addEventListener("click", handleClick);
    link.addEventListener("touchstart", handleClick);
});

// Opcjonalnie: lekkie pulsowanie pozycji kółka dla mobilki
function mobilePulseMotion() {
    if (window.innerWidth <= 480) {
        const t = Date.now() / 800; // czas
        pulse.style.transform = `translate(calc(-50% + ${Math.sin(t) * 2}px), calc(-50% + ${Math.cos(t) * 2}px)) scale(1)`;
        requestAnimationFrame(mobilePulseMotion);
    } else {
        pulse.style.transform = "translate(-50%, -50%) scale(1)";
        requestAnimationFrame(mobilePulseMotion);
    }
}
mobilePulseMotion();
