$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header-menu-list, .header-navigation-list').click(function(event) {
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.main-slider').slick({
        dots:true,
        arrows:false,  
    });
});
