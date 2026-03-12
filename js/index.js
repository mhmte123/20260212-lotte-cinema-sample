// let hamBtn = document.querySelector(".ham-btn");
// let closeBtn = document.querySelector(".close-btn");
// let menuWrap = document.querySelector(".mobile-menu-wrap");

// hamBtn.addEventListener("click", () => {
//     menuWrap.classList.add("active");
// })

// closeBtn.addEventListener("click", () => {
//     menuWrap.classList.remove("active");
// })

// let nav = document.querySelector("header")
// let logoHeight = document.querySelector("nav").offsetHeight;
// // console.log(logoHeight);
// // let sPos = document.documentElement.scrollTop;


// document.addEventListener("scroll", function (e) {
//     let sPos = document.documentElement.scrollTop;
//     if (sPos > logoHeight) {
//         nav.classList.add("active");
//     } else {
//         nav.classList.remove("active");
//     }
// })

// // let mobileWrap = document.querySelector(".mobile-menu-wrap");
// let mainMenu = document.querySelectorAll(".main-menu>li");
// // let fMain = document.querySelectorAll(".main-menu>li>a");
// let subMenu = document.querySelectorAll(".sub-menu");
// let mobileMenu = document.querySelectorAll(".mobile-menu-list>li>a");
// let subBg = document.querySelector(".sub-bg");

// let wWidth;

// function siteInit() {
//     wWidth = window.innerWidth;
//     console.log(wWidth);

// }
// siteInit();

// window.addEventListener("resize", () => {
//     siteInit();
//     menuWrap.classList.remove("active");
// })

// mainMenu.forEach(main => {
//     main.addEventListener("mouseenter", (e) => {
//         if (wWidth > 768) {
//             // console.log(main.nextElementSibling);

//             let mMenu = main.querySelector(".sub-menu");
//             // console.log(mMenu);

//             if (mMenu !== null) {
//                 mMenu.style.height = "100%";
//                 subBg.classList.add("active");
//             }
//         }
//     })
// })

// mainMenu.forEach(main => {
//     main.addEventListener("mouseleave", (e) => {
//         if (wWidth > 768) {
//             // let mMenu = main.lastElementChild;
//             // console.log(mMenu);
//             let mMenu = main.querySelector(".sub-menu");
//             if (mMenu !== null) {
//                 mMenu.style.height = "0";
//                 subBg.classList.remove("active");
//             }
//         }
//     })
// })

// mobileMenu.forEach(mobile => {
//     mobile.addEventListener("click", (e) => {
//         if (wWidth <= 768) {
//             let m = mobile.nextElementSibling;
//             // console.log(m);
//             // 서브메뉴 높이
//             let sHeight = m.scrollHeight;
//             console.log(sHeight);
//             // 서브메뉴 확인
//             let toggle = m.style.height && m.style.height !== "0px";
//             if (toggle) {
//                 m.style.height = 0
//             } else {
//                 m.style.height = sHeight + "px";
//             }
//         }
//     })
// })