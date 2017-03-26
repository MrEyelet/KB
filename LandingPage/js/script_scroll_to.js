$(function() { 
 
	$('a[href^="#"]').on('click', function(event) {
	
		var target = $($(this).attr('href'));
	
		if(target.length ){
			$('html, body').animate({
				scrollTop: target.offset().top -100
			}, 1000);
		}
	});
});