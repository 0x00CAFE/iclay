$(function(){
  AOS.init({
    offset: 100,
    duration: 600,
    delay: 100
  });

  $(window).resize(function() {
    if($(this).width() > 735){
        $('.image-overview-display').attr('data-aos', 'fade-up');
    }else{
        $('.image-overview-display').removeAttr('data-aos');
    }
  });
  
  $(window).resize();

  $(window).scroll(function() {
      var top = $(this).scrollTop();
      $('.image-overview-display-blurred').each(function(){
        if($(this).offset().top - top < 170){
          $(this).addClass('blur');
        }else{
          $(this).removeClass('blur');
        }
      });
  });
});