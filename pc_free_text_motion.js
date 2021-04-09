// 스크롤 값을 실시간으로 가져 오려면
// scroll()펑션을 사용해야함

$(window).scroll(function(){
    let scrollValue = $(document).scrollTop();
     console.log(scrollValue);
     if(scrollValue > 2150){
        $('.pc_free').animate({'opacity':'1'},2000);

        $('.free_text').css({"-webkit-transform":"translate(0%,0%)"});
        $('.free_text').css('z-index','0')
        $('.free_text').css('transition','3s')
    }

})






