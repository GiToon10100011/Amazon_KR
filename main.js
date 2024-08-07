import "./header/header.js";

$(".main-slider").slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
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
      breakpoint: 1100,
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
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 578,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

const mbs = $(".mid-banner-slider");
const itemElem = $(".mid-banner-slider.slider .item");
$("#cate1-count").html(
  "<span class='now'>1</span><span> / " + itemElem.length + "</span>"
);

mbs.slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
});

mbs.on(
  "init reInit beforeChange afterChange",
  function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $("#cate1-count").html(
      "<span class='now'>" +
        i +
        "</span><span> / " +
        slick.slideCount +
        "</span>"
    );
  }
);
