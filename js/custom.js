// team slider part start
$('.team-slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autospeed: 5000,
  slidesToShow: 5,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// team slider part end

// test slider part start
$('.test-slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      }
    },
     {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// test slider part end