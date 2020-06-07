// navbar scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 70) {
        $("nav").addClass("navbar-scroll");
    } else {
        $("nav").removeClass("navbar-scroll");
    }
});
// end navbar scroll