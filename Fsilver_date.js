let escapeCount = 0;

function yesClick() {
    document.getElementById("response").innerHTML =
        "Thank you hubby 💖😍";

    playSound();
    createHearts();
}

function moveNo() {
    const noBtn = document.getElementById("noBtn");

    escapeCount++;

    // move randomly
    const x = Math.random() * 250;
    const y = Math.random() * 300;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    // after 5 escapes → disappear temporarily
    if (escapeCount > 5) {
        noBtn.style.display = "none";

        setTimeout(() => {
            escapeCount = 0;
            noBtn.style.display = "block";
            noBtn.style.left = "50%";
            noBtn.style.top = "60%";
        }, 3000);
    }
}

/* 💕 hearts animation */
function createHearts() {
    for (let i = 0; i < 3; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";

        heart.style.left = (50 + Math.random() * 50) + "%";
        heart.style.top = "60%";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

/* 🔊 romantic sound */
function playSound() {
    const audio = new Audio("https://www.soundjay.com/human/sounds/applause-01.mp3");
    audio.volume = 0.3;
    audio.play();
}
