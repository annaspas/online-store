$(document).ready(function () {

    if ($('.js_range').length > 0) {
        $('.js_login-modal').magnificPopup({
            type: 'inline',
            items: {
                src: '#login-modal'
            }
        });
    }

    $('.form_input-file').on('change', function () {
        var fileVal = $(this).val();
        $(this).next('.form_file-fake').find('.form_file').text(fileVal);
    })

    $('.js-login').on('click', function () {
        $('.header_btns').slideToggle(400)
    })
});



$(document).ready(function () {
    $('.js_tabs-link').on('click', function () {
        var tabNum = $(this).attr('href')
        $(this).addClass('tab-active')
        $(this)
            .parent()
            .siblings()
            .find('.js_tabs-link')
            .removeClass('tab-active')
        $(tabNum).show(400)
        $(tabNum).addClass('.tab-active')
        $(tabNum)
            .siblings()
            .hide(400)
        $(tabNum)
            .siblings()
            .removeClass('.tab-active')
    })


    $('.trending_slides').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 4,
        centerMode: true,
        buttons: false,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToshow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToshow: 2,
                    centerMode: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToshow: 1,
                }
            }
        ]
    });


    if ($('.js_range').length > 0) {
        $(".js_range").ionRangeSlider({
            type: "double",
            min: 0,
            max: 1000,
            from: 0,
            to: 600,
            prefix: "$",
            skin: "round"
        });
    }

    if ($('.js_card').length > 0 && $('.js_list').length > 0) {
        $('.js_card').on('click', function () {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $('.content_row').removeClass('content_list').addClass('content_card');
        });

        $('.js_list').on('click', function () {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $('.content_row').removeClass('content_card').addClass('content_list');
        });
    }
});

if ($(window).width() < 768) {
    $('.sidebar_title').on('click', function () {
        $(this).next().slideToggle(400);
        $(this).parent().siblings().find('.sidebar_main').slideUp(400);
    });
}

$(window).on('resize', function() {
if ($(window).width() >= 768) {
    $('.header_btns').show();
    } else if ($(window).width() < 768) {
        $('.header_btns').hide();
    }
});






          