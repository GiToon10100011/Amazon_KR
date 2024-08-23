// 해당 파일은 아마존코리아의 메인 스크립트 파일입니다.
// This is the main script file of our Amazon.KR website.

// Import Header
import "./header/header.js";

//Slick Sliders
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

    let cateItems = {
      cateImgs: [],
      cateDescs: [],
      catePrices: [],
    };

    let catePages = {};

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

    console.log(cateFilters[0][0].category);

    //Create URL for each items
    categorySections.forEach((section, index) => {
      const categoryItems = section.querySelectorAll(".inner .content .item");
      categoryItems.forEach((item, i) => {
        item.style.cursor = "pointer";
        item.addEventListener("click", (e) => {
          console.log(e);
          const url = `./detail/detail.html?category=${
            cateFilters[index][i].category
          }&name=${encodeURIComponent(cateFilters[index][i].name)}`;
          console.log(url);
          window.location.href = url;
        });
      });
    });

    // Import Data to the category sections
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

    //Change the items per page
    const pageIndex = document.querySelectorAll(".pageIndex");

    for (let i = 1; i < pageIndex.length + 1; i++) {
      catePages[`catePage${i}`] = `input[name = "cate${i}"]`;
    }

    let cateRadios = [];

    pageIndex.forEach((page, i) => {
      cateRadios.push(page.querySelectorAll(catePages[`catePage${i + 1}`]));
    });

    const changeCatePageItems = (currentIdx, itemIdx1, itemIdx2, itemIdx3) => {
      document
        .querySelectorAll(cateItems.cateImgs[`cateImgs${currentIdx + 1}`])
        .forEach((img) => {
          img.setAttribute(
            "src",
            cateFilters[currentIdx][itemIdx1]["image-url"]
          );

          const url = `./detail/detail.html?category=${
            cateFilters[currentIdx][itemIdx1].category
          }&name=${encodeURIComponent(cateFilters[currentIdx][itemIdx1].name)}`;
          console.log(url);

          itemIdx1++;
        });
      document
        .querySelectorAll(cateItems.cateDescs[`cateDescs${currentIdx + 1}`])
        .forEach((desc) => {
          desc.innerText = cateFilters[currentIdx][itemIdx2]["name"];
          itemIdx2++;
        });
      document
        .querySelectorAll(cateItems.catePrices[`catePrices${currentIdx + 1}`])
        .forEach((price) => {
          price.innerText = `${cateFilters[currentIdx][itemIdx3]["price"]}원`;
          itemIdx3++;
        });
    };

    cateRadios.forEach((cateRadio, index) => {
      cateRadio.forEach((radio) => {
        radio.addEventListener("change", (e) => {
          const secondPageIndex = document.querySelectorAll(
            cateItems.cateImgs.cateImgs1
          );
          const thirdPageIndex =
            document.querySelectorAll(cateItems.cateImgs.cateImgs1).length +
            secondPageIndex.length;

          let [secondPageIndex1, secondPageIndex2, secondPageIndex3] = [
            secondPageIndex.length,
            secondPageIndex.length,
            secondPageIndex.length,
          ];

          let [thirdPageIndex1, thirdPageIndex2, thirdPageIndex3] = [
            thirdPageIndex,
            thirdPageIndex,
            thirdPageIndex,
          ];

          if (e.target.id.includes("second")) {
            changeCatePageItems(
              index,
              secondPageIndex1,
              secondPageIndex2,
              secondPageIndex3
            );
          } else if (e.target.id.includes("third")) {
            changeCatePageItems(
              index,
              thirdPageIndex1,
              thirdPageIndex2,
              thirdPageIndex3
            );
          } else {
            changeCatePageItems(index, 0, 0, 0);
          }
        });
      });
    });

    //Import data to mbb slider

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

//Category sidebar event
const categorySidetabs = document.querySelectorAll(
  ".category-sideBar ul li:not(:last-child)"
);

const categorySections = document.querySelectorAll("#category-best");

categorySidetabs.forEach((tab, index, arr) => {
  tab.addEventListener("click", () => {
    arr.forEach((el, i) => {
      if (index !== i) {
        el.classList.remove("active");
      } else {
        el.classList.add("active");
      }
    });
  });
});

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    const index = Array.from(categorySections).indexOf(entry.target);
    if (entry.isIntersecting) {
      categorySidetabs.forEach((tab, i) => {
        if (i === index) {
          tab.classList.add("active");
        } else {
          tab.classList.remove("active");
        }
      });
    }
  });
};

// Options for the observer
const options = {
  root: null, // null means the viewport
  rootMargin: "0px 0px 10% 0px",
  threshold: 1, // 0.1 means 10% of the section needs to be visible
};

const observer = new IntersectionObserver(handleIntersection, options);

categorySections.forEach((section) => {
  observer.observe(section);
});

//wishlist event
// import {pageFrame, myPages} from "./my.js";
// const wishlistShortcut = document.querySelector(".icon-menu .item:last-child");
// console.log(wishlistShortcut);
// wishlistShortcut.addEventListener("click", (e) => {
//   e.preventDefault();
//   pageFrame.setAttribute("src", myPages[1]);
// })
