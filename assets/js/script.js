$(document).ready(function() {
  $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
  });
  // Scrolling Effect
//   When a scroll is detected it gives the transparent navbar a black background
  
  $(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }
  
    else {
          $('nav').removeClass('black');
    }
  })
});
