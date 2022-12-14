$(window).on('load', function(){
  $('.eventbtn .close').selected()
})

$('#header .nav .menu .nav-menu .depth1').on('mouseover', function(){
  $('#header .header-depth2').css({display: 'block'})
}) 
$('#header .depth1').on('mouseleave', function(){
  $('#header .header-depth2').css({display: 'none'})
}) 


$('.art1-side-slide').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  cssEase: 'linear',
  prevArrow:'<button class="arrleft"><i class="fa-solid fa-caret-left"></i></button>',
  nextArrow:'<button class="arrright"><i class="fa-solid fa-caret-right"></i></button>'
});

$('.footerslide').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: 'linear',
  prevArrow:'<button class="arrleft"><i class="fa-solid fa-angle-left"></i></button>',
  nextArrow:'<button class="arrright"><i class="fas fa-angle-right"></i></button>'
});
