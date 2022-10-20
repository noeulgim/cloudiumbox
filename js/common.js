$(function(){
  $(window).scroll(function(){
    var wHeight = $(this).height();
    var thisScrollTop = $(this).scrollTop();
    if( thisScrollTop > 0 ) {
      $('#header-wrap').css('border-bottom','1px solid #eee');
    }else if( thisScrollTop == 0 ) {
      $('#header-wrap').css('border-bottom','none');
    }
  });
});
