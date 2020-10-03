document.addEventListener("DOMContentLoaded", function () {
    $(function () {
        $('img.img-child').hover(function () {
            let img = $(this).attr('src');
            $('img#img-main').attr('src', img);
        })
    })

    $(function () {
        $('.header__navbar-item--register').click(function () {
            $('.header__navbar-register').addClass('header__navbar-register--open');
            $('.header__overlay').addClass('header__overlay-open');
            $('body,html').addClass('modal__overFlow');
        })
        $('.register__close').click(function () {
            $('.header__navbar-register').removeClass('header__navbar-register--open');
            $('.header__overlay').removeClass('header__overlay-open');
            $('body,html').removeClass('modal__overFlow');
        })
        $('.header__navbar-item--logIn').click(function () {
            $('.header__navbar-logIn').addClass('header__navbar-logIn--open');
            $('.header__overlay').addClass('header__overlay-open');
            $('body,html').addClass('modal__overFlow');
        })
        $('.logIn__close').click(function () {
            $('.header__navbar-logIn').removeClass('header__navbar-logIn--open');
            $('body,html').removeClass('modal__overFlow');
            $('.header__overlay').removeClass('header__overlay-open');
        })
    })


}, false)


