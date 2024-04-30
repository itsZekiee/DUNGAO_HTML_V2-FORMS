$(document).ready(function(){
    const formContainer = document.getElementById('reservation-form');
    const cuisineSelect = document.getElementById('cuisine');
    const subCuisineSelect = document.getElementById('sub-cuisine');
  
    cuisineSelect.addEventListener('change', () => {
      if (cuisineSelect.value === 'Western') {
        formContainer.classList.add('show-sub-cuisine');
      } else {
        formContainer.classList.remove('show-sub-cuisine');
      }
    });
  
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
  });