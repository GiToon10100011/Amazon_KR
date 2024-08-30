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

    // 로컬 스토리지에서 장바구니 아이템 가져오기
    let cartItems = JSON.parse(localStorage.getItem("cartItems"));

    // 각 장바구니 항목을 페이지에 렌더링
    const itemsContainer = document.querySelector(".product-menu .items");
    const totalPriceElement = document.querySelector(".product-menu .price h3");

    let totalAmount = 0;

    cartItems.forEach((item) => {
      const cartProducts = products.data.filter((product) => {
        return (
          product.name.includes(item.name) &&
          product.detail.brands.includes(item.brand)
        );
      });

      cartProducts.forEach((product) => {
        // 상품 정보를 HTML 요소로 생성
        const itemElement = document.createElement("div");
        itemElement.className = "item";
        itemElement.innerHTML = `
          <img src="${product["image-url"]}" alt="${product.name}" />
          <div class="item-desc">
            <h3>${product.detail.brands}</h3>
            <span>${product.name}</span>
            <p>${product.detail.options.join(", ")}</p>
          </div>
        `;

        itemsContainer.appendChild(itemElement);

        // 총 금액 계산
        const unitPrice = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));
        totalAmount += unitPrice * item.quantity;
      });
    });
    const mainContent = document.querySelector("main");

    document.body.style.height = getComputedStyle(mainContent).height;

    // 최종 결제 금액 업데이트
    totalPriceElement.textContent = `${totalAmount.toLocaleString()}원`;
  })
  .catch((error) => console.error("Error loading JSON data:", error));

document.querySelector(".product-menu a").addEventListener("click", (e) => {
  e.preventDefault();

  const cartItems = localStorage.getItem("cartItems");
  if (cartItems) {
    localStorage.setItem("historyItems", cartItems);
  }

  localStorage.removeItem("cartItems");

  // window.location.href = ""
});

setTimeout(() => {
  const loader = document.querySelector(".loader-box");
  loader.classList.add("active");
}, 1000);
