$(document).ready(function(){
	$(window).scroll(function(){
		if (this.scrollY > 20) {
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
		if (this.scrollY > 500) {
			$('.scroll-up-btn').addClass("show");
		}else{
			$('.scroll-up-btn').removeClass("show");
		}
	});

	//slider up script
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0});
	});

	// toggle menu/navbar styling 
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});

	//typejs animatio styling
	var typed = new Typed(".typing", {
		strings: ["Web Designr", "WordPress Developer", "Blogger", "Designer", "Freelancer", "Photoshop"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});

	var typed = new Typed(".typing-2", {
		strings: ["Web Designr", "WordPress Developer", "Blogger", "Designer", "Freelancer", "Photoshop"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});
	//owl carousel styling 
	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayHoverPouse: true,
		responsive: {
			0:{
				items: 1,
				nav: false
			},
			600:{
				items: 2,
				nav: false
			},
			1000:{
				items: 3,
				nav: false
			}		
		}
	});

	//Download Button Start

	// Download Button End
});

