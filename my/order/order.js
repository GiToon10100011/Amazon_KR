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

// 로컬 스토리지에서 저장된 주문 내역 가져오기
const historyItems = JSON.parse(localStorage.getItem("historyItems")) || [];

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

    const historyData = products.data.filter((item) => {
      return historyItems.some((history) => item.name === history.name);
    });

    const domOrderItems = document.querySelector(".orderItems");

    const addItems = (item, product) => {
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
          setTimeout(() => {
            this.classList.add("fa-regular");
            this.classList.add("fa-clipboard");
            this.classList.remove("fa-check");
            this.classList.remove("fa-solid");
          }, 100);
        });
    };

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
          addItems(item, product);
        });
      });
    }

    const categoryFilter = document.querySelector("#categoryFilter");
    const sortFilter = document.querySelector("#sortProducts");

    categoryFilter.addEventListener("change", (e) => {
      sortFilter.value = "recent";
      const selectedCategory = e.target.value;

      const categoryHistory = historyData.filter((item) =>
        item.category.includes(selectedCategory)
      );

      const historyFiltered = historyItems.filter((item) =>
        categoryHistory.some((history) => item.name === history.name)
      );

      if (categoryHistory.length === 0) {
        domOrderItems.innerHTML = "";
        domOrderItems.style.textAlign = "center";
        domOrderItems.style.lineHeight = "150px";
        domOrderItems.innerHTML = "<h1>주문 내역이 없습니다.<h1>";
      } else {
        domOrderItems.innerHTML = "";
        domOrderItems.style.textAlign = "";
        domOrderItems.style.lineHeight = "";
        categoryHistory.forEach((product, index) => {
          addItems(historyFiltered[index], product);
        });
      }
    });

    sortFilter.addEventListener("change", (e) => {
      const domOrderItems = document.querySelector(".orderItems");
      let orderItems = Array.from(document.querySelectorAll(".orderItem"));
      domOrderItems.innerHTML = "";
      if (e.target.value === "recent") {
        orderItems.sort(
          (a, b) =>
            a
              .querySelector(".order-number span")
              .innerText.replace(/[^0-9]/g, "") -
            b
              .querySelector(".order-number span")
              .innerText.replace(/[^0-9]/g, "")
        );
      }
      if (e.target.value === "low") {
        orderItems.sort(
          (a, b) =>
            Number(
              a
                .querySelector(".product-price h4")
                .innerText.replace(/[^0-9.-]+/g, "")
            ) -
            Number(
              b
                .querySelector(".product-price h4")
                .innerText.replace(/[^0-9.-]+/g, "")
            )
        );
      }
      if (e.target.value === "high") {
        orderItems.sort(
          (a, b) =>
            Number(
              b
                .querySelector(".product-price h4")
                .innerText.replace(/[^0-9.-]+/g, "")
            ) -
            Number(
              a
                .querySelector(".product-price h4")
                .innerText.replace(/[^0-9.-]+/g, "")
            )
        );
      }
      orderItems.forEach((item) => {
        domOrderItems.appendChild(item);
      });
    });

    const searchProduct = document.querySelector(
      "form[name = 'searchProductId']"
    );

    const searchProductBtn = document.querySelector("#searchProductBtn");

    searchProductBtn.addEventListener("click", (e) => {
      const searchValue = searchProduct.children[0].children[0].value;
      const domOrderItems = document.querySelector(".orderItems");

      const filteredIdProducts = historyData.filter((history) => {
        return (
          history.id.toString().includes(searchValue) ||
          history.name.toLowerCase().includes(searchValue)
        );
      });

      const filteredItems = historyItems.filter((history) =>
        filteredIdProducts.some(
          (product) =>
            product.name === history.name &&
            product.detail.brands === history.brand
        )
      );

      domOrderItems.innerHTML = "";

      if (filteredIdProducts.length === 0) {
        domOrderItems.style.textAlign = "center";
        domOrderItems.style.lineHeight = "150px";
        domOrderItems.innerHTML = "<h1>주문내역이 없습니다.<h1>";
        document.body.style.height = getComputedStyle(
          document.querySelector(".myPage-content")
        ).height;
      } else {
        domOrderItems.style.textAlign = "";
        domOrderItems.style.lineHeight = "";
        filteredIdProducts.forEach((product, index) => {
          addItems(filteredItems[index], product);
        });
      }

      e.target.children[0].children[0].value = "";
    });

    searchProduct.addEventListener("submit", (e) => {
      e.preventDefault();
      const domOrderItems = document.querySelector(".orderItems");
      const searchValue = e.target.children[0].children[0].value;

      const filteredIdProducts = historyData.filter((history) => {
        return (
          history.id.toString().includes(searchValue) ||
          history.name.toLowerCase().includes(searchValue)
        );
      });

      const filteredItems = historyItems.filter((history) =>
        filteredIdProducts.some(
          (product) =>
            product.name === history.name &&
            product.detail.brands === history.brand
        )
      );

      domOrderItems.innerHTML = "";

      if (filteredIdProducts.length === 0) {
        domOrderItems.style.textAlign = "center";
        domOrderItems.style.lineHeight = "150px";
        domOrderItems.innerHTML = "<h1>주문내역이 없습니다.<h1>";
        document.body.style.height = getComputedStyle(
          document.querySelector(".myPage-content")
        ).height;
      } else {
        domOrderItems.style.textAlign = "";
        domOrderItems.style.lineHeight = "";
        filteredIdProducts.forEach((product, index) => {
          addItems(filteredItems[index], product);
        });
      }

      e.target.children[0].children[0].value = "";
    });

    window.onload = () => {
      const frameHeight = document.body.scrollHeight;
      const parentFrame = parent.document.querySelector(".pageBox");
      parentFrame.style.height = `${frameHeight}px`;
      parent.document.body.style.height = `${frameHeight + 1000}px`;
    }
    
  })
  .catch((error) => console.error("Error loading JSON data:", error));
