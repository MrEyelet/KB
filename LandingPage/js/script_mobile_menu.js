$(function(){
	$('.hamburger-menu').click(function(){
		$('li').slideDown(500);
		$('.hamburger-menu').hide();
		$('.icon-close').fadeIn();
	});

	$('.icon-close').click(function() {
	    $('li').slideUp(500);
	    $('.hamburger-menu').fadeIn();
	    $('.icon-close').hide();
	});
});
