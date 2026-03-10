$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222')
        $('#brand').addClass('animated fadeIn');
        $('#tuslugi').addClass('animated fadeInRight');
        $('#togabinecie').addClass('animated fadeInRight');
        $('#tkontakt').addClass('animated fadeInRight');
        $('#tmapa').addClass('animated fadeInRight');
        $('#tgab').addClass('animated fadeIn');
        $('#tlek').addClass('animated fadeInUp');
        new WOW().init();
	}, 2000);

});

(function($) {
  "use strict";
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
  $('body').scrollspy({
    target: '#mainNav',
    offset: 40
  });
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });
    
    
     $(window).resize(function(){
	if ($(window).width() <= 992){	
		 $(function () {
  var lastScrollTop = 0;
  var $navbar = $('.navbar');

  $(window).scroll(function(event){
    var st = $(this).scrollTop();

    if (st > lastScrollTop) { 
      $navbar.addClass('slideOutUp');
      $navbar.removeClass('slideInDown');
    } else { 
      $navbar.removeClass('slideOutUp');
      $navbar.addClass('slideInDown');
    }
    lastScrollTop = st;
  });
});
	}	
});

})(jQuery);
