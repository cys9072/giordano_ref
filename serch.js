

// 검색창 열고 닫기 
$(".serching_icon").click(function(){
    $(this).css({"-webkit-transform":"rotateZ(360deg)"});
    $(".serch_modal").css('left','0%');
})

$(".serch_close").click(function(){
    $(".serch_modal").css('left','100%');
    $(".serching_icon").css({"-webkit-transform":"rotateZ(0deg)"});
})