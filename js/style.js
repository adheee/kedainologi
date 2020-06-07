// navbar scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $("nav").addClass("navbar-scroll");
    } else {
        $("nav").removeClass("navbar-scroll");
    }
});
// end navbar scroll