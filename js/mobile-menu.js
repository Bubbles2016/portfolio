// Hamburger menu for mobile screens
(function ($) {
    var menuOn = false;
    $('.navbar-toggle').click(function () {
        if (menuOn) HideMenu(); else ShowMenu();
        return false;
    });

    $('#overlay').click(function () { HideMenu(); });

    function ShowMenu() {
        $('#overlay').show();
        //$('.first-part').addClass("decrease-zindex")
        $('#mobileNav').addClass("in");
        $(window).scrollTop(0);
        $('body').css("overflow", "hidden");
        menuOn = true;
    }

    function HideMenu() {
        $('#overlay').hide();
        $(".all").css("z-index", "0");
        $('#mobileNav').removeClass("in");
        $('body').css("overflow", "visible");
        menuOn = false;
    }
})(jQuery);
