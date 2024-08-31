const radioBtns = document.querySelectorAll(".radioBtns input[type = 'radio']");
const calendarBtns = document.querySelectorAll(
  ".calendarFilter input[type = 'date']"
);

calendarBtns.forEach((btn) => {
  btn.addEventListener("change", () => {
    radioBtns.forEach((radio) => {
      radio.checked = false;
    });
    btn.classList.add("active");
  });
});

radioBtns.forEach((radio) => {
  radio.addEventListener("click", () => {
    calendarBtns.forEach((btn) => {
      btn.classList.remove("active");
      btn.value = "";
    });
  });
});

// json data start
fetch("../data.json")
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

    // 로컬 스토리지에서 저장된 주문 내역 가져오기
    const historyItems = JSON.parse(localStorage.getItem("historyItems")) || [];

    const domOrderItems = document.querySelector(".orderItems");

    if (historyItems.length === 0) {
      // 로컬 스토리지에 담긴 항목이 없을 경우
      domOrderItems.style.textAlign = "center";
      domOrderItems.style.lineHeight = "150px";
      domOrderItems.innerHTML = "<h1>주문 내역이 없습니다.<h1>";
    } else {
      historyItems.forEach((item) => {
        const orderProducts = products.data.filter((product) => {
          return (
            product.name.includes(item.name) &&
            product.detail.brands.includes(item.brand)
          );
        });
        orderProducts.forEach((product) => {
          console.log(product);
          const domOrderItem = document.createElement("div");
          domOrderItem.className = "orderItem";
          domOrderItem.innerHTML = `
            <div class="item-title">
              <span>${new Date().toLocaleDateString()}</span>
              <a href="">주문 상세보기 <i class="fa-solid fa-chevron-right"></i></a>
            </div>
            <div class="item-content">
              <div class="item-img">
                <img src=${product["image-url"]} alt="${product.name}" />
              </div>
              <div class="item-info">
                <span class="delivery-status">배송준비중 <i class="fa-solid fa-ellipsis-vertical"></i></span>
                <p class="product-name">
                  <span>${product.name}</span>
                  <span class="icon-cart material-symbols-outlined">shopping_cart</span>
                </p>
                
                <div class="product-price">
                  <h4>${product.price}/${item.quantity}개</h4>
                  <div class="order-number">
                    <span>주문번호 ${product.id}</span>
                    <i class="fa-regular fa-clipboard"></i>
                  </div>
                </div>
              </div>
              <div class="item-query">
                <span>${product.detail.brands}</span>
                <button>문의하기</button>
              </div>
            </div>
          `;
          domOrderItems.appendChild(domOrderItem);
          domOrderItem
            .querySelector(".order-number i")
            .addEventListener("click", function () {
              window.focus();

              const textToCopy = domOrderItem
                .querySelector(".order-number span")
                .innerText.replace(/[^0-9]/g, "");

              navigator.clipboard
                .writeText(textToCopy)
                .then(() => {
                  alert("주문번호가 클립보드에 복사되었습니다!");
                })
                .catch((err) => {
                  console.error("복사 실패:", err);
                });

              this.classList.remove("fa-regular");
              this.classList.remove("fa-clipboard");
              this.classList.add("fa-check");
              this.classList.add("fa-solid");
              console.log(this);
              setTimeout(() => {
                this.classList.add("fa-regular");
                this.classList.add("fa-clipboard");
                this.classList.remove("fa-check");
                this.classList.remove("fa-solid");
              }, 100);
            });
        });
      });
    }
  })
  .catch((error) => console.error("Error loading JSON data:", error));
