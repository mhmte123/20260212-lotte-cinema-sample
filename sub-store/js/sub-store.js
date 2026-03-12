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
// let tabTitles = document.querySelectorAll(".store-sub-tab-menu-list>li");
// tabTitles.forEach((tab, id) => {
//     tab.addEventListener("click", (e) => {
//         e.preventDefault();
//         tabTitles.forEach((t, i) => {
//             t.classList.remove("active");
//         })
//         tab.classList.add("active");
//     })
// })
const storeData = [

    {
        title: "일반 관람권(2D)",
        price: "13,000원",
        img: "./images/store1.png",
        category: "ticket"
    },

    {
        title: "BEST COMBO 교환권",
        price: "12,500원",
        img: "./images/store4.png",
        category: "snack"
    },

    {
        title: "드래곤 길들이기 투슬리스 키링",
        price: "12,900원",
        img: "./images/store3.png",
        category: "goods"
    },

    {
        title: "텔레토비 터비 토스트 키링",
        price: "9,900원",
        img: "./images/store2.png",
        category: "goods"
    },

    {
        title: "미니언즈 팝콘 키링",
        price: "8,000원",
        img: "./images/store5.png",
        category: "goods"
    },

    {
        title: "위키드 우정 키링",
        price: "10,900원",
        img: "./images/store6.png",
        category: "goods"
    },

    {
        title: "짱구 침낭 피규어",
        price: "7,500원",
        img: "./images/store7.png",
        category: "goods"
    },

    {
        title: "포켓몬스터 키링",
        price: "11,900원",
        img: "./images/store8.png",
        category: "goods"
    }

];

const storeList = document.querySelector(".store-sub-list");

function renderStore(data) {

    storeList.innerHTML = "";

    data.forEach(item => {

        let html = `
<li>

<a href="#">

<div class="img-box">
<img src="${item.img}" alt="">
</div>

<div class="text-wrap">

<div class="text-box">
<p>${item.title}</p>
<p>${item.price}</p>
</div>

<div class="buy-btn">
<img src="./images/shop-icon.png">
</div>

</div>

</a>

</li>
`;

        storeList.innerHTML += html;

    });

}
renderStore(storeData);
const tabs = document.querySelectorAll(".store-sub-tab-menu-list li");

tabs.forEach(tab => {

    tab.addEventListener("click", (e) => {

        e.preventDefault();

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        let category = tab.querySelector("a").dataset.category;

        if (category === "all") {

            renderStore(storeData);

        } else {

            let filtered = storeData.filter(item => item.category === category);
            renderStore(filtered);

        }

    });

});