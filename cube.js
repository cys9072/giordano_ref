


// 메인 큐브 슬라이더

var swiper = new Swiper('.sw1', {
    effect: 'cube',
    autoplay: {
        delay: 5000,
      },
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 10,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.sw1 .swiper-pagination',
    },
    loop:true,
  });

//   슬라이더 안 쿠폰 박스 효과
// 클릭 하면 돌아가면서 텍스트 '자세히 보기' 라는 텍스트 노출
$(".main_first_text_wrap div").mouseover(function(){
    $(this).css('background','black');
    $(".main_first_text_wrap div").click(function(){
        $(this).css({"-webkit-transform":"rotateZ(10deg)"});
    })
})

$(".main_first_text_wrap div").mouseleave(function(){
  $(this).css('background','rgba(131, 131, 131, 0.582)');
  $(this).css({"-webkit-transform":"rotateZ(0deg)"});
})




