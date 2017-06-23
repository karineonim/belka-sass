$(document).ready(function(){

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