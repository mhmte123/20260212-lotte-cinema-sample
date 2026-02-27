let hamBtn = document.querySelector(".ham-btn");
let closeBtn = document.querySelector(".close-btn");
let menuWrap = document.querySelector(".mobile-menu-wrap");

hamBtn.addEventListener("click", ()=>{
    menuWrap.classList.add("active");
})

closeBtn.addEventListener("click",() => {
    menuWrap.classList.remove("active");
})