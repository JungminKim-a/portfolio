$(".navi1").on('click',function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
})
$(function(){
  var navi1 = $('.navi1_1');
  var navi2 = $('.navi1_2');
  var navi3 = $('.navi1_3');

  var navi2_1 = $('.navi2_1');
  var navi2_2 = $('.navi2_2');
  var navi2_3 = $('.navi2_3')

  var profile = $('#profile');
  var afterEffects = $('#AfterEffects_box');
  var premier = $('#premier_box');

  var a = $('#a');
  var b = $('#b');
  var c = $('#c');
   //색상이 변할 부분
  var profileOffsetTop = profile.offset().top;
  var afterEffectsOffsetTop = afterEffects.offset().top;
  var premierOffsetTop = premier.offset().top;

  var aOffsetTop = a.offset().top;
  var bOffsetTop = b.offset().top;
  var cOffsetTop = c.offset().top;
   //색상 변할 부분의 top값 구하기

  $(window).resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    profileOffsetTop = profile.offset().top;
    afterEffectsOffsetTop = afterEffects.offset().top;
    premierOffsetTop = premier.offset().top;

    aOffsetTop = a.offset().top;
    bOffsetTop = b.offset().top;
    cOffsetTop = c.offset().top;
  });
  
    // $(window).on('scroll', function(){
    //     if($(window).scrollTop() >= profileOffsetTop) { // 스크롤이 page보다 밑에 내려가면
    //         if($(window).scrollTop() >= afterEffectsOffsetTop){
    //             if($(window).scrollTop() >= premierOffsetTop){
    //                 navi3.addClass('active');
    //             }else{
    //                navi3.removeClass('active'); 
    //             }                    
    //             navi2.addClass('active');
    //         }else{
    //             navi2.removeClass('active');
    //         }
    //         navi1.addClass('active'); //클래스 추가
    //     } else { // 스크롤 올릴 때
    //         navi1.removeClass('active'); //클래스 제거
    //     }
    // });

        $(window).on('scroll', function(){
            if($(window).scrollTop() >= profileOffsetTop) {
                navi1.addClass('active');
                navi2.removeClass('active');
                $('#navi2').css('display','none');
                if($(window).scrollTop() >= afterEffectsOffsetTop){
                    navi2.addClass('active');
                    navi1.removeClass('active');
                    navi3.removeClass('active');
                    $('#navi2').css('display','none');
                    if($(window).scrollTop() >= premierOffsetTop){
                        $('#navi2').css('display','block');
                        navi3.addClass('active');
                        navi2.removeClass('active');
                    }
                }
            } else {
                navi1.removeClass('active');
            }
        });

        $(window).on('scroll', function(){
            if($(window).scrollTop() >= aOffsetTop) {
                navi2_1.addClass('active');
                navi2_2.removeClass('active');
                if($(window).scrollTop() >= bOffsetTop){
                    navi2_2.addClass('active');
                    navi2_1.removeClass('active');
                    navi2_3.removeClass('active');
                    if($(window).scrollTop() >= cOffsetTop){
                        navi2_3.addClass('active');
                        navi2_2.removeClass('active');
                    }
                }
            } else {
                navi2_1.removeClass('active');
            }
        });

});

$('#AfterEffects li').on('click',function(){
    $('#pop').css('display','block');
    $('.pop').css('display','block');
    var imgNum = $(this).index()+1;
    var colorNum = [
    'rgb(218, 65, 64, 0.7)',
    'rgb(246, 173, 26, 0.9)',
    'rgb(101, 132, 194,0.6)',   
    'rgb(106, 165, 214, 0.6)',    
    'rgb(254, 195, 89, 0.9)',
    'rgb(0, 89, 65, 0.7)',
    'rgb(33, 33, 33,0.5)',
    'rgb(249, 85, 54, 0.8)'];


    $('.pop img').attr('src','./img/project/'+ imgNum +'.gif');
    $('.pop .pop_txt'+imgNum+',.pop .pop_title'+imgNum).css('display','block');
    $('.pop .pop_txt_bg span').css('background','linear-gradient(to top, '+colorNum[imgNum-1]+' 50%, transparent 50%)');
})


$(".pop_x, #pop").on('click',function(){
    $('#pop').css('display','none');
    $('.pop .pop_txt,.pop .pop_title').css('display','none');
})

$(".pop_x").mouseover(function(){
    $(this).css('color','#1e1e1e');
})
$(".pop_x").mouseout(function(){
    $(this).css('color','#cdc9c3');
})


$('#AfterEffects li img').mouseover(function(){
  var imgSrc = $(this).attr('src');
        // $(this).attr( 'src', replace( '.png', '.gif' ) );
        var $t=$(this), txt =$t.attr('src');
         if (txt.indexOf('.gif')>-1) {
           txt=txt.replace('.gif','.png');
         } else {
           txt=txt.replace('.png','.gif');
         }
         $t.attr( 'src', txt );
});

$('#AfterEffects li img').mouseout(function(){
  var imgSrc = $(this).attr('src');
        // $(this).attr( 'src', replace( '.png', '.gif' ) );
        var $t=$(this), txt =$t.attr('src');
         if (txt.indexOf('.gif')>-1) {
           txt=txt.replace('.gif','.png');
         } else {
           txt=txt.replace('.png','.gif');
         }
         $t.attr( 'src', txt );
});
