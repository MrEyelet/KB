$(function(){
	$('.hamburger-menu').click(function(){
		$('li').slideDown();
		//$('.hamburger-menu').fadeOut();
		//$('.icon-close').fadeIn();
	});

	$('.icon-close').click(function() {
	    $('li').slideUp();
	    //$('.hamburger-menu').fadeIn();
	    //$('.icon-close').fadeOut();
	});
});
