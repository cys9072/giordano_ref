// 스크롤 감지해서 텍스트 천천히 보여주기
$(document).ready(function() {
    /* 1 */
    $(window).scroll( function(){
        /* 2 */
        $('.whats').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if( bottom_of_window > bottom_of_object/2 ){
                $(this).animate({'opacity':'1'},2000);
                $(this).children('.whats_text').css("marginLeft","0%");
                $(this).children('.whats_text').css('transition','5s')
                $(this).children('.whats_text_right').animate({'opacity':'1'},3000);

                
            }
        }); 
    });
  });

