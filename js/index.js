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
// console.log(logoHeight);
// let sPos = document.documentElement.scrollTop;


document.addEventListener("scroll", function (e) {
    let sPos = document.documentElement.scrollTop;
    if (sPos > logoHeight) {
        nav.classList.add("active");
    } else {
        nav.classList.remove("active");
    }
})


let mainMenu = document.querySelectorAll(".main-menu>li");
// let fMain = document.querySelectorAll(".main-menu>li>a");
let subMenu = document.querySelectorAll(".sub-menu");
let subBg = document.querySelector(".sub-bg");

let wWidth;

function siteInit() {
    wWidth = window.innerWidth;
    console.log(wWidth);

}
siteInit();

window.addEventListener("resize", () => {
    siteInit();
})

mainMenu.forEach(main => {
    main.addEventListener("mouseenter", (e) => {
        if (wWidth > 768) {                         
            // console.log(main.nextElementSibling);
            
            let mMenu = main.querySelector(".sub-menu");
            // console.log(mMenu);
            
            if (mMenu !== null) {
                mMenu.style.height = "100%";
                subBg.classList.add("active");
            }
        }
    })
})

mainMenu.forEach(main => {
    main.addEventListener("mouseleave", (e) => {
        if (wWidth > 768) {
            // let mMenu = main.lastElementChild;
            // console.log(mMenu);
            let mMenu = main.querySelector(".sub-menu");
            if (mMenu !== null) {
                mMenu.style.height = "0";
                subBg.classList.remove("active");
            }
        }
    })
})