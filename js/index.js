$(window).on('load', function(){
  $('.eventbtn .close').selected()
})
// $(body).on('click', '.eventbtn .close', function(){
//   $('.eventbar-depth2').slideUp()
// })

// $('.slider').slick();

$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  vertical: true
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

$('.eventbar-depth2').css({opacity:0}).slideUp()
$('.eventbtn .open').on('click', function(){
  $('.eventbar-depth2').css({opacity:1}).slideDown("slow")
})
$('.eventbtn .close').on('click', function(){
  $('.eventbar-depth2').slideUp("slow")
})

$('#popup .popup-top .p-top-right .controls li.minimize').on('click', function(){
  if($('#popup').hasClass('off')){
    $('#popup').removeClass('off')
    $('#popup .popup-bottom .textbox').removeClass('toggle')
  } else {
    $('#popup').addClass('off').removeClass('full')
    $('#popup .popup-bottom .textbox').addClass('toggle')

  }
})

$('#popup .popup-top .p-top-right .controls li.maximize').on('click', function(){
  $('#popup').addClass('full').removeClass('off')
  $(this).css({display:'none'}).siblings('.restore').css({display: 'block'})
  $('#popup .popup-bottom .textbox').removeClass('toggle')
})
$('#popup .popup-top .p-top-right .controls li.restore').on('click', function(){
  $('#popup').removeClass('full')
  $(this).css({display:'none'}).siblings('.maximize').css({display: 'block'})
})

$('#popup .popup-top .p-top-right .controls li.close').on('click', function(){
  $('#popup').css({display: 'none'}).removeClass('off full')
})
