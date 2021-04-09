// 1.햄버거 화살표 클릭 하면 x모양으로 바뀌고 모달창 열림
// 2. 바뀐 x모양을 누르면 모달창 닫기

// 햄버거 열기 닫기
let count = 1;
$(".hambuger_icon").click(function(){
    // 클릭한 횟수가 홀수이면 열리고 짝수면 닫히기
    if(1 === (count % 2) ){
    $(this).children(".line_1").css({"-webkit-transform":"rotateZ(405deg) translate(2px,5px)"});
    $(this).children(".line_2").css('opacity','0');
    $(this).children(".line_3").css({"-webkit-transform":"rotateZ(-45deg) translate(4px,-6px)"});
    $(".ham_open").css('left','0%');
    count++;

   }else{
    $(this).children(".line_1").css({"-webkit-transform":"rotateZ(0deg) translate(0px,0px)"});
    $(this).children(".line_2").css('opacity','1');
    $(this).children(".line_3").css({"-webkit-transform":"rotateZ(0deg) translate(0px,0px)"});
    $(".ham_open").css('left','-50%');
    count++;
    
   }
   
});
