/*SERVICIOS BUTTON*/
$(document).ready(function() {
  $('#s_button').click(function() {
    $('*').animate(
      {
        scrollTop: $('#servicios').offset().top
      },
      1700
    );
  });
});

/*CONTACT BUTTON*/
$(document).ready(function() {
  $('#c_button').click(function() {
    $('*').animate(
      {
        scrollTop: $('#contacto').offset().top
      },
      1700
    );
  });
});

/*TOP BUTTONS MOBILE*/
/*SERVICIOS BUTTON*/
$(document).ready(function() {
  $('#s_button2').click(function() {
    $('html,body').animate(
      {
        scrollTop: $('#servicios').offset().top
      },
      1700
    );
  });
});

/*CONTACT BUTTON*/
$(document).ready(function() {
  $('#c_button2').click(function() {
    $('html,body').animate(
      {
        scrollTop: $('#contacto').offset().top
      },
      1700
    );
  });
});

/*'NOSOTROS' MENU LINK*/
$(document).ready(function() {
  $('#Nosotros').click(function() {
    $('body, html').animate(
      {
        scrollTop: $('#nosotros').offset().top
      },
      1700
    );
  });
});

/*'SERVICIOS' MENU LINK*/
$(document).ready(function() {
  $('#Servicios').click(function() {
    $('body, html').animate(
      {
        scrollTop: $('#servicios').offset().top
      },
      1700
    );
  });
});

/*'PORTAFOLIO' MENU LINK*/
$(document).ready(function() {
  $('#Portafolio').click(function() {
    $('body, html').animate(
      {
        scrollTop: $('#portafolio').offset().top
      },
      1700
    );
  });
});

/*'CONTACTO' MENU LINK*/
$(document).ready(function() {
  $('#Contacto').click(function() {
    $('body, html').animate(
      {
        scrollTop: $('#contacto').offset().top
      },
      1700
    );
  });
});

/*BACK TO TOP BUTTON*/
$(document).ready(function() {
  $('.top').click(function() {
    $('*').animate(
      {
        scrollTop: '0px'
      },
      1700
    );
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.top').slideDown(0);
    } else {
      $('.top').slideUp(0);
    }
  });
});

/*BACK TO TOP BUTTON mobile*/
$(document).ready(function() {
  $('.top2').click(function() {
    $('body').animate(
      {
        scrollTop: '0px'
      },
      1700
    );
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.top2').slideDown(0);
    } else {
      $('.top2').slideUp(0);
    }
  });
});

/*VALIDA EL NÃšMERO DE TELÃ‰FONO*/
function justNumbers(e) {
  var keynum = window.event ? window.event.keyCode : e.which;
  if (keynum == 8 || keynum == 46) return true;

  return /\d/.test(String.fromCharCode(keynum));
}

/*THIS SHOWS AND HIDES MENU ITEMS*/
$(document).ready(function() {
  $('.hamburguer-btn .fa-times').hide();

  $('.hamburguer-btn .fa-bars').click(function() {
    $(this).hide();
    $('.hamburguer-btn .fa-times').show();
    $('.mobile_menu li a').addClass('active');
  });

  $('.hamburguer-btn .fa-times').click(function() {
    $(this).hide();
    $('.hamburguer-btn .fa-bars').show();
    $('.mobile_menu li a').removeClass('active');
  });

  /*cierra automaticamente menu luego de hacer clic en un enlace*/
  $('.mobile_menu').click(function() {
    $(this).hide();
    $('.hamburguer-btn .fa-bars').show();
    $('.hamburguer-btn .fa-times').hide();
  });

  $('.hamburguer-btn .fa-bars').click(function() {
    $(this).hide();
    $('.hamburguer-btn .fa-times').show();
    $('.mobile_menu').show();
  });

  $('.hamburguer-btn .fa-times').click(function() {
    $(this).hide();
    $('.hamburguer-btn .fa-bars').show();
    $('.mobile_menu').hide();
  });
});

/*reCaptcha*/

function submitUserForm() {
  var response = grecaptcha.getResponse();
  if (response.length == 0) {
    document.getElementById('g-recaptcha-error').innerHTML =
      '<span style="color:red;">This field is required.</span>';
    return false;
  }
  return true;
}

function verifyCaptcha() {
  document.getElementById('g-recaptcha-error').innerHTML = '';
}


/*desactiva scroll horizontal*/
$(function() {

    var $body = $(document);
    $body.bind('scroll', function() {
        // "Desactivar" el scroll horizontal
        if ($body.scrollLeft() !== 0) {
            $body.scrollLeft(0);
        }
    });

}); 
