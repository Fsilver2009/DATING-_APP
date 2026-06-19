// ============================
// ELEMENTS
// ============================

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");

const continueBtn = document.getElementById("continueBtn");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const response = document.getElementById("response");
// ============================
// VARIABLES
// ============================

let escapeCount = 0;

// ============================
// CONTINUE BUTTON
// ============================

continueBtn.addEventListener("click", () => {

    screen1.classList.remove("active");
    screen2.classList.add("active");

});

// ============================
// YES BUTTON
// ============================

yesBtn.addEventListener("click", () => {
    response.innerHTML =
    "Thank you hubby 💖😍";

    createHearts();

    setTimeout(() => {

        response.innerHTML =
        "🌹 You made my day baby 🥰";

    }, 2500);

});

// ============================
// NO BUTTON ESCAPE
// ============================

function moveButton() {

    escapeCount++;

    const x =
    Math.random() * 250 - 125;

    const y =
    Math.random() * 150 - 75;

    const size =
    0.8 + Math.random() * 0.8;

    noBtn.style.transform =
    `translate(${x}px, ${y}px)
     scale(${size})`;

    if (escapeCount === 5) {

        response.innerHTML =
        "🥺 Baby I miss you... please 💔";

    }

    if (escapeCount === 10) {

        response.innerHTML =
        "😭 Just one small hangout baby? 💕";

    }

}

// Desktop
noBtn.addEventListener("mouseover", moveButton);

// Mobile
noBtn.addEventListener("touchstart", moveButton);

// ============================
// NO BUTTON CLICK
// ============================

noBtn.addEventListener("click", () => {

    noSound.currentTime = 0;
    noSound.play();

    response.innerHTML =
    "😢 Baby I miss you... please 💔";

    setTimeout(() => {

        response.innerHTML =
        "🥺 I really miss you baby 💕";

    }, 2500);

    setTimeout(() => {

        response.innerHTML =
        "🌹 I'll be waiting for you...";

    }, 5000);

});

// ============================
// HEART ANIMATION
// ============================

function createHearts() {

    const card =
    document.querySelector(".card");

    for (let i = 0; i < 5; i++) {

        const heart =
        document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "💖";

        heart.style.left =
        (100 + Math.random() * 150) + "px";

        heart.style.top =
        "220px";

        card.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 2000);

    }

}
