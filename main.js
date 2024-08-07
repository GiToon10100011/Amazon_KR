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
