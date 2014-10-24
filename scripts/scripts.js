// Mobile Navigation //


$(function () {
    $('.btnmenu').on('click', function (e) {
        e.preventDefault();
        $('.mobilenav').toggleClass("is-visible");
		$('.topNav ul:first-child').toggleClass("mobnav")
        $('.topNav ul:last-child').css('padding', '0 0 1em 0');		
    });
});

