$(document).ready(function () {
    //main carousel

    let mainSlider = $('.main-carousel');
    if (mainSlider.length) {
        mainSlider.on('initialized.owl.carousel changed.owl.carousel', function (e) {
            if (!e.namespace) {
                return;
            }
            let carousel = e.relatedTarget;
        }).owlCarousel({
            loop: false,
            rewind: true,
            responsiveClass: true,
            autoplay: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplayTimeout: 5000,
            smartSpeed: 800,
            touchDrag: true,
            pullDrag: true,
            mouseDrag: true,
            margin: 0,
            nav: true,
            dots: false,
            autoHeight: false,
            autoHeightClass: 'owl-height',
            autoplayHoverPause: true,
            items: 1,
            navText: [
                "<i class='icon icon-left-arrow'></i>",
                "<i class='icon icon-right-arrow'></i>"
            ]
        })
    }

    $(".owl-item.active h1").addClass('animated fadeInUp delay-2');
    $(".owl-item.active .slide-caption").addClass('animated fadeInUp delay-3');
    $(".owl-item.active .btn-orange-animated").addClass('animated fadeInUp delay-4');


    if ($('.main-carousel').length) {
        $(".main-carousel").on('change.owl.carousel', function (event) {

            var item = event.item.index - 2;

            var owlItem = $('.owl-item');
            $('h1').removeClass('animated fadeInUp delay-2');
            $('.slide-caption').removeClass('animated fadeInUp delay-3');
            $('.btn-orange-animated').removeClass('animated fadeInUp delay-4');
            owlItem.not('.cloned').eq(item).find('h1').addClass('animated fadeInUp delay-2');
            owlItem.not('.cloned').eq(item).find('.slide-caption').addClass('animated fadeInUp delay-3');
            owlItem.not('.cloned').eq(item).find('.btn-orange-animated').addClass('animated fadeInUp delay-4');

        });
    }
    //employee carousel
//     if ($('.employee-carousel.owl-carousel').length) {
//         $('.employee-carousel.owl-carousel').owlCarousel({
//             loop: false,
//             rewind: true,
//             responsiveClass: true,
//             animateOut: 'slideOutLeft',
//             animateIn: 'slideInRight',
//             autoplay: false,
//             autoplayTimeout: 5000,
//             touchDrag: true,
//             pullDrag: true,
//             mouseDrag: true,
//             // freeDrag:true,
//             smartSpeed: 500,
//             // autoWidth: true,
//             slideBy: 1,
//             autoplaySpeed: 500,
//             margin: 0,
//             nav: false,
//             dots: true,
//             autoHeight: false,
//             autoHeightClass: 'owl-height',
//             autoplayHoverPause: true,
//             items: 1
//         })
//     }
//     //announcement carousel
//     if ($('.announce-carousel.owl-carousel').length) {
//         $('.announce-carousel.owl-carousel').owlCarousel({
//             loop: false,
//             rewind: true,
//             responsiveClass: true,
//             animateOut: 'slideOutLeft',
//             animateIn: 'slideInRight',
//             autoplay: false,
//             autoplayTimeout: 5000,
//             touchDrag: true,
//             pullDrag: true,
//             mouseDrag: true,
//             // freeDrag:true,
//             smartSpeed: 500,
//             // autoWidth: true,
//             slideBy: 1,
//             autoplaySpeed: 500,
//             margin: 0,
//             nav: false,
//             dots: true,
//             autoHeight: false,
//             autoHeightClass: 'owl-height',
//             autoplayHoverPause: true,
//             items: 1
//         })
//     }
// //press carousel
//     if ($('.press-carousel.owl-carousel').length) {
//         $('.press-carousel.owl-carousel').owlCarousel({
//             loop: false,
//             rewind: true,
//             responsiveClass: true,
//             animateOut: 'slideOutLeft',
//             animateIn: 'slideInRight',
//             autoplay: false,
//             autoplayTimeout: 5000,
//             touchDrag: true,
//             pullDrag: true,
//             mouseDrag: true,
//             // freeDrag:true,
//             smartSpeed: 500,
//             // autoWidth: true,
//             slideBy: 1,
//             autoplaySpeed: 500,
//             margin: 0,
//             nav: false,
//             dots: true,
//             autoHeight: false,
//             autoHeightClass: 'owl-height',
//             autoplayHoverPause: true,
//             items: 1
//         })
//     }
//
//     //events carousel
//     if ($('.events-carousel.owl-carousel').length) {
//         $('.events-carousel.owl-carousel').owlCarousel({
//             loop: false,
//             rewind: true,
//             responsiveClass: true,
//             animateOut: 'slideOutLeft',
//             animateIn: 'slideInRight',
//             autoplay: false,
//             autoplayTimeout: 5000,
//             touchDrag: true,
//             pullDrag: true,
//             mouseDrag: true,
//             // freeDrag:true,
//             smartSpeed: 500,
//             // autoWidth: true,
//             slideBy: 1,
//             autoplaySpeed: 500,
//             margin: 0,
//             nav: false,
//             dots: true,
//             autoHeight: false,
//             autoHeightClass: 'owl-height',
//             autoplayHoverPause: true,
//             items: 3
//         })
//
//     }
//
//     //events carousel
//     if ($('.media-carousel.owl-carousel').length) {
//         $('.media-carousel.owl-carousel').owlCarousel({
//             loop: false,
//             rewind: true,
//             responsiveClass: true,
//             animateOut: 'slideOutLeft',
//             animateIn: 'slideInRight',
//             autoplay: false,
//             autoplayTimeout: 5000,
//             touchDrag: true,
//             pullDrag: true,
//             mouseDrag: true,
//             // freeDrag:true,
//             smartSpeed: 500,
//             // autoWidth: true,
//             slideBy: 1,
//             autoplaySpeed: 500,
//             margin: 0,
//             nav: false,
//             dots: true,
//             autoHeight: false,
//             autoHeightClass: 'owl-height',
//             autoplayHoverPause: true,
//             items: 1
//         })
//     }
//
//     if ($('.social-carousel.owl-carousel').length) {
//         $('.social-carousel.owl-carousel').owlCarousel({
//             loop: false,
//             rewind: true,
//             responsiveClass: true,
//             animateOut: 'slideOutLeft',
//             animateIn: 'slideInRight',
//             autoplay: false,
//             autoplayTimeout: 5000,
//             touchDrag: true,
//             pullDrag: true,
//             mouseDrag: true,
//             // freeDrag:true,
//             smartSpeed: 500,
//             // autoWidth: true,
//             slideBy: 1,
//             autoplaySpeed: 500,
//             margin: 0,
//             nav: false,
//             dots: true,
//             autoHeight: false,
//             autoHeightClass: 'owl-height',
//             autoplayHoverPause: true,
//             items: 1,
//             dotsData: true,
//             addClassActive: true,
//             // afterAction: afterActionFunc
//         })
//
//         document.getElementById('next-slide').addEventListener('click', function () {
//             $('.social-carousel').trigger('next.owl.carousel');
//         });
//
//         document.getElementById('prev-slide').addEventListener('click', function () {
//             $('.social-carousel').trigger('prev.owl.carousel');
//         });
//     }

});


$(document).ready(function () {
var events = new Swiper('.events', {
    direction: 'vertical',
    // slidesPerView: 3,
    setWrapperSize: true,
    roundLengths: true,
    // autoHeight: false,
    freeMode: false,
    autoHeight: false,
    grabCursor: true,
    slidesPerView: 3,
    loop:true,
    spaceBetween: 0,
    centerMode: false,
    centeredSlidesBounds: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

    var press = new Swiper('.press', {
        direction: 'vertical',
        // slidesPerView: 3,
        setWrapperSize: true,
        roundLengths: true,
        // autoHeight: false,
        freeMode: false,
        autoHeight: false,
        grabCursor: true,
        slidesPerView: 1,
        loop:true,
        spaceBetween: 5,
        centerMode: false,
        centeredSlidesBounds: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    var media = new Swiper('.media', {
        direction: 'vertical',
        // slidesPerView: 3,
        setWrapperSize: true,
        roundLengths: true,
        // autoHeight: false,
        freeMode: false,
        autoHeight: false,
        grabCursor: true,
        slidesPerView: 3,
        loop:true,
        spaceBetween: 5,
        centerMode: false,
        centeredSlidesBounds: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    var employee = new Swiper('.employee', {
        direction: 'vertical',
        // slidesPerView: 3,
        setWrapperSize: true,
        roundLengths: true,
        // autoHeight: false,
        freeMode: false,
        autoHeight: false,
        grabCursor: true,
        slidesPerView: 3,
        loop:true,
        spaceBetween: 10,
        centerMode: true,
        centeredSlidesBounds: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    var announce = new Swiper('.announce', {
        direction: 'vertical',
        // slidesPerView: 3,
        setWrapperSize: true,
        roundLengths: true,
        // autoHeight: false,
        freeMode: false,
        autoHeight: false,
        grabCursor: true,
        slidesPerView: 3,
        loop:true,
        spaceBetween: 15,
        centerMode: true,
        centeredSlidesBounds: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    var social = new Swiper('.social', {
        direction: 'vertical',
        // slidesPerView: 3,
        setWrapperSize: true,
        roundLengths: true,
        // autoHeight: false,
        freeMode: false,
        autoHeight: false,
        grabCursor: true,
        slidesPerView: 3,
        loop:true,
        spaceBetween: 15,
        centerMode: true,
        centeredSlidesBounds: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });
});

$(document).ready(function () {
    $(".panel-tab").click(function (event) {
        event.preventDefault();
        $("div.overlay").fadeToggle("fast");
    });
    $('.panel-tab').click(function () {
        $('.menu-hide').toggleClass('show');
        $('.panel-tab .btn-secondary').addClass('hide-btn');
        $('.menu-tab').toggleClass('active');
    });

    $('.xclose').click(function () {
        $('.menu-hide').removeClass('show');
        $('.panel-tab .btn-secondary').removeClass('hide-btn');
        $("div.overlay").fadeOut(300);
        $('.menu-tab').removeClass('active');
    });

    $('body').mouseup(function (e) {
        let sideMenu = $(".menu-hide");
        if (!sideMenu.is(e.target) && sideMenu.has(e.target).length === 0) {
            sideMenu.removeClass("show");
            $('.panel-tab .btn-secondary').removeClass('hide-btn');
            $("div.overlay").fadeOut(300);
        }
    });

    $('.edit-me').on("click", function (e) {
        $('.panel ul li:gt(2) i').toggleClass('remove-icon', 300);
    })
    $('.panel ul li i').on("click", function() {
        $(this).closest("li").remove();
    })
});

//search
$(document).ready(function () {
    $(".search").click(function () {
        $(".input").toggleClass("active").focus;
        $(this).toggleClass("animate");
        $('.search-close').toggleClass('visible');
    });

    $('body').mouseup(function (e) {
        let topSearch = $(".input");
        let searchClose = $('.search-close')
        if (!topSearch.is(e.target) && topSearch.has(e.target).length === 0) {
            topSearch.removeClass("active");
            searchClose.removeClass('visible');
        }
    });
});
$(document).ready(function () {
    var myModalEl = document.getElementById('empModal')
    var modal = bootstrap.Modal.getInstance(myModalEl)
    var popover = new bootstrap.Popover(document.querySelector('.popo'), {
        container: 'body'
    })
});

$(document).ready(function () {
    if ($('.toast').length) {
        $('.toast').toast('show');
    }
});

//Main Menu Link
$(document).ready(function () {
    jQuery(".wsmenu>.wsmenu-list>li.tohide").on('click', function () {
        jQuery(this).toggleClass("wsclickopen").siblings(this).removeClass("wsclickopen");
        jQuery(".wsmenu>.wsmenu-list>li.tohide>ul.extra").removeClass('wsclickopen-sub');
    });
});

$(document).ready(function () {
    jQuery(document).on("click", function (event) {
        let $trigger = $(".wsmenu-list");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            jQuery(".wsmenu>.wsmenu-list>li.tohide").removeClass("wsclickopen");
        }
    });
});

// $(function () {
//     $('.card').matchHeight();
// });




