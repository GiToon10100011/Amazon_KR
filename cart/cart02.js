// header
import "./header/header.js";

// JSON 데이터 불러오기
fetch("data.json")
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

    let cartItems = JSON.parse(localStorage.getItem("cartItems"));

    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    const name = params.get("name");
    const option = params.get("option");
    const quantity = params.get("quantity");

    if (option) {
      const paramItem = products.data.find((product) => product.name === name);
      const domCartItems = document.querySelector(".order-products"); // 올바른 선택자 사용
      const domCartItem = document.createElement("div");
      domCartItem.className = "product-item";
      domCartItem.innerHTML = `
            <div class="product-header">
              <h3>${paramItem.detail.brands}</h3>
              <span class="shipping-info">무료배송</span>
            </div>
            <div class="product-content">
              <img src=${
                paramItem["image-url"]
              } alt="상품 이미지" class="product-image" />
              <div class="product-details">
                <p>${name}</p>
                <p>추가상품 - ${option}</p>
                <p class="product-price" data-unit-price="${paramItem.price.replace(
                  /[^0-9.-]+/g,
                  ""
                )}">
                  ${
                    paramItem.price
                  } <span class="product-quantity">| ${quantity}개</span>
                </p>
              </div>
            </div>
          `;
      domCartItems.appendChild(domCartItem);

      document
        .querySelector(".checkout-button")
        .addEventListener("click", function () {
          const totalPrice = document
            .querySelector("p.total")
            .innerText.replace(/[^0-9]/g, "");
          const url = `../cart/cart03.html?category=${
            paramItem.category
          }&name=${encodeURIComponent(
            name
          )}&option=${option}&price=${totalPrice}&quantity=${quantity}`;
          location.href = url;
        });
    } else {
      cartItems.forEach((item) => {
        const cartProducts = products.data.filter((product) => {
          return (
            product.name.includes(item.name) &&
            product.detail.brands.includes(item.brand)
          );
        });

        cartProducts.forEach((product) => {
          console.log(product);
          const domCartItems = document.querySelector(".order-products"); // 올바른 선택자 사용
          const domCartItem = document.createElement("div");
          domCartItem.className = "product-item";
          domCartItem.innerHTML = `
            <div class="product-header">
              <h3>${product.detail.brands}</h3>
              <span class="shipping-info">무료배송</span>
            </div>
            <div class="product-content">
              <img src=${
                product["image-url"]
              } alt="상품 이미지" class="product-image" />
              <div class="product-details">
                <p>${product.name}</p>
                <p>추가상품 - ${item.options}</p>
                <p class="product-price" data-unit-price="${product.price.replace(
                  /[^0-9.-]+/g,
                  ""
                )}">
                  ${product.price} <span class="product-quantity">| ${
            item.quantity
          }개</span>
                </p>
              </div>
            </div>
          `;
          domCartItems.appendChild(domCartItem);
        });
      });
    }

    const mainContent = document.querySelector(".content-wrapper");
    document.body.style.height = getComputedStyle(mainContent).height;

    // 장바구니 항목 렌더링 후 총 가격 계산
    calculateTotalPrice();
    updateItemCount();
  })
  .catch((error) => console.error("Error loading JSON:", error));

// 총 가격 계산 함수
function calculateTotalPrice() {
  const priceElements = document.querySelectorAll(".product-price");
  let totalPrice = 0;

  priceElements.forEach((priceElement) => {
    const unitPrice = parseInt(
      priceElement.getAttribute("data-unit-price"),
      10
    );
    const quantityElement = priceElement.querySelector(".product-quantity");
    const quantityText = quantityElement.textContent.trim();
    const quantity = parseInt(quantityText.replace(/[^0-9]/g, ""), 10);

    totalPrice += unitPrice * quantity;
  });

  const formattedTotalPrice = totalPrice.toLocaleString("ko-KR") + "원";

  // 두 개의 다른 요소에 동일한 총 가격을 설정합니다.
  document.querySelector("#total-price").textContent = formattedTotalPrice;
  document.querySelector("#final-price").textContent = formattedTotalPrice; // 'final-price'에도 동일한 값을 설정
}

// 상품 수 계산 함수
const updateItemCount = () => {
  const itemCountElement = document.querySelector(".order-products h2 span");
  const productItems = document.querySelectorAll(
    ".order-products .product-item"
  );
  const itemCount = productItems.length;

  itemCountElement.textContent = `${itemCount}건`;
};

// 홈페이지 이동
document
  .querySelector(".checkout-button")
  .addEventListener("click", function () {
    window.location.href = "cart03.html";
  });

// 이름 유효성 검사 코드
const nameInput = document.querySelector("#order-name");
const nameError = document.querySelector("#name-error");

const recipientNameInput = document.querySelector("#recipient-name");
const recipientNameError = document.querySelector("#recipient-name-error2");

// 정규식 패턴: 영어와 한글만 허용
const namePattern = /^[a-zA-Z가-힣ㄱ-ㅎ]+$/;

// 주문자 이름 입력 시 유효성 검사
nameInput.addEventListener("input", function () {
  if (!namePattern.test(nameInput.value)) {
    nameError.textContent = "올바른 이름을 입력하세요. (영어와 한글만 허용)";
    nameError.style.display = "block";
  } else {
    nameError.textContent = "";
    nameError.style.display = "none";
  }
});

// 수령인 이름 입력 시 유효성 검사
recipientNameInput.addEventListener("input", function () {
  if (!namePattern.test(recipientNameInput.value)) {
    recipientNameError.textContent =
      "올바른 이름을 입력하세요. (영어와 한글만 허용)";
    recipientNameError.style.display = "block";
  } else {
    recipientNameError.textContent = "";
    recipientNameError.style.display = "none";
  }
});

// 이메일 유효성검사
const emailInput = document.querySelector("#order-email");
const emailError = document.querySelector("#email-error");

// 이메일 입력 시 유효성 검사
emailInput.addEventListener("input", function () {
  // 인풋칸에 영어와 숫자만 허용하는 패턴
  const emailPattern = /^[a-zA-Z0-9._%+-]+$/;

  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "올바른 이메일을 입력하세요. (영어와 숫자만 허용)";
    emailError.style.display = "block";
  } else {
    emailError.textContent = "";
    emailError.style.display = "none";
  }
});

// 전화번호 유효성 검사 함수
function validatePhoneInput(inputElement, errorElement) {
  const phonePattern = /^[0-9]*$/; // 숫자만 허용하는 패턴

  if (!phonePattern.test(inputElement.value)) {
    errorElement.textContent = "올바른 전화번호를 입력해주세요. (숫자만 허용)";
    errorElement.style.display = "block";
  } else {
    errorElement.textContent = "";
    errorElement.style.display = "none";
  }
}

const phoneInputs = [
  {
    input: document.querySelector("#order-phone"),
    error: document.querySelector("#phone-error"),
  },
  {
    input: document.querySelector("#recipient-phone"),
    error: document.querySelector("#recipient-phone-error"),
  },
];

phoneInputs.forEach(({ input, error }) => {
  console.log(input, error);
  input.addEventListener("input", function () {
    validatePhoneInput(input, error);
  });
});

// 카카오 우편번호 서비스 API 불러오기
document
  .querySelector(".btn-find-postal-code")
  .addEventListener("click", function () {
    new daum.Postcode({
      oncomplete: function (data) {
        // 검색 결과에서 우편번호와 주소를 해당 필드에 자동 입력
        document.querySelector("#postal-code1").value = data.zonecode;
        document.querySelector("#address").value = data.address;
        document.querySelector("#address-detail").focus(); // 상세주소 필드로 포커스 이동
      },
    }).open();
  });
