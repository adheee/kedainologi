$(document).ready(function () {

	$('.page-scroll').on("click", function (e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 70
		}, 1200);
		e.preventDefault();
	});
});

// active menu
$(document).ready(function(){
	$('ul li .page-scroll').click(function(){
		$('li .page-scroll').removeClass("active");
		$(this).addClass("active");
	});
});

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