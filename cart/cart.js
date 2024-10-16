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

    const domCartItems = document.querySelector(
      ".cart-items-wrapper .cart-items"
    );

    if (!cartItems || cartItems.length === 0) {
      // 로컬 스토리지에 담긴 항목이 없을 경우
      domCartItems.style.textAlign = "center";
      domCartItems.style.lineHeight = "150px";
      domCartItems.innerHTML = "<h1>장바구니가 비어있습니다.<h1>";
    } else {
      cartItems.forEach((item) => {
        const cartProducts = products.data.filter((product) => {
          return (
            product.name.includes(item.name) &&
            product.detail.brands.includes(item.brand)
          );
        });
        cartProducts.forEach((product) => {
          const domCartItem = document.createElement("div");
          domCartItem.className = "cart-item";
          domCartItem.innerHTML = `
            <div class="cart-item-title">
            <h3>${product.detail.brands}</h3>
            <hr />
          </div>
          <div class="cart-item-header">
            <input type="checkbox" name="cart-check" id="cart-check-1" />
            <span>X</span>
          </div>
          <div class="cart-item-main">
            <img src=${product["image-url"]} />
            <div>
              <h3>
                ${product.name}
              </h3>
              <p>30,000원 이상 무료배송 | 일반택배</p>
            </div>
          </div>
          <div class="cart-item-options">
            <div class="options-title">
              <h3>${item.options}</h3>
              <span>X</span>
            </div>
            <div class="options-bottom">
              <div class="cart-options-control">
                <i class="fa-solid fa-minus"></i>
                <span>${item.quantity}</span>
                <i class="fa-solid fa-plus"></i>
              </div>
              <p class="cart-item-price" data-unit-price="${product.price}">
                ${product.price}
              </p>
            </div>
          </div>
          <div class="cart-item-actions">
            <span class="cart-change-options">바로구매</span>
          </div>
          <div class="cart-item-footer">
            <hr />
            <h3>배송비 3,000원</h3>
            <p>총 주문금액 50,000원 이상시 무료배송</p>
          </div>
          `;
          domCartItems.appendChild(domCartItem);
        });
      });
    }

    const productsContainer = document.querySelector(".products-container");

    // Fisher-Yates shuffle algorithm을 사용하여 배열을 무작위로 섞는 함수
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    };

    // AI 추천 상품 섹션 동적 생성
    const recommendedProductsContainer = document.querySelector(
      ".products-container"
    );
    let recommendedProducts = products.data.slice(); // 원본 배열을 복사

    shuffleArray(recommendedProducts); // 배열을 무작위로 섞음
    recommendedProducts = recommendedProducts.slice(0, 6); // 앞에서 6개 선택

    recommendedProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <img src="${product["image-url"]}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>${product.detail.brands}</p>
        <p class="price"><span>17%</span> ${product.price}</p>
        <div class="product-tags">
          <span class="tag">무료배송</span>
          <span class="tag">오늘출발</span>
        </div>
      `;
      recommendedProductsContainer.appendChild(productCard);
      productCard.style.cursor = "pointer";
      productCard.addEventListener("click", () => {
        const url = `../detail/detail.html?category=${product.category}&name=${product.name}`;
        location.href = url;
      });
    });

    const mainContent = document.querySelector("main");

    document.body.style.height = getComputedStyle(mainContent).height;

    // cart price 업데이트 및 수량증가 및 감소 기능
    const quantityControls = document.querySelectorAll(".cart-options-control");

    // 각 수량 조정 버튼에 이벤트 리스너 추가
    quantityControls.forEach((control) => {
      const minusButton = control.querySelector(".fa-minus");
      const plusButton = control.querySelector(".fa-plus");
      const quantityDisplay = control.querySelector("span");

      minusButton.addEventListener("click", () => {
        let currentQuantity = parseInt(quantityDisplay.textContent);
        if (currentQuantity > 1) {
          currentQuantity -= 1;
          quantityDisplay.textContent = currentQuantity;
          updateCartItemPrice(control, currentQuantity);
          updateTotalPrice(); // 총 가격 업데이트
          updateCartItemInLocalStorage(control, currentQuantity);
        }
      });

      plusButton.addEventListener("click", () => {
        let currentQuantity = parseInt(quantityDisplay.textContent);
        currentQuantity += 1;
        quantityDisplay.textContent = currentQuantity;
        updateCartItemPrice(control, currentQuantity);
        updateTotalPrice(); // 총 가격 업데이트
        updateCartItemInLocalStorage(control, currentQuantity);
      });
    });

    // 로컬 스토리지에서 해당 아이템의 수량을 업데이트하는 함수
    function updateCartItemInLocalStorage(control, newQuantity) {
      // 최신 cartItems 데이터를 가져오기
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      const itemName = control
        .closest(".cart-item")
        .querySelector(".cart-item-main > div h3")
        .innerText.trim();

      const itemOptions = control
        .closest(".cart-item")
        .querySelector(".options-title h3").textContent;

      cartItems = cartItems.map((item) => {
        if (item.name.trim() === itemName && item.options === itemOptions) {
          item.quantity = newQuantity;
        }
        return item;
      });

      // 수정된 cartItems를 다시 로컬 스토리지에 저장
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }

    // 각 아이템의 가격을 업데이트하는 함수
    function updateCartItemPrice(control, quantity) {
      const itemPriceElement = control
        .closest(".cart-item")
        .querySelector(".cart-item-price");

      // unitPrice를 'data-unit-price' 속성에서 가져와서 숫자로 변환
      const unitPrice = parseFloat(
        itemPriceElement
          .getAttribute("data-unit-price")
          .replace(/[^0-9.-]+/g, "")
      );

      // 새로운 가격 계산 (수량 * 단위 가격)
      const newPrice = unitPrice * quantity;

      // 가격을 포맷팅하여 표시
      itemPriceElement.textContent = `${newPrice.toLocaleString("ko-KR")}원`;
    }

    // 총 가격 업데이트 함수
    function updateTotalPrice() {
      const totalPriceElement = document.querySelectorAll("#total-price");
      let total = 0;

      document.querySelectorAll(".cart-item-price").forEach((priceElement) => {
        // 'data-unit-price'에서 값을 가져와 곱하여 합산
        const unitPrice = parseFloat(
          priceElement.getAttribute("data-unit-price").replace(/[^0-9.-]+/g, "")
        );

        // 해당 항목의 수량을 가져오기
        const quantity = parseInt(
          priceElement
            .closest(".cart-item")
            .querySelector(".cart-options-control span").textContent
        );

        // 전체 가격 계산
        total += unitPrice * quantity;
      });

      // 총 가격을 포맷팅하여 표시
      totalPriceElement.forEach((element) => {
        element.textContent = `${total.toLocaleString("ko-KR")}원`;
      });
    }

    // 페이지 로드 시 초기 모든 항목의 가격 계산
    function initializeCartPrices() {
      document.querySelectorAll(".cart-item").forEach((cartItem) => {
        const quantity = parseInt(
          cartItem.querySelector(".cart-options-control span").textContent
        );
        updateCartItemPrice(
          cartItem.querySelector(".cart-options-control"),
          quantity
        );
      });
    }

    // 페이지 로드 시 초기 총 가격 계산
    initializeCartPrices();
    updateTotalPrice();

    // modal

    // 모달창 엘리먼트 가져오기
    const deleteModal = document.getElementById("deleteModal");
    const confirmDeleteBtn = document.getElementById("confirmDelete");
    const cancelDeleteBtn = document.getElementById("cancelDelete");
    let itemToDelete = null;

    // 모든 삭제 버튼(X 버튼)에 이벤트 리스너 추가
    document
      .querySelectorAll(".cart-item-header span, .options-title span")
      .forEach((deleteButton) => {
        deleteButton.addEventListener("click", () => {
          itemToDelete = deleteButton.closest(".cart-item"); // 삭제할 항목을 지정
          deleteModal.style.display = "block"; // 모달창 보이기
          modalBackground.style.display = "block"; // 배경 보이기
        });
      });

    // 삭제 확인 버튼 클릭 시
    confirmDeleteBtn.addEventListener("click", (e) => {
      let index;
      if (itemToDelete) {
        const index = cartItems.findIndex(
          (item) =>
            item.name ===
            itemToDelete.children[2].children[1].children[0].innerText
        );
        cartItems.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        itemToDelete.remove(); // 해당 항목 삭제
        updateTotalPrice(); // 총 가격 업데이트
        itemToDelete = null;
        deleteModal.style.display = "none"; // 모달창 숨기기
        modalBackground.style.display = "none"; // 배경 숨기기
      }

      if (!cartItems || cartItems.length === 0) {
        // 로컬 스토리지에 담긴 항목이 없을 경우
        domCartItems.style.textAlign = "center";
        domCartItems.style.lineHeight = "150px";
        domCartItems.innerHTML = "<h1>장바구니가 비어있습니다.<h1>";
      }
    });

    // 삭제 취소 버튼 클릭 시
    cancelDeleteBtn.addEventListener("click", () => {
      itemToDelete = null; // 삭제 항목 초기화
      deleteModal.style.display = "none"; // 모달창 숨기기
      modalBackground.style.display = "none"; // 배경 숨기기
    });

    // 모달창 외부를 클릭하면 모달창 숨기기
    window.addEventListener("click", (event) => {
      if (event.target === deleteModal) {
        deleteModal.style.display = "none";
        modalBackground.style.display = "none";
      }
    });
  })

  .catch((error) => console.error("Error loading JSON data:", error));

// 홈페이지 이동
document
  .querySelector(".checkout-button")
  .addEventListener("click", function () {
    window.location.href = "cart02.html";
  });
document.querySelectorAll(".cart-change-options").forEach(function (element) {
  element.addEventListener("click", function () {
    window.location.href = "cart02.html";
  });
});
