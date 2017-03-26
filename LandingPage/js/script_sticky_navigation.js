/*$(function() {
	var NavY = $('nav').offset().top;
	 
	function stickyNav(){
		var ScrollY = $(window).scrollTop();
		  
		if (ScrollY > NavY) { 
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky'); 
		}
	};
	 
	stickyNav();
	 
	$(window).scroll(function() {
		stickyNav();
	});
});*/
  $(window).on('scroll', function() {
    var navHeight = $(window).height() - 50;
    if  ($(window).scrollTop() > navHeight ) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  });

