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


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function toggleDropdown() {
    let btn = document.getElementsByClassName('header_dropdown-main')[0];

    if (btn.style.visibility === "" || btn.style.visibility === "hidden") {
        btn.style.visibility = "visible";
    } else {
        btn.style.visibility = "hidden";
    }
}


$('.trending_tabs').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 3
});

          