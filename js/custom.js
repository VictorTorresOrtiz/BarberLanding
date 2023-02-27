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

//Ubicación alert
function maps(){
  swal.fire({
    title: "Nuestro Local",
    html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.258712207464!2d-4.630609984447836!3d36.54787448956153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e2396ac6c917%3A0x73c4ed933c256b6e!2sPeluquer%C3%ADa%20Barber%C3%ADa%20Laclasse!5e0!3m2!1ses!2ses!4v1677508071883!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
   
  });
}

//Alerts Pelados
function corte1(){
  swal.fire({
    title: "Fade Clásico",
    icon: 'info',
    text: 'Corte Fade bajo empezando desde 0 hasta 1',
   
  })
}

function corte2(){
  swal.fire({
    title: "Fade con Coleta",
    icon: 'info',
    text: 'Corte largo con fade al 0,5 y linea en el medio',
   
  })
}

function corte3(){
  swal.fire({
    title: "Fade Texturizado",
    icon: 'info',
    text: 'Corte texturizado con fade al 0,5',
   
  })
}

function corte4(){
  swal.fire({
    title: "Fade Afro",
    icon: 'info',
    text: 'Corte afro con fade al 0,5',
   
  })
}


