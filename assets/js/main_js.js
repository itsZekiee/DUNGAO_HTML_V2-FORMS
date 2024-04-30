$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:3
      }
    },
    onTranslated: function(event) {
      var $activeCard = $(event.target).find('.owl-item.active.slider-card');
      $activeCard.addClass('active');
      setTimeout(function() {
        $activeCard.removeClass('active');
      }, 300); 
    }
  });

  const dateInput = document.getElementById('date');
  const today = new Date();
  const minDate = today.toISOString().split('T')[0];

  dateInput.min = minDate;
});