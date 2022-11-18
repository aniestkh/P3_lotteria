$('#section #art1 .selectbox .fakeselectbox .fakeselect').on('click', function(){
    var fake = $(this).index()

    $(this).addClass('on').siblings().removeClass('on')
    // $(this).find('.fakeangle i').attr('class', 'fa-solid fa-caret-down')
    $(this).find('.fakeangle').html(`<i class="fa-solid fa-caret-down"></i>`)
    $(this).siblings().find('.fakeangle').html(`<i class="fa-solid fa-caret-right"></i>`)
    
    $('.selectbox .fakeselectcontents >ul >li').eq(fake).css({display: 'flex'}).siblings().css({display: 'none'})
})