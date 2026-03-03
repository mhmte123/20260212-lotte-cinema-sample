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

let theaterLoc = document.querySelectorAll(".theater-loc-list>li>a");
let theaterContent = document.querySelectorAll(".theater-wrap .theater-list")


console.log(theaterLoc);
console.log(theaterContent);


theaterLoc.forEach((loc, id) => {
    loc.addEventListener("click", () => {
        theaterLoc.forEach((l, i) => {
            l.classList.remove("active");
            theaterContent[i].classList.remove("active");
        })
        loc.classList.add("active");
        theaterContent[id].classList.add("active");

    })
})

let theaterList = document.querySelectorAll(".theater-list>li");
console.log(theaterList);

theaterList.forEach((list, id) => {
    list.addEventListener("click", () => {
        theaterList.forEach((li, i) => {
            li.classList.remove("active");
        })
        list.classList.add("active");
    })
})

