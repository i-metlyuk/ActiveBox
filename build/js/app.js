"use strict";$(function(){var s=$("#header"),o=$("#intro"),e=o.innerHeight(),i=$(window).scrollTop(),l=$("#nav"),n=$("#navToggle");function t(o,e){e<o?s.addClass("fixed"):s.removeClass("fixed")}t(i,e),$(window).on("scroll resize",function(){e=o.innerHeight(),t(i=$(this).scrollTop(),e)}),$("[data-scroll]").on("click",function(o){o.preventDefault();var e=$(this).data("scroll"),s=$(e).offset().top;l.removeClass("show"),$("html, body").animate({scrollTop:s-70},700)}),n.on("click",function(o){o.preventDefault(),l.toggleClass("show")}),$("#reviewsSlider").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,fade:!0,arrows:!1,dots:!0})});