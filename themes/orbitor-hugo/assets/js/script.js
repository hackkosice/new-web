(function ($) {
	'use strict';

	// Open links pointing outside this domain in a new tab
	//let baseDomainRegex = /([-\w]+\.(?:[-\w]+\.xn--[-\w]+|[-\w]{3,}|[-\w]+\.[-\w]{2})$)|(^localhost$)|(^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$)/i
	$(document.links).filter(function() {
		return (this.hostname !== window.location.hostname) && (this.target === "");
	}).attr('target', '_blank');

	// Preloader js    
	$(window).on('load', function () {
		$('.preloader').fadeOut(100);
	});

	//$('.video-play').modalVideo();

	/*$('.portfolio-single-slider').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});*/

	/*$('.clients-logo').slick({
		infinite: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000
	});*/

	$('.testimonial-wrap').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		infinite: true,
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});

	$('.portfolio-gallery').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		infinite: true,
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}, {
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}

		]
	});

	/*$('.portfolio-gallery').each(function () {
		$(this).find('.popup-gallery').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	});*/

	// Counter
	$('.counter-stat').counterUp({
		delay: 10,
		time: 1000
	});

	// Smooth scroll on anchor click
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});

})(jQuery);