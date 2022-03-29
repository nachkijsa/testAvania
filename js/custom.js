
$(window).on("load scroll",function(e){   
    var scroll = $(window).scrollTop();

    if (scroll >= 350) {
        $("body").addClass("scrolling"); 
    } else {
        $("body").removeClass("scrolling");
    }
});

 
$(document).ready(function(){  
    /*var $navbar_slide = $(".header .nav-main").clone();   
    $(".navbar-slide .inner").html($navbar_slide);*/

    $('.navbar-toggle, .nav-main li a').click(function () {
        $("html").toggleClass("nav-opened");
    });

    $("a.target").on('click', function(event) {
        event.preventDefault();
       var hash = this.hash;
  
      $('html, body').animate({
           scrollTop: $(hash).offset().top  
         }, 1000, function(){ 
      });
    });
   
   
    /*$("body").attr({
        "data-spy": "scroll",
        "data-target": ".scrollspy"
    }).scrollspy({
        offset:100
    }); */
 
   

  /*------------[Start] Menu  ------------*/

  
    var swiperbanner = new Swiper('.swiper-banner', {
        slidesPerView:1,
        spaceBetween:0, 
        speed:800,
        loop: true,
        observer: true,
        effect: 'fade',
        observeParents: true,
        watchOverflow: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination.banner",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next.banner',
            prevEl: '.swiper-button-prev.banner',
        }
     
    }); 

    var swiperguardian = new Swiper('.swiper-guardian', {
        slidesPerView:1,
        spaceBetween:20, 
        speed:800,
        loop: true,
        observer: true,
        effect: 'slide',
        observeParents: true,
        watchOverflow: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        pagination: {
        el: ".swiper-pagination.guardian",
        clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next.guardian',
            prevEl: '.swiper-button-prev.guardian',
        }
   
    }); 

    var swipernova = new Swiper('.swiper-nova', {
        slidesPerView:1,
        spaceBetween:20, 
        speed:800,
        loop: false,
        observer: true,
        effect: 'slide',
        observeParents: true,
        watchOverflow: true,
        /*autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },*/
        pagination: {
        el: ".swiper-pagination.nova",
        clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next.nova',
            prevEl: '.swiper-button-prev.nova',
        }, 
        breakpoints: { 
            1500: {
                slidesPerView: 2,  
                spaceBetween:40,  
            },
            700: {
                slidesPerView: 2,  
                spaceBetween:25,  
            },
            700: {
                slidesPerView: 2,  
                spaceBetween:30,  
            }, 
            0: {
                slidesPerView: 1,  
                spaceBetween: 20,  
            }, 
        },
   
    }); 
 
 
});

 
$(window).on("load", function() {
   
  $(".preload").fadeOut();

  setTimeout(function () {
     $("html").addClass("page-loaded");
  }, 500);
   
 
  var isMobile = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
  };

  if(isMobile.any()) {
      $("html").addClass("device");  
  }else{
      $("html").addClass("pc");    
  }
   

  var ua = window.navigator.userAgent;
  var isIE = /MSIE|Trident/.test(ua);

  if ( isIE ) {
     $("html").addClass("ie");
  }
  
  $('.modal').on("hidden.bs.modal", function (e) {
      if ($('.modal:visible').length) { 
          $('body').addClass('modal-open'); 
      }
  });

  
  $('img.svg-js').each(function() {
      var $img = jQuery(this);
      var imgURL = $img.attr('src');
      var attributes = $img.prop("attributes");

      $.get(imgURL, function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = jQuery(data).find('svg');

          // Remove any invalid XML tags
          $svg = $svg.removeAttr('xmlns:a');

          // Loop through IMG attributes and apply on SVG
          $.each(attributes, function() {
              $svg.attr(this.name, this.value);
          });

          // Replace IMG with SVG
          $img.replaceWith($svg);
      }, 'xml');
  });
});

 
/*------------[Start] Height [vh] ------------*/

let vh_static = window.innerHeight * 0.01; 
document.documentElement.style.setProperty('--vhs', `${vh_static}px`);

let vh = window.innerHeight * 0.01; 
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
