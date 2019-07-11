$(document).ready(function() {
$('.js-login').on('click', function(){
    $('.header_btns').slideToggle(400)
    })
}); 

$(document).ready(function() {
    $('.js_tabs-link').on('click', function() {
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
});


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
                slidesToshow:3
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToshow:2,
                centerMode: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToshow:1,
            }
        }
    ]
});


          