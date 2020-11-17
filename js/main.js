$(".navi1").on('click',function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
})

//////////////////////////////////////////////////////////////////////////

$('.page-indicator > ul > li > a').click(function(e) {
    var href = $(this).attr('href');
    
    var targetTop = $(href).offset().top;
    
    
    $('html').stop().animate({scrollTop:targetTop}, 300);
    
    e.preventDefault();
});

function Page__updateIndicatorActive() {
    var scrollTop = $(window).scrollTop();
    

    $($('.page').get().reverse()).each(function(index, node) {
        var $node = $(this);
        var offsetTop = parseInt($node.attr('data-offset-top'));
        
        if ( scrollTop >= offsetTop ) {

            $('.page-indicator > ul > li > a.active').removeClass('active');

            
            var currentPageIndex = $node.index();
            $('.page-indicator > ul > li > a').eq(currentPageIndex).addClass('active');
            
            $('html').attr('data-current-page-index', currentPageIndex);
            
            return false;
        }
    });
}

function Page__updateOffsetTop() {
    
    $('.page').each(function(index, node) {
        var $page = $(node);
        var offsetTop = $page.offset().top;
        
        $page.attr('data-offset-top', offsetTop);
    });
    
    Page__updateIndicatorActive();
}

function Page__init() {
    Page__updateOffsetTop();
}

Page__init();

$(window).resize(Page__updateOffsetTop);

$(window).scroll(Page__updateIndicatorActive);

//////////////////////////////////////////////////////////////////////////

$(function(){
  var navi1 = $('.navi1_1');
  var navi2 = $('.navi1_2');
  var navi3 = $('.navi1_3');

  var profile = $('#profile');
  var afterEffects = $('#AfterEffects_box');
  var premier = $('#premier_box');

  var profileOffsetTop = profile.offset().top;
  var afterEffectsOffsetTop = afterEffects.offset().top;
  var premierOffsetTop = premier.offset().top;


  $(window).resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
    profileOffsetTop = profile.offset().top;
    afterEffectsOffsetTop = afterEffects.offset().top;
    premierOffsetTop = premier.offset().top;

  });

        $(window).on('scroll', function(){
            if($(window).scrollTop() >= profileOffsetTop) {
                navi1.addClass('active');
                navi2.removeClass('active');
                $('.page-indicator').css('display','none');
                if($(window).scrollTop() >= afterEffectsOffsetTop){
                    navi2.addClass('active');
                    navi1.removeClass('active');
                    navi3.removeClass('active');
                    $('.page-indicator').css('display','none');
                    if($(window).scrollTop() >= premierOffsetTop){
                        $('.page-indicator').css('display','block');
                        navi3.addClass('active');
                        navi2.removeClass('active');
                    }
                }
            } else {
                navi1.removeClass('active');
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

