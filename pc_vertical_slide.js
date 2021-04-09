// 세로로 슬라이더 수동
// 설계
// div 1개로 2가지 백그라운드 이미지 변경 + 
// 배경 1 모듈 2 텍스트 3 순으로 순차적으로 나타내기.

// 1. 첫번째로 보일때 배경 모듈 텍스트 순으로 위에서 아래로 떨어지기 

// 2. 아래 버튼 클릭하면 기존배경 모듈 텍스트 위로 올라가고 아래에 있는
// 배경 모듈 텍스트 위로 순차적으로 올라가기

// 3. 위로 버튼 클릭하면  기존배경 모듈 텍스트 아래로 내려가고 위에 있는
// 배경 모듈 텍스트 아애로 순차적으로 내려가기

// 4. 안보이는 부부은 Overflow hidden 으로 처리

$(".pc_up").click(function(){
$(".pc_main_first_real_bg").css('top','0%');
$(".pc_main_second_bg").css('top','100%'); 
$(".pc_main_second_bg").css('z-index','0'); 
$(".pc_main_first_module h2").css('color','black');
$(".pc_main_first_module_box h5").css('color','black');
$(".pc_main_first_module_box p").css('color','black');
$(".pc_main_first_left_text h4").css('color','black');
$(".pc_main_first_left_text h5").css('color','black');
})

$(".pc_down").click(function(){
$(".pc_main_first_real_bg").css('top','-100%');
$(".pc_main_second_bg").css('z-index','1'); 
$(".pc_main_second_bg").css('top','0%'); 
$(".pc_main_first_module h2").css('color','white');
$(".pc_main_first_module_box h5").css('color','white');
$(".pc_main_first_module_box p").css('color','#b8b8b8');
$(".pc_main_first_left_text h4").css('color','#b8b8b8');
$(".pc_main_first_left_text h5").css('color','#b8b8b8');
    })


setInterval(function(){
// 메인자체 천천히 로드
$(document).ready(function(){
    $(".pc_main").css('opacity','1');
    $(".pc_main").css('transition','3s')
});

// 좌측 텍스트 우로 천천히 이동
$(document).ready(function(){
    $(".pc_main_first_left_text").css('opacity','1');
    $(".pc_main_first_left_text").css('left','0');
    $(".pc_main_first_left_text").css('transition','5s')
});

$(document).ready(function(){
    $(".pc_main_first_left_text h3").css('opacity','1');
    $(".pc_main_first_left_text h3").css('margin-top','0')
    $(".pc_main_first_left_text h3").css('transition','7s')
});

// 중앙 모듈 메뉴 우에서 좌로 이동
$(document).ready(function(){
    $(".pc_main_first_module").css('opacity','1');
    $(".pc_main_first_module").css({"-webkit-transform":"translate(-50%,15%)"}); 
    $(".pc_main_first_module").css('transition','5s')
});
},4000)





