$(function() { 
 
	$('a[href^="#"]').click(function(event) {
		event.preventDefault();
		var target = $($(this).attr('href'));
	
		if(target.length ){
			$('html, body').animate({
				scrollTop: target.offset().top -50
			}, 1000);
		}
	});
});