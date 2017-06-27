$(document).ready(function(){

  $('.test-popup-link').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
});


$('#album-carousel').slick({
	 arrows: false,
    infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
	        infinite: true,
	  		slidesToShow: 1,
	  		slidesToScroll: 1,
      }
    }
    ]
  });

  $('#comment-carousel').slick({
	 arrows: true,
    infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
	        infinite: true,
	  		slidesToShow: 1,
	  		slidesToScroll: 1,
      }
    }
    ]
  });	

$('#routes-carousel').slick({
  arrows: false,	
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
      {
        breakpoint: 1140,
        settings: {
	        arrows: false,
	        infinite: true,
	  		slidesToShow: 3,
	  		slidesToScroll: 3,
        }
      },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
	        infinite: true,
	  		slidesToShow: 1,
	  		slidesToScroll: 1,
      }
    }
    ]
  });	

function accordion() {
	
	function openItem() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
				} else{
		$('.price-mobile__text').removeClass('active');
		$(this).addClass('active');
	}
	}
	
	$('.price-mobile__text').on('click', openItem);
	}
	
	accordion();


$('.price__table-rub').click(function() {
    $(this).toggleClass('active-rub');
});


	// $( ".cross" ).hide();
$( ".toggle-nav__list" ).hide();
$( ".main-nav__toggle" ).click(function() {
$( ".toggle-nav__list" ).slideToggle( "slow", function() {
// $( ".hamburger" ).hide();
// $( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".toggle-nav__list" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".main-nav__toggle" ).show();
});
});

$("a.scrollto").click(function () {
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
});

$(document).ready(function(){
$('a[href*=#]').bind("click", function(e){
var anchor = $(this);
$('html, body').stop().animate({
scrollTop: $(anchor.attr('href')).offset().top
}, 1000);
e.preventDefault();
});
return false;
});

});


