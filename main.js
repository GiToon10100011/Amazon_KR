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
        arrows: false,
        fade: false,
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

// Scroll events
const promotionSection = document.querySelector(".promotions-items ul");
const eventSection = document.querySelector(".event-slider-wrap");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  const categorySidebar = document.querySelector(".category-sideBar");
  // 2250
  if (scrollY >= 2200) {
    categorySidebar.classList.add("fixed");
    if (scrollY >= 6000) categorySidebar.classList.remove("fixed");
  } else categorySidebar.classList.remove("fixed");

  if (scrollY >= promotionSection.offsetHeight - window.innerHeight / 5) {
    promotionSection.classList.add("active");
  }
  if (scrollY >= 1400) {
    eventSection.classList.add("active");
  }
});

//wishlist event
// import {pageFrame, myPages} from "./my.js";
// const wishlistShortcut = document.querySelector(".icon-menu .item:last-child");
// console.log(wishlistShortcut);
// wishlistShortcut.addEventListener("click", (e) => {
//   e.preventDefault();
//   pageFrame.setAttribute("src", myPages[1]);
// })

//json
const productInfo = "./data.json";
fetch(productInfo)
  .then((response) => response.json())
  .then((data) => {
    let idGenerator = Date.now();
    const products = {
      data: data.data.map((item) => ({
        ...item,
        price: new Intl.NumberFormat("ko-kr", {
          style: "currency",
          currency: "KRW",
        }).format(item.price),
        id: idGenerator++,
      })),
    };

    console.log(products);

    let cateItems = {
      cateImgs: [],
      cateDescs: [],
      catePrices: [],
    };

    for (let i = 1; i <= 6; i++) {
      cateItems.cateImgs[
        `cateImgs${i}`
      ] = `#mid-banner-slider-wrap:has(#cate${i}-count) + .content .item img`;
      cateItems.cateDescs[
        `cateDescs${i}`
      ] = `#mid-banner-slider-wrap:has(#cate${i}-count) + .content .item .item-desc`;
      cateItems.catePrices[
        `catePrices${i}`
      ] = `#mid-banner-slider-wrap:has(#cate${i}-count) + .content .item .item-price`;
    }

    console.log(cateItems);

    //Data Filtering Process
    const filteredElectronics = products.data.filter((product) => {
      return product.category.includes("전자");
    });
    const filteredBeauty = products.data.filter((product) => {
      return product.category.includes("뷰티 및 퍼스널케어");
    });
    const filteredHome = products.data.filter((product) => {
      return (
        product.category.includes("가정 및 주방") ||
        product.category.includes("유아") ||
        product.category.includes("아동용 의류")
      );
    });

    const filteredPets = products.data.filter((product) => {
      return product.category.includes("애왕동물 용품");
    });
    console.log(filteredPets);
    const filteredInterior = products.data.filter((product) => {
      return product.category.includes("가정 및 주방");
    });
    const filteredGames = products.data.filter((product) => {
      return product.category.includes("비디오 게임");
    });

    const cateFilters = [
      filteredElectronics,
      filteredBeauty,
      filteredHome,
      filteredPets,
      filteredInterior,
      filteredGames,
    ];

    cateFilters.forEach((filter, index) => {
      document
        .querySelectorAll(cateItems.cateImgs[`cateImgs${index + 1}`])
        .forEach((img, i) => {
          img.setAttribute("src", filter[i]["image-url"]);
        });
      document
        .querySelectorAll(cateItems.cateDescs[`cateDescs${index + 1}`])
        .forEach((desc, i) => {
          desc.innerText = filter[i]["name"];
        });
      document
        .querySelectorAll(cateItems.catePrices[`catePrices${index + 1}`])
        .forEach((price, i) => {
          price.innerText = `${filter[i]["price"]}원`;
        });
    });

    const filteredFashion = products.data.filter((product) => {
      return (
        product.category.includes("남성패션") ||
        product.category.includes("여성패션")
      );
    });

    const mbbItems = {
      brands: document.querySelectorAll("#mmb-slider-wrap .item .mbb-brands"),
      names: document.querySelectorAll("#mmb-slider-wrap .item .mbb-name"),
      prices: document.querySelectorAll("#mmb-slider-wrap .item .mbb-price"),
      imgs: document.querySelectorAll("#mmb-slider-wrap .item .img-box img"),
    };

    filteredFashion.forEach((filter, index) => {
      console.log(filter.detail.brands);
      mbbItems.brands[
        index
      ].innerHTML = `<strong>브랜드명 :</strong> ${filter.detail.brands}`;
      mbbItems.names[
        index
      ].innerHTML = `<strong>상품명 : </strong> ${filter.name}`;
      mbbItems.prices[
        index
      ].innerHTML = `<strong>가격 : </strong> ${filter.price}`;
      mbbItems.imgs[index].setAttribute("src", filter["image-url"]);
    });
  })
  .catch((error) => {
    console.log(error);
  });
