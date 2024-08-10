import "./header/header.js";

$(".main-slider").slick({
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnFocus: true,
  pauseOnHover: true,
  fade: true,
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
        arrows: false,
        autoplay: false,
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

mbs.slick({
  dots: true,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnFocus: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        autoplay: false,
      },
    },
  ],
});

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  const categorySidebar = document.querySelector(".category-sideBar");
  // 2250
  if (scrollY >= 2200) {
    categorySidebar.classList.add("fixed");
    if (scrollY >= 6000) categorySidebar.classList.remove("fixed");
  } else categorySidebar.classList.remove("fixed");
});

// section event
// const sections = document.querySelectorAll("section");

// window.addEventListener("scroll", function () {
//   let Scroll = this.scrollY;

//   sections.forEach((section) => {
//     if (Scroll >= section.offsetHeight - this.window.innerHeight / 5) {
//       section.classList.add("active");
//     }
//   });
// });


//wishlist event 
// import {pageFrame, myPages} from "./my.js";
// const wishlistShortcut = document.querySelector(".icon-menu .item:last-child");
// console.log(wishlistShortcut);
// wishlistShortcut.addEventListener("click", (e) => {
//   e.preventDefault();
//   pageFrame.setAttribute("src", myPages[1]);
// })