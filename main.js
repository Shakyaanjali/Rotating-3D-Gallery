//basado en la Rotating Image Gallery de @masterneme https://codepen.io/masterneme/pen/bGzeOKX

const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;
let timer;

prevEl.addEventListener("click", () => {
    x += 90;
    clearTimeout(timer);
    updateGallery();
});

nextEl.addEventListener("click", () => {
    x -= 90;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery() {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout( () => {
        x -= 90;
        updateGallery();
    }, 3000)
}

updateGallery();