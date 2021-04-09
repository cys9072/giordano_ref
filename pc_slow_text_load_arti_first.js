// 스크롤 감지해서 텍스트 천천히 보여주기
$(document).ready(function() {
    /* 1 */
    $(window).scroll( function(){
        /* 2 */
        $('.the_journal').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if( bottom_of_window > bottom_of_object/2 ){
                $(this).animate({'opacity':'1'},2000);
                $(this).children('.the_journal_left_text').css("marginTop","0%");
                $(this).children('.the_journal_left_text').css('transition','5s')
                $(this).children('.the_journal_right_text').css("marginBottom","0%");
                $(this).children('.the_journal_right_text').css('transition','5s')

                
            }
        }); 
    });
  });

