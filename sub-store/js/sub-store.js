let arco = document.querySelectorAll(".store-arco-list>li");
arco.forEach((v) => {
    v.addEventListener("click", () => {
        arco.forEach(vv => vv.classList.remove("active"))
        v.classList.add("active");
    })
})
// let current = 0;
// function slideMove() {
//     current++;
//     if (current == 5) {
//         current = 0;
//     }
//     arco.forEach(vv => classList.remove("active"));
//     arco[current].classList.add("active");
// }
let tabTitles = document.querySelectorAll(".store-sub-tab-menu-list>li");
tabTitles.forEach((tab, id) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();
        tabTitles.forEach((t, i) => {
            t.classList.remove("active");
        })
        tab.classList.add("active");
    })
})
