let hamBtn = document.querySelector(".ham-btn");
let closeBtn = document.querySelector(".close-btn");
let menuWrap = document.querySelector(".mobile-menu-wrap");

hamBtn.addEventListener("click", () => {
    menuWrap.classList.add("active");
})

closeBtn.addEventListener("click", () => {
    menuWrap.classList.remove("active");
})

let nav = document.querySelector("header")
let logoHeight = document.querySelector("nav").offsetHeight;
console.log(logoHeight);
// let sPos = document.documentElement.scrollTop;


document.addEventListener("scroll", function (e) {
    let sPos = document.documentElement.scrollTop;
    if (sPos > logoHeight) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
})