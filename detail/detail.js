import "./header/header.js";

fetch("./data.json")
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

    //내장객체 함수를 통해 현 url의 파라미터를 가져옴
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    const names = params.get("name");

    const product = products.data.find(
      (product) => product.category === category && product.name === names
    );


    if (product) {
      const category = document.querySelector(".category_content");
      category.innerHTML = product.detail["category-path"];

      const productTitles = document.querySelectorAll(
        ".main_desc .product-name"
      );
      productTitles.forEach((title) => {
        title.innerText = product.name;
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
          const priceValue = parseFloat(product.price.replace(/[^0-9.-]+/g, "")); // 숫자만 남기기
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
        brand.innerHTML = product.detail.brands;
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

      const mainImage = document.querySelector(".main_img");
      mainImage.style.backgroundImage = `url(${product["image-url"]})`;

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

      document.querySelectorAll(".mylist").forEach(function (element) {
        element.addEventListener("click", function () {
          const url = `../cart/cart.html?category=${
            product.category
          }&name=${encodeURIComponent(product.name)}`;
          window.location.href = url;
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
      
    }
  })
  .catch((error) => console.error("Error loading JSON:", error));

//like
const like = document.querySelector("#fav");
const M_like = document.querySelector("#m_heart");
const bar_like = document.querySelector("#M_fav");

like.addEventListener("click", () => {
  like.classList.toggle("active");
});

M_like.addEventListener("click", () => {
  M_like.classList.toggle("active");
});

bar_like.addEventListener("click", () => {
  bar_like.classList.toggle("active");
});

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

// //count
// const cost = document.querySelectorAll(".amount .price");
// const minus = document.querySelector(".button_minus");
// const plus = document.querySelector(".button_plus");
// const result = document.querySelector(".count_result");
// let i = 1;
// plus.addEventListener("click", () => {
//   i++;
//   result.textContent = `${i}`;
// });
// minus.addEventListener("click", () => {
//   if (i > 1) {
//     i--;
//     result.textContent = `${i}`;
//   } else {
//   }
// });



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


//reviwe photo
const slideList = document.querySelector(".slied_list");
const slideItems = document.querySelectorAll(".slied_list li");
const slideBtnLeft = document.querySelector(".slide_btn_L");
const slideBtnRight = document.querySelector(".slide_btn_R");

let currentOffset = 0;
const slideAmount = 125; // 슬라이드할 픽셀 수
const maxOffset =
  slideItems.length * slideAmount - slideList.parentElement.offsetWidth;

function updateSlidePosition() {
  slideList.style.transform = `translateX(${currentOffset}px)`;
}

slideBtnLeft.addEventListener("click", () => {
  if (currentOffset < 0) {
    currentOffset += slideAmount;
  } else {
    currentOffset = -maxOffset; // 첫 번째 슬라이드에서 마지막 슬라이드로 이동
  }
  updateSlidePosition();
});

slideBtnRight.addEventListener("click", () => {
  if (Math.abs(currentOffset) < maxOffset) {
    currentOffset -= slideAmount;
  } else {
    currentOffset = 0; // 마지막 슬라이드에서 첫 번째 슬라이드로 이동
  }
  updateSlidePosition();
});
