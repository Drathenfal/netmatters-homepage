//partners carousel

$(document).ready(function(){
    $('.partners-carousel').slick({
       autoplay: true,
       autoplaySpeed: 2000,
       dots: false,
       arrows: false,
       infinite: true,
       speed: 500,
       slidesToShow: 8,
       slidesToScroll: 1,
       responsive: [
        {
          breakpoint: 320, 
          settings: {
            slidesToShow: 1 
          }
        },
        {
          breakpoint: 480, 
          settings: {
            slidesToShow: 1 
          }
        },
        {
          breakpoint: 600, 
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 760, 
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 990, 
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 1260, 
          settings: {
            slidesToShow: 5
          }
        }
      ]
    });
 });