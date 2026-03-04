// 상단 영화 유형 선택 탭 메뉴 변수 지정
let movieTypeTabTitles = document.querySelectorAll(".movie-type-list>li")

// 영화 유형 메뉴 클릭할 때 active 적용
movieTypeTabTitles.forEach((tab, i) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();
        movieTypeTabTitles.forEach((t) => {
            t.classList.remove("active");
        })
        movieTypeTabTitles[i].classList.add("active");
    })
})

// 영화관 유형 선택 탭 메뉴 변수 지정
let cinemaTypeTabTitles = document.querySelectorAll(".cinema-type-tabmenu-list>li");
console.log(cinemaTypeTabTitles);
// 지역별/스페셜관 전체 영역을 지정하는 변수 지정
let cinemaTypeTabContents = document.querySelectorAll(".cinema-list-area");
console.log(cinemaTypeTabContents);

// 지역별 리스트 지정하는 변수
let cinemaLocTypeLists = document.querySelectorAll(".loc-type>.cinema-list-left>li");
// 스폐셜관 유형 리스트 지정하는 변수
let cinemaSpTypeLists = document.querySelectorAll(".sp-type>.cinema-list-left>li");
console.log(cinemaLocTypeLists, cinemaSpTypeLists)


// forEach로 특정 메뉴를 클릭할 때 active 적용
cinemaTypeTabTitles.forEach((tab, i) => {
    // console.log(cinemaTypeTabTitles);
    tab.addEventListener("click", (e) => {
        e.preventDefault();
        // 내용을 체크하는 forEach
        cinemaTypeTabTitles.forEach((t, i) => {
            t.classList.remove("active");
            cinemaTypeTabContents[i].classList.remove("active");
        })
        cinemaTypeTabTitles[i].classList.add("active");
        cinemaTypeTabContents[i].classList.add("active");
    })
})

// 지역 목록 선택할 때 active 적용
cinemaLocTypeLists.forEach((loc, i) => {
    loc.addEventListener("click", (e) => {
        e.preventDefault();
        cinemaLocTypeLists.forEach((l) => {
            l.classList.remove("active");
        })
        cinemaLocTypeLists[i].classList.add("active");
    })
})
cinemaSpTypeLists.forEach((sp, i) => {
    sp.addEventListener("click", (e) => {
        e.preventDefault();
        cinemaSpTypeLists.forEach((s) => {
            s.classList.remove("active");
        })
        cinemaSpTypeLists[i].classList.add("active");
    })
})

// 우측영역 날짜 영역을 지정하는 변수 지정
let selectDateItems = document.querySelectorAll(".select-date-list>li");
console.log(selectDateItems);

// 특정 날짜를 클릭할 때 active 적용
selectDateItems.forEach((date, i) => {
    date.addEventListener("click", (e) => {
        e.preventDefault();
        selectDateItems.forEach((d) => {
            d.classList.remove("active");
        })
        selectDateItems[i].classList.add("active")
    })
})