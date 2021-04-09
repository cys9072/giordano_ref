

// 쇼핑카트 열고 닫기 

let countt = 1;
$(".shpping_icon i:nth-child(3)").click(function(){
    // 클릭한 횟수가 홀수이면 열리고 짝수면 닫히기
    if(1 === (countt % 2) ){
    $(".shopping_open").css({"-webkit-transform":"translate(0,0)"});
    $(".shopping_open").css('opacity','1');
    countt++;

   }else{
    $(".shopping_open").css({"-webkit-transform":"translate(100%,0)"});
    $(".shopping_open").css('opacity','0');
    countt++;
    
   }
   
});

let counttt = 1;
$(".shpping_icon i:nth-child(2)").click(function(){
    // 클릭한 횟수가 홀수이면 열리고 짝수면 닫히기
    if(1 === (counttt % 2) ){
    $(".fav_open").css({"-webkit-transform":"translate(-3%,0)"});
    $(".fav_open").css('opacity','1');
    counttt++;

   }else{
    $(".fav_open").css({"-webkit-transform":"translate(100%,0)"});
    $(".fav_open").css('opacity','0');
    counttt++;
    
   }
   
});

let countttt = 1;
$(".shpping_icon i:nth-child(1)").click(function(){
    // 클릭한 횟수가 홀수이면 열리고 짝수면 닫히기
    if(1 === (countttt % 2) ){
    $(".login_open").css({"-webkit-transform":"translate(-5%,0)"});
    $(".login_open").css('opacity','1');
    countttt++;

   }else{
    $(".login_open").css({"-webkit-transform":"translate(100%,0)"});
    $(".login_open").css('opacity','0');
    countttt++;
    
   }
   
});