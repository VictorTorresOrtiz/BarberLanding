'use strict'
//Voy a customizar los links dandole un efecto smooth al pulsar llamando a la funcion smoothscroll

(function ($) {

    //Plantar puldar link y dejar el menu arriba

      $('.smoothscroll').click(function(){
        let el = $(this).attr('href');
        let elWrapped = $(el);
        let header_height = $('.navbar').height();
    
        scrollToDiv(elWrapped,header_height);
        return false;
    
        function scrollToDiv(element,navheight){
          let offset = element.offset();
          let offsetTop = offset.top;
          let totalScroll = offsetTop-navheight;
    
          $('body,html').animate({
          scrollTop: totalScroll
          }, 300);//Tiempo TESTEAR
        }
      });
    
    })(window.jQuery);