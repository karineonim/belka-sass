$(document).ready(function(){

 // Карусель для альбома 


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

// Карусель для комментариев

  $('#comment-carousel').slick({
  arrows: false,  
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
      {
        breakpoint: 2800,
        settings: {
          arrows: false,
          infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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

 // Карусель для трасс 

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
	  		slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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

// Аккордеон цен на мобильный

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

 // Галочка для цен на планшет и выше 


$('.price__table-rub').click(function() {
    $(this).toggleClass('active-rub');
});

// Наведение на картинки акции (темный фон+текст)

$('.share__img').mouseenter(function()
{
  $(this).children().show();
});

// Наведение на картинки акции (убрать первичный текст)

$('.share__img').mouseenter(function()
{
  $(this).children('.share__text').hide();
});

// Убираем мышку с картинок акций

$('.share__img').mouseleave(function()
{
  $('.share__dark').hide(),
  $('.share__text').show();
  ;
});

$('.album__wrap').mouseenter(function()
{
  $(this).children().show();
});

$('.album__wrap').mouseleave(function()
{
 $(this).children('.album__dark').hide();
});

  // Увеличение картинок

  $('.test-popup-link').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom',
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 500 
    }
});


// Гамбургер для мобильной версии

$( ".toggle-nav__list" ).hide();
$( ".main-nav__toggle" ).click(function() {
$( ".toggle-nav__list" ).slideToggle( "slow", function() {
});
});

$( ".cross" ).click(function() {
$( ".toggle-nav__list" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".main-nav__toggle" ).show();
});
});

// Плавная прокрутка главного и футер меню

$("a.scrollto").click(function () {
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
});

// Плавная прокрутка кнопки-преследователя

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


