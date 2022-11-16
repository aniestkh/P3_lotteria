$(window).on('load', function(){
  $('.eventbtn .close').selected()
})

$('#header .nav .menu .nav-menu .depth1').on('mouseover', function(){
  $('#header .header-depth2').css({display: 'block'})
}) 
$('#header .depth1').on('mouseleave', function(){
  $('#header .header-depth2').css({display: 'none'})
}) 

// $('.slider').slick();

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'linear'
});

$('.slick-dots >li').on('mouseover', function(){
  $(this).addClass('on')
  var idx = $(this).index()
  $('.tagname').find('li').eq(idx).addClass('on').siblings().removeClass('on')
})
$('.slick-dots >li').on('mouseout', function(){
  $(this).removeClass('on')
  $('.tagname li').removeClass('on')

})

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

$('.eventbar-depth2').css({opacity:0}).slideUp()
$('.eventbtn .open').on('click', function(){
  $('.eventbar-depth2').css({opacity:1}).slideDown("slow")
})
$('.eventbtn .close').on('click', function(){
  $('.eventbar-depth2').slideUp("slow")
})

