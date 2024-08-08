import "./header/header.js";

$(".main-slider").slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
  ],
});
$(".event-slider").slick({
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$(".mbb-slider").slick({
  arrows: false,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

const mbs = $(".mid-banner-slider");
const itemElem = $(".mid-banner-slider.slider .item");
$("#cate1-count").html();

mbs.slick({
  dots: true,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnFocus: false,
  pauseOnHover: false,
});
