import "./header/header.js";

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    let idGenerator = Date.now();

    let wishlistItems = localStorage.getItem("wishlistItems")
      ? JSON.parse(localStorage.getItem("wishlistItems"))
      : [];

    const reviewSamples = [
      {
        reviewer: "홍길동",
        rating: 4,
        comment: "제품은 괜찮지만 더 나아질 수 있을 것 같아요.",
      },
      {
        reviewer: "김영희",
        rating: 5,
        comment: "품질이 아주 좋고 배송도 빨라요!",
      },
      {
        reviewer: "이민수",
        rating: 3,
        comment: "평범해요, 기대만큼은 아니네요.",
      },
      {
        reviewer: "박지훈",
        rating: 2,
        comment: "가격에 비해 별로예요.",
      },
      {
        reviewer: "정지연",
        rating: 5,
        comment: "정말 마음에 들어요! 강력 추천합니다.",
      },
      {
        reviewer: "최강석",
        rating: 4,
        comment: "가격 대비 품질이 좋아요.",
      },
      {
        reviewer: "김수진",
        rating: 1,
        comment: "최악의 경험이었어요. 다시는 구매하지 않을 겁니다.",
      },
      {
        reviewer: "오민재",
        rating: 5,
        comment: "완벽한 제품이에요, 딱 필요했던 거예요.",
      },
      {
        reviewer: "황진아",
        rating: 3,
        comment: "그냥 그래요, 더 나은 옵션들이 있네요.",
      },
      {
        reviewer: "조성민",
        rating: 2,
        comment: "품질에 실망했어요.",
      },
    ];

    function getRandomDate(startDate, endDate) {
      const start = new Date(startDate).getTime();
      const end = new Date(endDate).getTime();
      const randomTime = Math.random() * (end - start) + start;
      return new Date(randomTime).toISOString().split("T")[0]; //  Date 객체를 국제 표준 시간(UTC)으로 변환한 문자열을 반환 YYYY-MM-DD, T는 날짜와 시간의 구분자
    }

    const products = {
      data: data.data.map((item) => {
        // 랜덤으로 5~10개의 리뷰를 선택하여 추가
        const randomReviews = Array.from(
          { length: Math.floor(Math.random() * 6) + 5 },
          () => {
            const randomIndex = Math.floor(
              Math.random() * reviewSamples.length
            );
            return {
              ...reviewSamples[randomIndex],
              date: getRandomDate("2022-01-01", "2024-09-06"), // 날짜 범위 설정
            };
          }
        );

        return {
          ...item,
          price: new Intl.NumberFormat("ko-kr", {
            style: "currency",
            currency: "KRW",
          }).format(item.price),
          id: idGenerator++,
          reviews: randomReviews, // 랜덤 리뷰 추가
        };
      }),
    };

    console.log(products);

    //내장객체 함수를 통해 현 url의 파라미터를 가져옴
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const names = params.get("name");

    const product = products.data.find(
      (product) => product.category === category && product.name === names
    );

    //무한슬라이드
    const images = [
      product["image-url"],
      product.detail["more-img"][0],
      product.detail["more-img"][1],
    ]; // 이미지 경로들
    console.log(images);
    let currentIndex = 0;

    const mainImg = document.querySelector(".main_img");
    const btnLeft = document.querySelector(".mainBtn_L");
    const btnRight = document.querySelector(".mainBtn_R");

    // 초기 이미지 설정
    mainImg.style.backgroundImage = `url(${images[currentIndex]})`;

    function showImage(index) {
      mainImg.style.backgroundImage = `url(${images[index]})`;
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    function previousImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }

    btnRight.addEventListener("click", nextImage);
    btnLeft.addEventListener("click", previousImage);

    if (product) {
      const category = document.querySelector(".category_content");
      category.innerHTML = product.detail["category-path"];

      const productTitles = document.querySelectorAll(
        ".main_desc .product-name"
      );
      productTitles.forEach((title) => {
        title.innerText = product.name;
      });

      // //reviwe photo
      // const slideList = document.querySelector(".slied_list");
      // const slideItems = document.querySelectorAll(".slied_list li");
      // const slideBtnLeft = document.querySelector(".slide_btn_L");
      // const slideBtnRight = document.querySelector(".slide_btn_R");

      // slideItems.forEach((slideItem, i) => {
      //   console.log(slideItem);
      //   slideItem.querySelector(
      //     "a img"
      //   ).src = `${product.detail["more-img"][i]}`;
      // });
      // let currentOffset = 0;
      // const slideAmount = 125; // 슬라이드할 픽셀 수
      // const maxOffset =
      //   slideItems.length * slideAmount - slideList.parentElement.offsetWidth;

      // function updateSlidePosition() {
      //   slideList.style.transform = `translateX(${currentOffset}px)`;
      // }

      // slideBtnLeft.addEventListener("click", () => {
      //   if (currentOffset < 0) {
      //     currentOffset += slideAmount;
      //   } else {
      //     currentOffset = -maxOffset; // 첫 번째 슬라이드에서 마지막 슬라이드로 이동
      //   }
      //   updateSlidePosition();
      // });

      // slideBtnRight.addEventListener("click", () => {
      //   if (Math.abs(currentOffset) < maxOffset) {
      //     currentOffset -= slideAmount;
      //   } else {
      //     currentOffset = 0; // 마지막 슬라이드에서 첫 번째 슬라이드로 이동
      //   }
      //   updateSlidePosition();
      // });

      const slideList = document.querySelector(".slied_list");
      const slideItems = document.querySelectorAll(".slied_list li");
      const slideBtnLeft = document.querySelector(".slide_btn_L");
      const slideBtnRight = document.querySelector(".slide_btn_R");

      // 이미지 슬라이드 설정
      slideItems.forEach((slideItem, i) => {
        console.log(slideItem);
        slideItem.querySelector(
          "a img"
        ).src = `${product.detail["more-img"][i]}`;
      });

      // 무작위로 두 개의 이미지 선택 및 추가
      for (let j = 0; j < 2; j++) {
        const randomIndex = Math.floor(
          Math.random() * product.detail["more-img"].length
        );
        const randomImage = product.detail["more-img"][randomIndex];
        const lastSlideItem = document.createElement("li");
        const lastSlideLink = document.createElement("a");
        const lastSlideImg = document.createElement("img");

        lastSlideLink.href = "#none"; // 링크 설정
        lastSlideImg.src = randomImage; // 무작위로 선택된 이미지 경로 설정
        lastSlideImg.alt = `randomImg${j + 1}`; // 대체 텍스트 설정

        lastSlideLink.appendChild(lastSlideImg); // 링크에 이미지 추가
        lastSlideItem.appendChild(lastSlideLink); // 리스트 항목에 링크 추가
        slideList.appendChild(lastSlideItem); // 슬라이드 목록에 리스트 항목 추가
      }

      // 슬라이드 이동 설정
      let currentOffset = 0;
      const slideAmount = 125; // 슬라이드할 픽셀 수
      const maxOffset =
        (slideItems.length + 2) * slideAmount -
        slideList.parentElement.offsetWidth; // maxOffset을 무작위 이미지 포함하도록 조정

      function updateSlidePosition() {
        slideList.style.transform = `translateX(${currentOffset}px)`;
      }

      // 왼쪽 버튼 클릭 이벤트 핸들러
      slideBtnLeft.addEventListener("click", () => {
        if (currentOffset < 0) {
          currentOffset += slideAmount;
        } else {
          currentOffset = -maxOffset; // 첫 번째 슬라이드에서 마지막 슬라이드로 이동
        }
        updateSlidePosition();
      });

      // 오른쪽 버튼 클릭 이벤트 핸들러
      slideBtnRight.addEventListener("click", () => {
        if (Math.abs(currentOffset) < maxOffset) {
          currentOffset -= slideAmount;
        } else {
          currentOffset = 0; // 마지막 슬라이드에서 첫 번째 슬라이드로 이동
        }
        updateSlidePosition();
      });

      //버튼 click 시 금액 변경
      const prices = document.querySelectorAll(".amount .price");
      prices.forEach((price) => {
        const currency = document.createElement("span");
        currency.textContent = product.detail.currency;
        currency.style.color = "#333";
        currency.style.fontSize = "16px";

        // 첫 가격 설정
        price.innerHTML = `${product.price} `; // 금액
        price.appendChild(currency); // 통화 기호 추가

        const minus = document.querySelector(".button_minus");
        const plus = document.querySelector(".button_plus");
        const result = document.querySelector(".count_result");
        let i = 1;

        console.log(product.price);

        const updatePriceDisplay = () => {
          // 숫자만 추출하여 가격 계산
          const priceValue = parseFloat(
            product.price.replace(/[^0-9.-]+/g, "")
          ); // 숫자만 남기기
          console.log(priceValue);

          if (!isNaN(priceValue)) {
            const totalPrice = priceValue * i;
            price.innerHTML = `${totalPrice.toLocaleString()}`; // 천단위 구분 추가
            price.appendChild(currency); // 통화 기호 추가
          } else {
            console.error("금액을 처리할 수 없습니다.");
          }
        };

        plus.addEventListener("click", () => {
          i++;
          result.textContent = `${i}`;
          updatePriceDisplay();
        });

        minus.addEventListener("click", () => {
          if (i > 1) {
            i--;
            result.textContent = `${i}`;
            updatePriceDisplay();
          }
        });
      });

      const brands = document.querySelectorAll(".brand_heart");
      brands.forEach((brand) => {
        brand.innerHTML = `
        <a href="#none" class="brand_heart">
                  ${product.detail.brands}
                  <i id="fav" class="fa-solid fa-heart"></i>
                </a>
        `;
      });
      //like
      const likes = document.querySelectorAll("#fav");
      const bar_like = document.querySelector("#M_fav");

      likes[1].addEventListener("click", function () {
        this.classList.toggle("active");
        const wishlistItem = {
          name: product.name,
          price: product.price,
        };

        console.log(wishlistItem);

        // Check if the item is already in the wishlist
        const index = wishlistItems.findIndex(
          (item) => item.name === product.name && item.price === product.price
        );

        if (index === -1) {
          // If the item is not found (index is -1), add it to the wishlist
          wishlistItems.push(wishlistItem);
          this.classList.add("active");
        } else {
          // If the item is found, remove it from the wishlist
          wishlistItems.splice(index, 1); // Remove the item at the found index
          this.classList.remove("active");
        }
        localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
      });

      bar_like.addEventListener("click", () => {
        bar_like.classList.toggle("active");
      });

      const discounts = document.querySelectorAll(".amount .discount");
      discounts.forEach((discount) => {
        discount.innerHTML = product.detail.discount;
      });

      const pro_code = document.querySelector(".pro_code .code");
      pro_code.innerHTML = `상품번호 ${product.detail["product-num"]}`;

      const selecoptions = document.querySelectorAll(".selectoption");
      selecoptions.forEach((selecoption) => {
        const options = selecoption.querySelectorAll("#option");
        options.forEach((option, i) => {
          option.innerText = product.detail.options[i];
        });
      });

      const main_infoimgs = document.querySelectorAll(".img_area img");
      main_infoimgs.forEach((img, i) => {
        img.setAttribute("src", product.detail["more-img"][i]);
      });

      const ratings = document.querySelectorAll(".avg");
      ratings.forEach((rating) => {
        rating.innerHTML = product.detail.ratings;
      });

      const reviews = document.querySelectorAll(".title_txtr");
      reviews.forEach((review) => {
        review.innerHTML = `(${product.detail.reviews})`;
      });

      // console.log(randomNum);

      console.log(product);

      const reviewSection = document.querySelector(".user_reviw_warpper");

      product.reviews.forEach((review, index) => {
        const reviewItem = document.createElement("div");
        reviewItem.className = "reviw_userdetail";
        reviewItem.innerHTML = `
         <div class="reviw_profile">
                    <div class="user_img">
                      <span class="material-symbols-outlined"> person </span>
                    </div>
                    <div class="user_desc">
                      <span class="name">${review.reviewer}</span>
                      <div class="info">
                        <span class="gen">남/여</span>
                        <span class="age">25세</span>
                        <span class="nation">${review.date}</span>
                      </div>
                    </div>
                  </div>
                  <div class="reviw_star">
                  </div>
                  <div class="reviw_txt">
                    <p>
                      ${review.comment}
                    </p>
                  </div>
                  <div class="reviw_img_ic">
                    <div class="img">
                      <img src="${product.detail["more-img"][index]}" alt="img1" />
                    </div>
                  </div>
                  <div class="underline"></div>
        `;
        reviewSection.appendChild(reviewItem);
      });

      reviewSection.querySelectorAll(".reviw_star").forEach((star, index) => {
        const starUl = document.createElement("ul");
        for (let i = 1; i <= product.reviews[index].rating; i++) {
          const starLi = document.createElement("li");
          starLi.innerHTML = `<i class="fa-solid fa-star"></i>`;
          starUl.appendChild(starLi);
        }
        star.appendChild(starUl);
      });

      const productCategoryItems = products.data.filter((productCategory) =>
        productCategory.category.includes(product.category)
      );
      const productBrandItems = products.data.filter((productBrand) =>
        productBrand.detail.brands.includes(product.detail.brands)
      );
      console.log(productBrandItems);

      const ranIdxSet = new Set();

      const anothers = document.querySelectorAll(".same_brand .ap_desc");
      anothers.forEach((another, index) => {
        let ranIdx;

        ranIdx = Math.floor(Math.random(index) * productBrandItems.length);

        another
          .querySelector("img")
          .setAttribute("src", productBrandItems[ranIdx]["image-url"]);
        another.querySelector(".pro_brand").innerText =
          productBrandItems[ranIdx].detail.brands;
        another.querySelector(".pro_name").innerText =
          productBrandItems[ranIdx].name;
        another.querySelector(".pro_price").innerText =
          productBrandItems[ranIdx].price;
        another.addEventListener("click", () => {
          const url = `./detail.html?category=${productBrandItems[ranIdx].category}&name=${productBrandItems[ranIdx].name}`;
          location.href = url;
        });
      });

      const oatherBrands = document.querySelectorAll(".another_brand .ap_desc");
      oatherBrands.forEach((onather, index) => {
        let ranIdx;

        do {
          ranIdx = Math.floor(Math.random(index) * productCategoryItems.length);
        } while (ranIdxSet.has(ranIdx));

        ranIdxSet.add(ranIdx);

        onather
          .querySelector("img")
          .setAttribute("src", productCategoryItems[ranIdx]["image-url"]);
        onather.querySelector(".pro_brand").innerText =
          productCategoryItems[ranIdx].detail.brands;
        onather.querySelector(".pro_name").innerText =
          productCategoryItems[ranIdx].name;
        onather.querySelector(".pro_price").innerText =
          productCategoryItems[ranIdx].price;
        onather.addEventListener("click", () => {
          const url = `./detail.html?category=${productCategoryItems[ranIdx].category}&name=${productCategoryItems[ranIdx].name}`;
          location.href = url;
        });
      });

      const ratherBrands = document.querySelectorAll(
        ".another_Recommend .ap_desc"
      );

      console.log(ratherBrands);

      const ratherIdxSet = new Set();

      ratherBrands.forEach((rather, index) => {
        console.log(rather);

        let ranIdx;

        do {
          ranIdx = Math.floor(Math.random(index) * products.data.length);
        } while (ratherIdxSet.has(ranIdx));

        ratherIdxSet.add(ranIdx);

        rather
          .querySelector("img")
          .setAttribute("src", products.data[ranIdx]["image-url"]);
        rather.querySelector(".pro_brand").innerText =
          products.data[ranIdx].detail.brands;
        rather.querySelector(".pro_name").innerText =
          products.data[ranIdx].name;
        rather.querySelector(".pro_price").innerText =
          products.data[ranIdx].price;
        rather.addEventListener("click", () => {
          const url = `./detail.html?category=${products.data[ranIdx].category}&name=${products.data[ranIdx].name}`;
          location.href = url;
        });
      });

      document.querySelectorAll(".mylist").forEach(function (element) {
        element.addEventListener("click", function () {
          const option = document.querySelectorAll("#selectoption")[1];
          console.log(option.value);
          const cnt = document.querySelector(".count_result");
          const url = `../cart/cart.html?category=${
            product.category
          }&name=${encodeURIComponent(product.name)}`;

          let cartItems = localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [];

          // 이미 존재하는 아이템을 찾고, 수량을 업데이트
          let isItemUpdated = false;

          cartItems = cartItems.map((item) => {
            console.log(item);
            if (
              item.name === product.name &&
              item.brand === product.detail.brands &&
              item.options === option.value
            ) {
              item.quantity += Number(cnt.innerText);
              isItemUpdated = true;
            }
            return item;
          });

          // 동일한 아이템이 없으면 새로운 아이템 추가
          if (!isItemUpdated) {
            const cartItem = {
              name: product.name,
              brand: product.detail.brands,
              quantity: Number(cnt.innerText),
              options: option.value,
            };
            cartItems.push(cartItem);
          }
          // 업데이트된 장바구니 데이터를 로컬스토리지에 다시 저장
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          // 필요 시 페이지 이동
        });
      });
      document.querySelectorAll(".buynow").forEach(function (element) {
        element.addEventListener("click", function () {
          const url = `./detail/detail.html?category=${
            product.category
          }&name=${encodeURIComponent(product.name)}`;
          window.location.href = "../cart/cart02.html";
        });
      });

      //M버전 로컬스토리지
      document.querySelectorAll(".my_list").forEach(function (element) {
        element.addEventListener("click", function () {
          const option = document.querySelectorAll("#selectoption")[1];
          console.log(option.value);
          const cnt = document.querySelector(".count_result");
          const url = `../cart/cart.html?category=${
            product.category
          }&name=${encodeURIComponent(product.name)}`;

          let cartItems = localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [];

          // 이미 존재하는 아이템을 찾고, 수량을 업데이트
          let isItemUpdated = false;

          cartItems = cartItems.map((item) => {
            console.log(item);
            if (
              item.name === product.name &&
              item.brand === product.detail.brands &&
              item.options === option.value
            ) {
              item.quantity += Number(cnt.innerText);
              isItemUpdated = true;
            }
            return item;
          });

          // 동일한 아이템이 없으면 새로운 아이템 추가
          if (!isItemUpdated) {
            const cartItem = {
              name: product.name,
              brand: product.detail.brands,
              quantity: Number(cnt.innerText),
              options: option.value,
            };
            cartItems.push(cartItem);
          }

          // 업데이트된 장바구니 데이터를 로컬스토리지에 다시 저장
          localStorage.setItem("cartItems", JSON.stringify(cartItems));

          // 필요 시 페이지 이동
        });
      });
      document.querySelectorAll(".buynow").forEach(function (element) {
        element.addEventListener("click", function () {
          const url = `./detail/detail.html?category=${
            product.category
          }&name=${encodeURIComponent(product.name)}`;
          window.location.href = "../cart/cart02.html";
        });
      });
      document.querySelectorAll(".buy_now").forEach(function (element) {
        element.addEventListener("click", function () {
          const url = `./detail/detail.html?category=${
            product.category
          }&name=${encodeURIComponent(product.name)}`;
          window.location.href = "../cart/cart02.html";
        });
      });

      //모달
      const mylist = document.querySelector(".mylist");
      const modal = document.querySelector(".modalAll");
      mylist.addEventListener("click", () => {
        modal.classList.add("showmodal");
      });

      const checkBtn = document.querySelector(".checkBtn");
      checkBtn.addEventListener("click", () => {
        const url = `../cart/cart.html?category=${
          product.category
        }&name=${encodeURIComponent(product.name)}`;
        window.location.href = url;
      });

      const returnBtn = document.querySelector(".returnBtn");
      returnBtn.addEventListener("click", () => {
        modal.classList.remove("showmodal");
      });

      const modalBg = document.querySelector(".modalBg");
      modalBg.addEventListener("click", () => {
        modal.classList.remove("showmodal");
      });

      //M모달
      const Mmylist = document.querySelector(".ml_bn .my_list");
      const Mmodal = document.querySelector(".modalAll");
      Mmylist.addEventListener("click", () => {
        Mmodal.classList.add("showmodal");
      });

      const McheckBtn = document.querySelector(".checkBtn");
      McheckBtn.addEventListener("click", () => {
        const url = `../cart/cart.html?category=${
          product.category
        }&name=${encodeURIComponent(product.name)}`;
        window.location.href = url;
      });

      const MreturnBtn = document.querySelector(".returnBtn");
      MreturnBtn.addEventListener("click", () => {
        Mmodal.classList.remove("showmodal");
      });

      const MmodalBg = document.querySelector(".modalBg");
      MmodalBg.addEventListener("click", () => {
        Mmodal.classList.remove("showmodal");
      });
    }
  })
  .catch((error) => console.error("Error loading JSON:", error));

//M_share
const M_share = document.querySelector(".share");
const M_shareIC = document.querySelector("#M_shareIc");
const popup = document.querySelector(".popup");

M_share.addEventListener("click", function () {
  popup.classList.toggle("popupaction");
});

M_shareIC.addEventListener("click", function () {
  M_shareIC.classList.toggle("popupaction");
});

//main info
const imgarea = document.querySelector(".img_area");
const moreBtn = document.querySelector(".moreimg_slide");
const infoIc = document.querySelector(".info_slideic");

moreBtn.addEventListener("click", () => {
  // console.log("click")
  imgarea.classList.toggle("infomore");
  infoIc.classList.toggle("infomore");
});

//subinfo
const plusBtn1 = document.querySelector(".sub_plus_1");
const subInfoArea1 = document.querySelector(".subinfo_area_1");
const sub_ic = document.querySelector("#sub_ic");

plusBtn1.addEventListener("click", () => {
  subInfoArea1.classList.toggle("subinfoMore");
  subInfoArea1.style.transition = "all 0.3s";
  sub_ic.classList.toggle("subinfoMore");
});

const plusBtn2 = document.querySelector(".sub_plus_2");
const subInfoArea2 = document.querySelector(".subinfo_area_2");
const sub_ic2 = document.querySelector("#sub_ic2");

plusBtn2.addEventListener("click", () => {
  subInfoArea2.classList.toggle("subinfoMore");
  sub_ic2.classList.toggle("subinfoMore");
});

const plusBtn3 = document.querySelector(".sub_plus_3");
const subInfoArea3 = document.querySelector(".subinfo_area_3");
const sub_ic3 = document.querySelector("#sub_ic3");

plusBtn3.addEventListener("click", () => {
  subInfoArea3.classList.toggle("subinfoMore");
  sub_ic3.classList.toggle("subinfoMore");
});

//reviw
const reviwWarpper = document.querySelector(".user_reviw_warpper");
const reviwBtn = document.querySelector(".reviw_moreslide");
const reviwIc = document.querySelector(".reviw_moreic");

reviwBtn.addEventListener("click", () => {
  reviwWarpper.classList.toggle("reviw_more");
  reviwIc.classList.toggle("reviw_more");
  if (reviwBtn.innerText === `리뷰 더 보기`) {
    reviwBtn.innerText = `리뷰 접기`;
  } else {
    reviwBtn.innerText = `리뷰 더 보기`;
  }
});

//reviw
const M_reviwBtn = document.querySelector(".M_more_reviw");
const M_reviwWarpper = document.querySelector(".M_user_reviw_warpper");

M_reviwBtn.addEventListener("click", () => {
  M_reviwWarpper.classList.toggle("M_reviw_more");
  if (M_reviwBtn.innerText === `리뷰 더 보기`) {
    M_reviwBtn.innerText = `리뷰 접기`;
  } else {
    M_reviwBtn.innerText = `리뷰 더 보기`;
  }
});
