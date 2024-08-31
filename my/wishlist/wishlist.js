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
    const wishlistItems =
      JSON.parse(localStorage.getItem("wishlistItems")) || [];

    console.log(wishlistItems);

    const domWishlistItems = document.querySelector(".wishlistItems");

    if (wishlistItems.length === 0) {
      // 로컬 스토리지에 담긴 항목이 없을 경우
      domWishlistItems.style.textAlign = "center";
      domWishlistItems.style.lineHeight = "150px";
      domWishlistItems.innerHTML = "<h1>찜 내역이 없습니다.<h1>";
    } else {
      document.querySelector(".total span").innerText = `총 ${wishlistItems.length}개`
      wishlistItems.forEach((item) => {
        const wishlistProducts = products.data.filter((product) => {
          return product.name.includes(item.name);
        });
        wishlistProducts.forEach((product) => {
          const domWishlistItem = document.createElement("div");
          domWishlistItem.className = "wishlistItem";
          domWishlistItem.innerHTML = `
            <div class="item-content">
            <input type="checkbox" name="item" id="selectAll" />
            <div class="item-img">
              <img src="${product["image-url"]}" alt="" />
            </div>
            <div class="item-info">
              <p class="product-name">
                <span
                  >${product.name}
                </span>
                <span class="icon-cart material-symbols-outlined">
                  shopping_cart
                </span>
              </p>
              <span class="product-option"
                >${product.detail.brands}</span
              >
              <div class="product-price">
                <h4>${product.price}</h4>
              </div>
            </div>
            <div class="item-delete-btn">
              <button>삭제하기</button>
            </div>
          </div>
          `;
          domWishlistItems.appendChild(domWishlistItem);
          domWishlistItem
            .querySelector(".product-name .icon-cart")
            .addEventListener("click", () => {
              alert(`${product.name}을(를) 장바구니에 담았습니다. `)
            });
        });
      });
    }
  })
  .catch((error) => console.error("Error loading JSON data:", error));
