const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

// YES click
yesBtn.addEventListener("click", () => {
    response.innerHTML = "Thank you hubby 💖😍";
});

// NO button ESCAPING behavior
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 250;
    const y = Math.random() * 250;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// ALSO escape on click (extra safety)
noBtn.addEventListener("click", () => {
    const x = Math.random() * 250;
    const y = Math.random() * 250;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});
