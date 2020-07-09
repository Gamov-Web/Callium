$(function(){

$('.reviews__slider').slick({
    dots: true,
    draggable: false
});

$('.slider__wrapper').slick({
    dots: true,
    arrows: false,
    vertical: true,
    draggable: false,
    customPaging: function (slider, i) {
        var thumb = jQuery(slider.$slides[i]).data();
        return '<a>' + ('0' + (i + 1)).slice(-2) + '</a>';
    }
});

 $('.header__burger-menu').on('click', function() {
    $('.burger-menu').addClass('burger-menu__active');
 });

 $('.burger-menu__close-btn').on('click', function() {
    $('.burger-menu').removeClass('burger-menu__active');
 });

});