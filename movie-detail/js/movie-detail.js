
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

const moreBtn = document.querySelector('.review-more-toggle');
const hiddenReviews = document.querySelectorAll('.hidden-review');

moreBtn.addEventListener('click', function () {
    const isOpened = moreBtn.classList.contains('active');

    if (!isOpened) {
        hiddenReviews.forEach(function (review) {
            review.classList.add('show');
        });
        moreBtn.classList.add('active');
        moreBtn.innerHTML = '접어보기 <img src="./images/sub-menu-images/lyra-icon-Arrow 31.png" alt="">';
    } else {
        hiddenReviews.forEach(function (review) {
            review.classList.remove('show');
        });
        moreBtn.classList.remove('active');
        moreBtn.innerHTML = '펼쳐보기 <img src="./images/sub-menu-images/lyra-icon-Arrow 31.png" alt="">';
    }
});


const likeBtns = document.querySelectorAll('.review-list .like a:first-child');

likeBtns.forEach(function (btn) {

    btn.addEventListener('click', function (e) {

        e.preventDefault();

        const countSpan = btn.querySelector('span');
        let count = parseInt(countSpan.textContent);


        if (btn.classList.contains('active')) {

            count--;
            btn.classList.remove('active');

        } else {

            count++;
            btn.classList.add('active');

        }

        countSpan.textContent = count;

    });

});
