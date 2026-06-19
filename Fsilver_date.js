const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

/* =========================
   SOUND (safe version)
========================= */
function playSound(type) {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();

    osc.type = "sine";
    osc.frequency.value = type === "yes" ? 600 : 200;

    osc.connect(ctx.destination);
    osc.start();

    setTimeout(() => osc.stop(), 150);
}

/* =========================
   YES BUTTON
========================= */
yesBtn.addEventListener("click", () => {

    response.innerHTML = "Thank you hubby 💖😍";
    playSound("yes");

    spawnHearts();

});

/* =========================
   NO BUTTON CLICK
========================= */
noBtn.addEventListener("click", () => {

    playSound("no");

    response.innerHTML = "😢 Baby, I miss you... please 💔";

    setTimeout(() => {
        response.innerHTML = "🥺 Please baby, I miss your smile 💕";
    }, 2000);

    setTimeout(() => {
        response.innerHTML = "💖 I'll be waiting for you...";
    }, 4000);

});

/* =========================
   NO BUTTON ESCAPE (FIXED FOR MOBILE)
========================= */
let escapeCount = 0;

function moveNoButton() {

    escapeCount++;

    // reset transform first (IMPORTANT FIX)
    noBtn.style.transition = "0.15s ease";

    const x = (Math.random() * 250 - 125);
    const y = (Math.random() * 180 - 90);

    const scale = 0.85 + Math.random() * 0.4;

    noBtn.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;

    // extra effect after multiple tries
    if (escapeCount === 3) {
        response.innerHTML = "🥺 baby I miss you... please 💔";
    }

    if (escapeCount === 6) {
        response.innerHTML = "💖 don't run away from me 😭";
    }
}

/* Desktop support */
noBtn.addEventListener("mouseover", moveNoButton);

/* Mobile support (IMPORTANT FIX) */
noBtn.addEventListener("touchstart", function(e) {
    e.preventDefault(); // prevents freeze issue
    moveNoButton();
}, { passive: false });

/* =========================
   HEARTS
========================= */
function spawnHearts() {

    const card = document.querySelector(".card");

    for (let i = 0; i < 5; i++) {

        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";

        heart.style.left = (50 + Math.random() * 120 - 60) + "px";
        heart.style.top = "200px";

        card.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}
