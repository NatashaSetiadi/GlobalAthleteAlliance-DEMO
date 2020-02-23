
// $(window).scroll(function () {
//     var wScroll = $(this).scrollTop();
//   $('.headerText').css({
//      'transform' : 'translate(0px, -'+ wScroll /3 +'%)'
//    });
//    $('.headerTextSmall').css({
//        'transform' : 'translate(0px, -'+ wScroll /2 +'%)'
//    });

//    });
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });s
!function(e){"use strict";e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=e(this.hash);if((a=a.length?a:e("[name="+this.hash.slice(1)+"]")).length)return e("html, body")
    
    .animate({scrollTop:a.offset().top-70},1e3,"easeInOutExpo"),!1}}),e(".js-scroll-trigger").click(function(){e(".navbar-collapse").collapse("hide")}),e("body").scrollspy({target:"#mainNav",offset:100});
             
             var a=function(){100<e("#mainNav").offset().top?e("#mainNav").addClass("navbar-shrink"):e("#mainNav").removeClass("navbar-shrink")};a(),e(window).scroll(a)}(jQuery);
         
var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
    
