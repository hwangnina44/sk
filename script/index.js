///index.js

$(function () {

    $('.menu >li ').hover(
        function () {

            $(this).find("div").stop().slideDown();
            $("div.wrap").stop().slideDown();
        },
        function () {
            $(this).find("div").stop().slideUp();
            $("div.wrap").stop().slideUp();
        }
    );


    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});