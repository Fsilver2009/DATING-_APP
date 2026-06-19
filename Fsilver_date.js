const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const sound = document.getElementById("romanticSound");

// YES CLICK
yesBtn.addEventListener("click", () => {
    response.innerHTML = "Thank you hubby 💖😍";

    sound.play();

    // 5 floating hearts only
    for(let i=0;i<5;i++){
        createHeart();
    }
});

function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random()*300 + "px";
    heart.style.top = "50%";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },2000);
}

// NO BUTTON ESCAPE MODE 😭
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton(){
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    // random size change (annoying mode 😭)
    const scale = 0.6 + Math.random() * 1.5;
    noBtn.style.transform = `scale(${scale})`;
}
