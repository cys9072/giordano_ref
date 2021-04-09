// 왓츠 슬라이더
var swiper = new Swiper('.sw2', {
   
    autoplay: {
        delay: 5000,
      },
      loop:true,
    pagination: {
      el: '.sw2 .swiper-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.8,
        spaceBetween: 15,
      },
      // when window width is >= 990px
      990: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

//   이미지 호버

  $(".sw2 .swiper-slide img").click(function(){
    $(this).css({"-webkit-transform":"rotate3d(0,0,1,10deg)"});
    if(true){
    $(this).mouseleave(function(){
        $(this).css({"-webkit-transform":"rotateX(0deg)"});
    })
    }
    })

