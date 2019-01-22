
$(document).ready(function(){

    $('.menu').click(function(){
        $('.list').slideToggle();
    });

     $(window).resize(function(){
        if($(window).width() > 767) {
            $('.list').toggleClass('responsive-nav').css('display','');
        }
    });  

});
