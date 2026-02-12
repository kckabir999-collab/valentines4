document.addEventListener("DOMContentLoaded", function () {

    let scale = 1;

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const music = document.getElementById("bgMusic");

    noBtn.addEventListener("click", function () {

        scale += 0.4;

        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${scale})`;
        yesBtn.style.zIndex = "1000";

        if (scale > 3) {
            yesBtn.style.position = "fixed";
            yesBtn.style.top = "0";
            yesBtn.style.left = "0";
            yesBtn.style.width = "100vw";
            yesBtn.style.height = "100vh";
            yesBtn.style.transform = "none";
            yesBtn.style.fontSize = "50px";
            yesBtn.style.borderRadius = "0";
            noBtn.style.display = "none";
        }
    });

    yesBtn.addEventListener("click", function () {

        music.play();

        document.body.innerHTML = `
            <div style="
                text-align:center;
                padding-top:50px;
                background:#ffe6f0;
                height:100vh;
                font-family: Arial;">

                <h1 style="color:hotpink; font-size:50px;">
                    YAYYYY 💕<br>You are already mine MERO GUNDU😘 
                </h1>

                <div class="slideshow">
                    <img src="cinema.jpg">
                    <img src="couple.jpg">
                    <img src="best.jpg">
                </div>

            </div>
        `;

        createHearts();
    });

    function createHearts() {
        setInterval(() => {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = Math.random() * 20 + 20 + "px";
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, 300);
    }

});
