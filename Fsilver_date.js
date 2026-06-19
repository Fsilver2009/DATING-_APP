const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

/* 🔊 Romantic sound using Web Audio */
function playSound(type) {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = ctx.createOscillator();
    oscillator.type = "sine";
    oscillator.frequency.value = type === "yes" ? 600 : 200;

    oscillator.connect(ctx.destination);
    oscillator.start();
    setTimeout(() => oscillator.stop(), 150);
}

/* 💖 YES CLICK */
yesBtn.addEventListener("click", () => {
    response.innerHTML = "Thank you hubby 💖😍";
    playSound("yes");
    spawnHearts();
});

/* 💔 NO CLICK */
noBtn.addEventListener("click", () => {
    response.innerHTML = "i miss you baby 💔";
    playSound("no");
});

/* 😂 ESCAPING NO BUTTON */
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 100 - 50;

    noBtn.style.transform = `translate(${x}px, ${y}px) scale(${0.8 + Math.random() * 0.5})`;
});

/* 💖 FLOATING HEARTS (5 only) */
function spawnHearts() {
    for (let i = 0; i < 5; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";

        heart.style.left = (50 + Math.random() * 100 - 50) + "px";
        heart.style.top = "200px";

        document.querySelector(".card").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}
