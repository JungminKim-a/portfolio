$(".navi").on('click',function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
})

$('#motion li').on('click',function(){
    $('#pop').css('display','block');
    var imgNum = $(this).index()+1;
    var colorNum = [
    'rgb(246, 173, 26, 0.9)',
    'rgb(101, 132, 194,0.8)',
    'rgb(50, 84, 129, 0.6)',
    'rgb(218, 65, 64, 0.9)',
    'rgb(254, 195, 89, 0.9)',
    'rgb(0, 89, 65, 0.7)',
    'rgb(33, 33, 33,0.5)',
    'rgb(249, 85, 54, 0.8)'];


    $('#pop img').attr('src','./img/project/'+ imgNum +'.gif');
    $('.pop_txt'+imgNum+', .pop_title'+imgNum).css('display','block');
    $('.pop_txt_bg span').css('background','linear-gradient(to top, '+colorNum[imgNum-1]+' 50%, transparent 50%)');
})
$(".pop_x, #pop").on('click',function(){
    $('#pop').css('display','none');
    $('.pop_txt, .pop_title').css('display','none');
})
$(".pop_x").mouseover(function(){
    $(this).css('color','#1e1e1e');
})
$(".pop_x").mouseout(function(){
    $(this).css('color','#cdc9c3');
})


$('#motion li img').mouseover(function(){
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

$('#motion li img').mouseout(function(){
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

$('#afterEffects li').on('click',function(){
    $('#pop2').css('display','block');
})
