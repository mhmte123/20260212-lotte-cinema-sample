let mapBtn = document.querySelector(".map-btn");
let mapClose = document.querySelector(".map-close-btn");
let map = document.querySelector(".map");
let mapCloseBtn = document.querySelector(".theater-name .map .close-btn")

mapBtn.addEventListener("click", () => {
    map.classList.toggle("active");
    mapBtn.classList.add("active");
    mapClose.classList.add("active");
})

mapCloseBtn.addEventListener("click", () => {
    map.classList.remove("active");
    mapClose.classList.remove("active");
    mapBtn.classList.remove("active");
})

mapClose.addEventListener("click", () => {
    mapClose.classList.remove("active");
    mapBtn.classList.remove("active");
    map.classList.remove("active");
}) 