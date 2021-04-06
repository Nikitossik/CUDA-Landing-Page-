$(document).ready(function(){

    $('.header__menu .menu__icon').click(function(){
        $(this).toggleClass('active');
        $('.header__menu .menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header__menu .menu__link').click(function(){

    if ($('.header__menu .menu__body').hasClass('active')){
       
            $('.header__menu .menu__body').removeClass('active');
            $('body').removeClass('lock');
            $('.header__menu .menu__icon').removeClass('active');
       
    } });
    

});