/*$(function() {
	$(window).scroll(function() {
		var scroll =  $(window).scrollTop();
		var num_top = $("#nav-navbar").offset().top;

		if ($(window).width() > 768) {
				if (scroll >= num_top) {
				$(".navigation").addClass("smaller");
			} else {
				$(".navigation").removeClass("smaller");
			}
		} else {
				if (scroll >= ($("#nav-navbar").offset().top)) {
				$(".navigation").addClass("smaller");
			} else {
				$(".navigation").removeClass("smaller");
			}
		}
	});
});*/

$(document).ready(function() {
var stickyNavTop = $('#nav-navbar').offset().top;
 
var stickyNav = function(){
var scrollTop = $(window).scrollTop();

/*      
if (scrollTop > stickyNavTop) { 
    $('.navigation').addClass('smaller');
} else {
    $('.navigation').removeClass('smaller'); 
}
};
*/

	if ($('.fixed-point.layout')[0].getBoundingClientRect().top < 5) {
		 $('.navigation').addClass('smaller');
	} else {
		$('.navigation').removeClass('smaller'); 
	}
}
 
stickyNav();
 
$(window).scroll(function() {
  stickyNav();
});
});

function animateHamburger() {
  $('#hamburger-button').toggleClass('open');
/*animation from burger to X*/
}

function slideMenu(){
  $('.navbar').toggleClass('open');
  /*animation for slide down menu*/
}
$('#hamburger-button').click(function(){
  console.log('trying');
  animateHamburger();
  slideMenu(); /*attaching click handler to the burger button*/
});

$(window).resize(function() {
	if ($(window).width() <= 1024) {
		$("#nav-navbar").addClass("navbar");

	} else {
		$("#nav-navbar").removeClass("navbar");
	}
}).resize();

$(document).ready(function() {
	var url = window.location.href;
	if (url.split('index.html').length>1) {
		$("#top-header-image").fadeIn("slow");
	} else {
		$("#top-header-image").fadeOut("slow");
	}
});