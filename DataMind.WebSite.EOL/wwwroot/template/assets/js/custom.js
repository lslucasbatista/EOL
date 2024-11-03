/*=========

Template Name: Indugi - Factory & Industrial HTML Template

=========*/

/*=========
----- JS INDEX -----
1.Whole Script Strict Mode Syntax
2.Loader Js
3.WoW Animation Js
4.Sticky Header JS
5.Banner Slider JS
6.Portfolio Slider JS
7.Team Box Slider JS
8.Toggle Menu Mobile JS
9.If Mobile Slider JS
10.Scroll To Top JS
=========*/

$(document).ready(function($) {

	// Whole Script Strict Mode Syntax
	"use strict";

	// Loader JS Start
	$(window).ready(function(){
		$('.loader-box').fadeOut();
		$('body').removeClass('fixed');
   });
	// Loader JS End

	// Wow Animation JS Start
	new WOW().init(); 
	// Wow Animation JS Start

    // Sticky Header JS Start
	$(window).on( 'scroll', function(){
		if ($(window).scrollTop() >= 100) {
		  $('.site-header').addClass('sticky-header');
		 }
		 else {
		  $('.site-header').removeClass('sticky-header');
		 }
	});
	// Sticky Header JS End

	// Banner Slider JS Start
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 4500,
			speed: 1000,
			dots: true,
			fade: true,
			arrows: false,
			prevArrow: '<button class="slick-arrow prev-arrow color-arrow"><i class="fa fa-chevron-left"></i></button>',
			nextArrow: '<button class="slick-arrow next-arrow color-arrow"><i class="fa fa-chevron-right"></i></button>',
			responsive: [
				{ breakpoint: 1200, settings: { dots: true, arrows: false } }
			]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();
	// Banner Slider JS End

	// Portfolio Slider Start JS
	$('.portfolio-slider').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		prevArrow: '<button class="slick-arrow prev-arrow color-arrow"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button class="slick-arrow next-arrow color-arrow"><i class="fa fa-chevron-right"></i></button>',
		dots: false,
		arrows: true,
		autoplay: false,
		autoplaySpeed: 2000,
		responsive: [
		  {
			  breakpoint: 1200,
			  settings: {
				  slidesToShow: 4,
			  }
		  },
		  {
			  breakpoint: 992,
			  settings: {
				  slidesToShow: 3, dots: true,
				  arrows: false,
			  }
		  },
		  {
			  breakpoint: 768,
			  settings: {
				  slidesToShow: 2, dots: true,
				  arrows: false,
			  }
		  },
		  {
			breakpoint: 576,
			settings: {
				slidesToShow: 1, dots: true,
				arrows: false,
			}
		  },
		  {
			breakpoint: 376,
			settings: {
				slidesToShow: 1, dots: true,
				arrows: false,
			}
		}
	  ]
	  });
	  //Portfolio Slider End JS

	// Team Box Slider JS Start
	$('.team-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="slick-arrow prev-arrow color-arrow"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button class="slick-arrow next-arrow color-arrow"><i class="fa fa-chevron-right"></i></button>',
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		  {
			  breakpoint: 1200,
			  settings: {
				  slidesToShow: 3,
			  }
		  },
		  {
			  breakpoint: 992,
			  settings: {
				  slidesToShow: 2,
			  }
		  },
		  {
			  breakpoint: 768,
			  settings: {
				  slidesToShow: 2,
			  }
		  },
		  {
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		  },
		  {
			  breakpoint: 376,
			  settings: {
				  slidesToShow: 1,
			  }
		  }
	  ]
	  });
	  // Team Box Slider JS End

	  // Testimonial Box Slider JS Start
	$('.testimonial-slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<button class="slick-arrow prev-arrow color-arrow"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button class="slick-arrow next-arrow color-arrow"><i class="fa fa-chevron-right"></i></button>',
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		  {
			  breakpoint: 1200,
			  settings: {
				  slidesToShow: 2,
			  }
		  },
		  {
			  breakpoint: 992,
			  settings: {
				  slidesToShow: 2,
			  }
		  },
		  {
			  breakpoint: 768,
			  settings: {
				  slidesToShow: 1,
			  }
		  },
		  {
			  breakpoint: 376,
			  settings: {
				  slidesToShow: 1,
			  }
		  }
	  ]
	  });
	  // Testimonial Box Slider JS End

	  // Team Box Slider JS Start
	$('.team-my-work-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button class="slick-arrow prev-arrow color-arrow"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button class="slick-arrow next-arrow color-arrow"><i class="fa fa-chevron-right"></i></button>',
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
		  {
			  breakpoint: 1200,
			  settings: {
				  slidesToShow: 3,
			  }
		  },
		  {
			  breakpoint: 992,
			  settings: {
				  slidesToShow: 2,
			  }
		  },
		  {
			  breakpoint: 768,
			  settings: {
				  slidesToShow: 2,
			  }
		  },
		  {
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		  },
		  {
			  breakpoint: 376,
			  settings: {
				  slidesToShow: 1,
			  }
		  }
	  ]
	  });
	  // Team Box Slider JS End

	// Toggle Menu Mobile JS Start
	$(".toggle-button").on( 'click', function(){
		$(".main-navigation").toggleClass('toggle-menu');
		$(".header-menu .black-shadow").fadeToggle();
	});
	$(".main-navigation ul li a").on( 'click', function(){
		$(".main-navigation").removeClass('toggle-menu');
		$(".header-menu .black-shadow").fadeOut();
	});
	$(".main-navigation ul li.sub-items>a").on( 'click', function(){
		$(".main-navigation").addClass('toggle-menu');
		$(".header-menu .black-shadow").stop();
	});
	$(".header-menu .black-shadow").on( 'click', function(){
		$(this).fadeOut();
		$(".main-navigation").removeClass('toggle-menu');
	});
	// Toggle Menu Mobile JS End

	// If Mobile Slider JS Start
	if ($(window).width() < 992) {

		// Submenu For Mobile JS Start
		$('body').on('click', '.main-navigation ul li.sub-items>a', function() {
			if (($(this).parent().hasClass('active-sub-menu'))) {
			$(this).parent().removeClass('active-sub-menu');
			$(this).parent().find('ul').slideUp();
			} else {
				$(this).parent().addClass('active-sub-menu');
				$(this).parent().find('ul').slideDown();
			}
		});
		// Submenu For Mobile JS End

		// Blog Slider For Mobile JS Start
		$('.blog-slider').slick({
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			prevArrow: '<button class="slick-arrow prev-arrow color-arrow"><i class="fa fa-chevron-left"></i></button>',
			nextArrow: '<button class="slick-arrow next-arrow color-arrow"><i class="fa fa-chevron-right"></i></button>',
			dots: true,
			arrows: false,
			autoplay: false,
				autoplaySpeed: 2000,	
				responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					}
				}
			]	
		});
		// blog Slider For Mobile JS End
}
// If Mobile Slider JS End

// Scroll To Top JS Start
$('#scroll-to-top').on('click', function() {
	$("html, body").animate({ scrollTop: 0 }, 800);
	return false;
});
$(window).on( 'scroll', function() {
	if ($(window).scrollTop() > 300) {
	$("#scroll-to-top").fadeIn(500);
	} else {
	$("#scroll-to-top").fadeOut(500);
	}
});
// Scroll To Top JS End
   
});