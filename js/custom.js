'use strict'
//Loader
let myLoader;

function load() {
  myLoader = setTimeout(showPage, 900);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}
//Loader

//Scroll reveal
// Progressive show elements
jQuery(function () {
  $(window).on("scroll", function () {
      $(".hidden-content").each(function (i) {
          let underObject = $(this).offset().top + $(this).outerHeight();
          let underWindow = $(window).scrollTop() + $(window).height();

          if (underWindow > underObject) {
              $(this).animate({ opacity: "1" }, 750);
          }
      });
  });
});

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

//Indicar que el formulario no funciona
function sendError(){
  let nombre = document.getElementById('contact-name');
  let apellidos = document.getElementById('contact-surname');
  let telefono = document.getElementById('contact-mobile');
  let pelado = document.getElementById('contact-message');

  //Nombre
  let namePattern = "^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$";

  if (nombre.value == null | nombre.value== ''){
    $.iaoAlert({
      msg: "Tienes que reñenar el campo Nombre",
      type: "error",
      mode: "dark",
      autoHide: true,
      alertTime: "3000",
      fadeTime: "500",
      closeButton: true,
      closeOnClick: false,
      position: 'top-right',
      fadeOnHover: true,
      roundedCorner: false,
    })
  } else if (nombre.value.match(namePattern) == '') {
    $.iaoAlert({
      msg: "Nombre invalido",
      type: "error",
      mode: "dark",
      autoHide: true,
      alertTime: "3000",
      fadeTime: "500",
      closeButton: true,
      closeOnClick: false,
      position: 'top-right',
      fadeOnHover: true,
      roundedCorner: false,
    })
  }

  //Apellidos
  if (apellidos.value == null | apellidos.value== ''){
    $.iaoAlert({
      msg: "Tienes que reñenar el campo Apellidos",
      type: "error",
      mode: "dark",
      autoHide: true,
      alertTime: "3000",
      fadeTime: "500",
      closeButton: true,
      closeOnClick: false,
      position: 'top-right',
      fadeOnHover: true,
      roundedCorner: false,
    })
  } else if (apellidos.value.match(namePattern) == '') {
    $.iaoAlert({
      msg: "Apellidos invalidos",
      type: "error",
      mode: "dark",
      autoHide: true,
      alertTime: "3000",
      fadeTime: "500",
      closeButton: true,
      closeOnClick: false,
      position: 'top-right',
      fadeOnHover: true,
      roundedCorner: false,
    })
  }

  //Telefono
  let mobilePattern = /^\d{3}\s\d{2}\s\d{2}\s\d{2}$/;

  if (telefono.value == null | telefono.value== ''){
    $.iaoAlert({
      msg: "Tienes que reñenar el campo telefono",
      type: "error",
      mode: "dark",
      autoHide: true,
      alertTime: "3000",
      fadeTime: "500",
      closeButton: true,
      closeOnClick: false,
      position: 'top-right',
      fadeOnHover: true,
      roundedCorner: false,
    })
  } else if (telefono.value.match(mobilePattern) == '') {
    $.iaoAlert({
      msg: "Telefono invalido",
      type: "error",
      mode: "dark",
      autoHide: true,
      alertTime: "3000",
      fadeTime: "500",
      closeButton: true,
      closeOnClick: false,
      position: 'top-right',
      fadeOnHover: true,
      roundedCorner: false,
    })
  }

  //Pelados
  if (pelado.value == null | pelado.value== ''){
    $.iaoAlert({
      msg: "Tienes que reñenar el campo Pelados",
      type: "error",
      mode: "dark",
      autoHide: true,
      alertTime: "3000",
      fadeTime: "500",
      closeButton: true,
      closeOnClick: false,
      position: 'top-right',
      fadeOnHover: true,
      roundedCorner: false,
    })
  } else if (pelado.value.match(namePattern) == '') {
    $.iaoAlert({
      msg: "Pelado invalido",
      type: "error",
      mode: "dark",
      autoHide: true,
      alertTime: "3000",
      fadeTime: "500",
      closeButton: true,
      closeOnClick: false,
      position: 'top-right',
      fadeOnHover: true,
      roundedCorner: false,
    })

    //Submit
    if (nombre.value !== null && nombre.value !== '' && nombre.value.match(namePattern) !== null && apellidos.value !== null && apellidos.value !== '' && apellidos.value.match(namePattern) !== null && telefono.value !== null && telefono.value  !== '' && telefono.value .match(mobilePattern) !== null && pelado.value !== null && pelado.value !== '' ){
      $.iaoAlert({
        msg: "El formulario no esta disponible en estos momentos",
        type: "warning",
        mode: "dark",
        autoHide: true,
        alertTime: "3000",
        fadeTime: "500",
        closeButton: true,
        closeOnClick: false,
        position: 'top-right',
        fadeOnHover: true,
        roundedCorner: false,
      })
    }
  }
}