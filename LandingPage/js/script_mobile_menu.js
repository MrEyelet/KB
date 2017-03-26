$(function(){
	$('.hamburger-menu').click(function(){
		$('.sticky').animate({
			top: "0px"
		}, 200)
	});

	$('.icon-close').click(function() {
	    $('.sticky').animate({
	      top: "-200px"
	    }, 200)

	});
});
