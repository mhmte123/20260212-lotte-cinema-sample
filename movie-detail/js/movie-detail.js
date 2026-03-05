
const tabs = document.querySelectorAll(".detail-tab ul li");

tabs.forEach((tab) => {

    tab.style.transition = "opacity 220ms ease";

    tab.addEventListener("click", (e) => {
        e.preventDefault();

        // 이미 active면 아무것도 안 함 (원하면 제거 가능)
        if (tab.classList.contains("active")) return;


        const current = document.querySelector(".detail-tab ul li.active");


        if (current) {
            current.style.opacity = "0.35";
            setTimeout(() => {
                current.classList.remove("active");
                current.style.opacity = "";
            }, 120);
        }


        tab.style.opacity = "0.35";

        void tab.offsetWidth;

        tab.classList.add("active");
        setTimeout(() => {
            tab.style.opacity = "";
        }, 10);
    })
})