const bubbleCount = 100;
createBubbles(bubbleCount);

function createBubbles(n) {
    let bubbles = [];

    for (let i = 0; i < n; i++) {
        let bubble = document.createElement("div");
        bubble.classList.add("poppable");
        document.body.appendChild(bubble);
        bubbles.push(bubble);
    }

    bubbles.forEach(element => {
        initializeElement(element);
        floatElement(element);
    });

    return bubbles;
}

function initializeElement(elmnt) {
    const color = `background:radial-gradient(rgba(255, 255, 255, .3), rgba(217, 93, 182, .3))`;
    let width = Math.random() * 130 + 30;

    let horizontal = Math.random() * (window.innerWidth - (width + 10)) + 10;
    const below = window.innerHeight + 1.5 * width;
    let vertical = Math.random() * below;

    if (horizontal < 70 && vertical < 70) {
        horizontal += 60;
        vertical += 60;
    }

    width = width + "px";

    elmnt.setAttribute("style", `${color};width:${width};height:${width};border-radius:${width};left:${horizontal + "px"};top:${vertical + "px"}`);
}

function floatElement(elmnt) {
    const width = parseInt(elmnt.style.width);
    const floatSpeed = 0.5 + 1/4;
    const floatFactor = Math.random() * floatSpeed;

    let top = parseInt(elmnt.style.top);

    function float() {
        requestAnimationFrame(float);
        const below = window.innerHeight;
        const above = -width;

        if (top > above) {
            elmnt.style.top = top + "px";
            top = top - (floatFactor + floatSpeed);
        }
        else {
            top = below;

            elmnt.style.top = top + "px";
            elmnt.style.left = Math.random() * (window.innerWidth - (width + 10)) + 10 + "px";
        }
    }

    requestAnimationFrame(float);
}
