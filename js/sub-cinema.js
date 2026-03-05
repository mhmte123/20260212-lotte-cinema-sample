let mapBtn = document.querySelector(".map-btn");
let mapClose = document.querySelector(".map-close-btn");
let map = document.querySelector(".map");
let mapCloseBtn = document.querySelector(".theater-name .map .close-btn")

mapBtn.addEventListener("click", (e) => {
    e.preventDefault();
    map.classList.toggle("active");
    mapBtn.classList.add("active");
    mapClose.classList.add("active");
})

mapCloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    map.classList.remove("active");
    mapClose.classList.remove("active");
    mapBtn.classList.remove("active");
})

mapClose.addEventListener("click", (e) => {
    e.preventDefault();
    mapClose.classList.remove("active");
    mapBtn.classList.remove("active");
    map.classList.remove("active");
})

let theaterLoc = document.querySelectorAll(".theater-loc-list>li>a");
let theaterContent = document.querySelectorAll(".theater-wrap .theater-list")


console.log(theaterLoc);
console.log(theaterContent);


theaterLoc.forEach((loc, id) => {
    loc.addEventListener("click", (e) => {
        e.preventDefault();
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
    list.addEventListener("click", (e) => {
        e.preventDefault();
        theaterList.forEach((li, i) => {
            li.classList.remove("active");
        })
        list.classList.add("active");
    })
})

let theaterTab = document.querySelectorAll(".theater-tab-menu div");
let tabContent = document.querySelectorAll(".theater-info-sche-wrap .info-sche")
console.log(theaterTab);

theaterTab.forEach((tab, id) => {
    tab.addEventListener("click", (e)=>{
        e.preventDefault();
        theaterTab.forEach((t, i) => {
            t.classList.remove("active");
            tabContent[i].classList.remove("active");
        })
        tab.classList.add("active");
        tabContent[id].classList.add("active");
    })
})

let calendarDate = document.querySelectorAll(".calendar-date>li");
let movieList = document.querySelectorAll(".movie-time-wrap .movie-wrap")
console.log(movieList);

calendarDate.forEach((cal, id) => {
    cal.addEventListener("click", (e)=>{
        e.preventDefault();
        calendarDate.forEach((c, i) =>{
            c.classList.remove("active");
            movieList[i].classList.remove("active");
        })
        cal.classList.add("active");
        movieList[id].classList.add("active");
    })
})

let movieWrap = document.querySelector(".movie-list-wrap");
let moreBtn = document.querySelector(".more-button");
// console.log(moreBtn);


moreBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let mHeight = movieWrap.scrollHeight;
    console.log(mHeight);
    movieWrap.style.height = mHeight + "px";
    moreBtn.style.display = "none";
})