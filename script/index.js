$(function () {
    const baseUrl = "/sk/";

    function headerActive() {
        $("header").addClass('active');
        $('.logo img').attr('src', `${baseUrl}image/logo.png`);
    }

    function headerDefault() {
        $("header").removeClass('active');
        $('.logo img').attr('src', `${baseUrl}image/logo_w.png`);
    }

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);
         var skreit = $(".skreit").offset().top;
         console.log(scrollTop,skreit);
        if (scrollTop > 250) {
            headerActive();
        }

        if(skreit>=(scrollTop-400)) {
            $('.skreit .title-des, .skreit .des-wrap').animate({
                marginLeft : 0,
                marginRight:0
            },1000);
        }

        if (scrollTop > 800) {
            $(".scroll-top").show();
        } else {
            $(".scroll-top").hide();
        }

        if (scrollTop >= 4310) {
            $(".feature nav").css({ position: "fixed" });
            $("header").fadeOut();
        } else{ $("header").fadeIn();}
        
    });

    $('header').hover(
        function () {
            headerActive();
        },
        function () {
            if ($(window).scrollTop() > 250) {
                headerActive();
            }
        }
    );

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

    // 포트폴리오 배경 변경
    $('.portfolio .content-right .con1').hover(
        function () {
            $('.bg').css({ background: `url(${baseUrl}image/pf_bg1.jpg) center/cover fixed` });
        }, bg
    );
    $('.portfolio .content-right .con2').hover(
        function () {
            $('.bg').css({ background: `url(${baseUrl}image/pf_bg2.jpg) center/cover fixed` });
        }, bg
    );
    $('.portfolio .content-right .con3').hover(
        function () {
            $('.bg').css({ background: `url(${baseUrl}image/pf_bg3.jpg) center/cover fixed` });
        }, bg
    );
    $('.portfolio .content-right .con4').hover(
        function () {
            $('.bg').css({ background: `url(${baseUrl}image/pf_bg4.jpg) center/cover fixed` });
        }, bg
    );
    $('.portfolio .content-right .con5').hover(
        function () {
            $('.bg').css({ background: `url(${baseUrl}image/pf_bg5.jpg) center/cover fixed` });
        }, bg
    );
    $('.portfolio .content-right .con6').hover(
        function () {
            $('.bg').css({ background: `url(${baseUrl}image/pf_bg6.jpg) center/cover fixed` });
        }, bg
    );

    function bg() {
        $('.bg').css({
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: "-1",
            width: "100%",
            height: "100%",
            background: `url(${baseUrl}image/asset_bg.jpg) center/cover fixed`
        });
    }

    // Swiper 초기화
    new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 40,
        centeredSlides: true,
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination.bar",
            type: "progressbar",
        },
        on: {
            init: function () {
                $(".mySwiper .swiper-slide").removeClass("on").find("a").css({
                    backgroundColor: "transparent",
                    border: "1px solid #fff",
                });
                $(".mySwiper .swiper-slide-active").addClass("on").find("a").css({
                    backgroundColor: "red",
                    border: "1px solid red",
                });
            },
            slideChangeTransitionStart: function () {
                $(".mySwiper .swiper-slide").removeClass("on").find("a").css({
                    backgroundColor: "transparent",
                    border: "1px solid #fff",
                });
                $(".mySwiper .swiper-slide-active").addClass("on").find("a").css({
                    backgroundColor: "red",
                    border: "1px solid red",
                });
            },
        },
    });

    new Swiper(".myswiper2", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: "auto",
        pagination: {
            el: ".pagination2",
            type: "progressbar",
        },
        autoplay: { delay: 3000 },
    });

    new Swiper(".myswiper3", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: "auto",
        pagination: {
            el: ".pagination3",
            type: "progressbar",
        },
        autoplay: { delay: 3000 },
    });

    new Swiper(".myswiper4", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: "auto",
        pagination: {
            el: ".pagination4",
            type: "progressbar",
        },
        autoplay: { delay: 3000 },
    });
});
