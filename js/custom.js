'use strict'
//Voy a customizar los links dandole un efecto smooth al pulsar llamando a la funcion smoothscroll

//Loader
let myLoader;

function load() {
  myLoader = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}
//Loader

//Smooth scroll + cargar pagina con efecto fade
(function ($) {

    
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
          }, 700);//Tiempo TESTEAR
        }
      });
    
    })(window.jQuery);


//Parallax Effect
let box = $(document),
    bgAnimate = $('div.text-parallax');
box.on('scroll', function(){
    let boxAnimate = box.scrollTop();
    bgAnimate.css('background-position', '0' + -boxAnimate/4 + 'px');
});

