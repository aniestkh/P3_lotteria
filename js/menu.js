// $('#art1 .selectbox .newevent').on('selected', function(){
//   var idx = $(this).index()

// })
$('#art1 .selectcontents ul li:nth-child(1)').addClass('on')
$('#art1 .selectbox button').on('click', function(){
  var optionselected = $('.newevent option:selected').index();
  console.log(optionselected)


  $('#art1 .selectcontents ul li').eq(optionselected).addClass('on').siblings().removeClass('on')


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