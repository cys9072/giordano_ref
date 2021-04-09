// 스크롤 감지해서 텍스트 천천히 보여주기
$(document).ready(function() {
    /* 1 */
    $(window).scroll( function(){
        /* 2 */
        $('.pc_contents').each( function(i){
            var bottom_of_object_content = $(this).offset().top + $(this).outerHeight(); //아티클의 절대위치 + 아티클의 컨텐츠만의 고정 높이 아규먼트로 true를 주면 패딩 마진 까지 포함
            var bottom_of_window_content = $(window).scrollTop() + $(window).height(); //document가장 상단 0 스크롤될때 +100만큼 올라감 + 브라우저 자체의 높이
            
            /* 3 */
            if( bottom_of_window_content > bottom_of_object_content/2 +500 ){
                $(this).animate({'opacity':'1'},4000);
                $(this).find('.pc_contents_bottom_wrap').css({"-webkit-transform":"translate(0,0)"});
                $(this).find('.pc_contents_bottom_wrap').css('transition','5s')
                $(this).find('.pc_contents_top_wrap').css({"-webkit-transform":"translate(0,0)"});
                $(this).find('.pc_contents_top_wrap').css('transition','5s')

                $(this).find('.pc_contents_bottom_content_left_image').css({"-webkit-transform":"translate(0,0)"});
                $(this).find('.pc_contents_bottom_content_left_image').css('transition','6s')

                $(this).find('.pc_contents_bottom_content_right_image').css({"-webkit-transform":"translate(0,0)"});
                $(this).find('.pc_contents_bottom_content_right_image').css('transition','7s')



                
            }
        }); 
    });
  });