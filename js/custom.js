// tANIMATION
var typed = new Typed(".auto-type",
	{strings: ["Lucky", "Programer", "Designer"],
	typeSpeed: 50,
	backSpeed: 50,
	loop: true
	})

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(300).fadeOut("fast"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/bg1.jpg", 
	 		 "images/bg2.jpg",
			 "images/bg3.jpg"
	 			], 	{duration: 1000, fade: 1300});
		});
});
