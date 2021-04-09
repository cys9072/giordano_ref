$(".icon").click(function(){
    $(this).children("span").css({"-webkit-transform":"rotateZ(360deg) scale(4)"});
    $( 'html, body' ).delay(1300).animate( { scrollTop : 0 }, 2000 );
        // html 바디의 요소에서 가장상단으로 2초동안 이동 하는데 
        // 이떄 딜레이, 1.3초후에 이 함수가 실행됨
    
    
})

$(".icon").mouseleave(function(){
    $(this).children("span").css({"-webkit-transform":"rotateZ(0deg) scale(1)"});
  })