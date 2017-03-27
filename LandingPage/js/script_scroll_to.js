$(function() { 
 
	$('a[href^="#"]').click(function(event) {
		event.preventDefault();
		var target = $($(this).attr('href'));
		$('li').slideUp(1000);
		$('.hamburger-menu').fadeIn();
		$('.icon-close').fadeOut();
		if(target.length ){
			$('html, body').animate({
				scrollTop: target.offset().top -50
			}, 1000);
		}
	});
});