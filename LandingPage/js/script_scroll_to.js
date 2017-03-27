$(function() { 
	$('a[href^="#"]').click(function(event) {
		event.preventDefault();
		var target = $($(this).attr('href'));
		
		if(target.length ){
			$('html, body').animate({
				scrollTop: target.offset().top -50
			}, 1000);
		}
		if($(document).width() <= 767) {
			$('li').slideUp(1000);
			$('.hamburger-menu').fadeIn(500);
			$('.icon-close').hide();
		}
	});
});