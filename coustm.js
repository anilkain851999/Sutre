$(".slick-carousel").slick({
  speed: 9000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  swipeToSlide: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3
      }
    },
{
  breakpoint: 786,
    settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              }
 },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$(".slick-carousel-rtl").slick({
  speed: 9000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 3,  
  slidesToScroll: 1,
  infinite: true,
  swipeToSlide: true,
  centerMode: true,
  focusOnSelect: true,
  rtl: true,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 3
      }
    },
    {
     breakpoint: 786,
    settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              }
 },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});



$('.owl-carousel').owlCarousel({
    speed:3000,
    autoplay:false,
    autoplaySpeed: 0,
    loop:true,
    margin:10,
    infinite: true,
  swipeToSlide: true,
    nav:true,
    navText : ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:1
        },
        1000:{
            items:2
        },
        1440:{
            items:2
        }
    }
})




$('.owl-carousel:not(".carousel-one")').owlCarousel({
    speed:3000,
    autoplay:false,
    autoplaySpeed: 0,
    loop:true,
    margin:10,
    infinite: true,
  swipeToSlide: true,
    nav:true,
    navText : ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>"],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:1
        },
        1000:{
            items:3
        },
        1440:{
            items:3
        }
    }
})






