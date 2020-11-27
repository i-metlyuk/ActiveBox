/// <reference path="../../typings/globals/jquery/index.d.ts" />
$(function() {
    
    /* Fixed Header */

    var header = $("#header"),
        intro = $("#intro"),
        introHeight = intro.innerHeight(),
        scrollPosition = $(window).scrollTop(),
        nav = $("#nav"),
        navToggle = $("#navToggle");

    checkScroll(scrollPosition, introHeight);
    
    $(window).on("scroll resize", function() {
        introHeight = intro.innerHeight();
        scrollPosition = $(this).scrollTop();

        checkScroll(scrollPosition, introHeight);
    });

    function checkScroll(scrollPosition, introHeight) {
        if (scrollPosition > introHeight) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* Smooth Scroll */
    
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var elementId = $(this).data("scroll"),
            elementOffset = $(elementId).offset().top;

        nav.removeClass("show");
        
        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });

    /* Nav Toggle */

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    /* Reviews Slider */

    var slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

});