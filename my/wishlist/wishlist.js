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

    const wishlistData = products.data.filter((item) => {
      return wishlistItems.some((wishlist) => item.name === wishlist.name);
    });

    const domWishlistItems = document.querySelector(".wishlistItems");

    if (wishlistItems.length === 0) {
      // 로컬 스토리지에 담긴 항목이 없을 경우
      domWishlistItems.style.textAlign = "center";
      domWishlistItems.style.lineHeight = "150px";
      domWishlistItems.innerHTML = "<h1>찜 내역이 없습니다.<h1>";
    } else {
      document.querySelector(
        ".total span"
      ).innerText = `총 ${wishlistItems.length}개`;
      wishlistItems.forEach((item) => {
        const wishlistProducts = products.data.filter((product) => {
          return product.name.includes(item.name);
        });
        wishlistProducts.forEach((product) => {
          const domWishlistItem = document.createElement("div");
          domWishlistItem.className = "wishlistItem";
          domWishlistItem.innerHTML = `
            <div class="item-content">
            <input type="checkbox" name="item" id="wishlistCheck" />
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
              alert(`${product.name}을(를) 장바구니에 담았습니다. `);
            });
        });
      });

      //검색 기능
      const searchProduct = document.querySelector(
        "form[name = 'searchWishlist']"
      );

      const searchProductBtn = document.querySelector("#searchProductBtn");
      searchProductBtn.addEventListener("click", (e) => {
        const searchValue = searchProduct.children[0].value;
        const domWishlistItems = document.querySelector(".wishlistItems");

        const filteredProducts = wishlistData.filter((wishlist) => {
          return (
            wishlist.id.toString().includes(searchValue) ||
            wishlist.name.toLowerCase().includes(searchValue)
          );
        });

        const filteredItems = wishlistItems.filter((wishlist) =>
          filteredProducts.some(
            (product) =>
              product.name === wishlist.name && product.price === wishlist.price
          )
        );

        domWishlistItems.innerHTML = "";

        if (filteredProducts.length === 0) {
          domWishlistItems.style.textAlign = "center";
          domWishlistItems.style.lineHeight = "150px";
          domWishlistItems.innerHTML = "<h1>주문내역이 없습니다.<h1>";
          document.body.style.height = getComputedStyle(
            document.querySelector(".myPage-content")
          ).height;
        } else {
          domWishlistItems.style.textAlign = "";
          domWishlistItems.style.lineHeight = "";
          const domWishlistFilter = document.createElement("div");
          domWishlistFilter.className = "wishlistFilter";
          domWishlistFilter.innerHTML = `
          
          <div class="selectAll">
            <input type="checkbox" name="selectAll" id="selectAll" />
            <label for="selectAll">전체선택</label>
          </div>
          <div class="deleteOpt">
            <input class="deleteAllItems" type="button" value="전체삭제" />
            <input class="deleteSelectedItems" type="button" value="선택삭제" />
          </div>
        
          `;

          domWishlistItems.appendChild(domWishlistFilter);

          filteredProducts.forEach((product) => {
            const domWishlistItem = document.createElement("div");
            domWishlistItem.className = "wishlistItem";
            domWishlistItem.innerHTML = `
            <div class="item-content">
            <input type="checkbox" name="item" id="wishlistCheck" />
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
                alert(`${product.name}을(를) 장바구니에 담았습니다. `);
              });
          });
        }

        searchProduct.children[0].value = "";

        const checkAllBtn = document.querySelector("#selectAll");
        const checkItems = document.querySelectorAll("#wishlistCheck");
        const deleteAllItems = document.querySelector(".deleteAllItems");
        const deleteSelectedItems = document.querySelector(
          ".deleteSelectedItems"
        );
        const deleteProductBtns = document.querySelectorAll(
          ".item-delete-btn button"
        );
        console.log(deleteProductBtns);
        checkAllBtn.addEventListener("change", () => {
          checkItems.forEach((item) => {
            item.checked = checkAllBtn.checked;
          });
        });
        checkItems.forEach((item) => {
          item.addEventListener("change", () => {
            if (!item.checked) {
              checkAllBtn.checked = false;
            }
          });
        });
        deleteAllItems.addEventListener("click", () => {
          if (confirm("모든 찜목록을 삭제하시겠습니까?")) {
            localStorage.removeItem("wishlistItems");
            location.reload();
          }
        });
        deleteSelectedItems.addEventListener("click", () => {
          if (confirm("선택하신 목록을 삭제하시겠습니까?")) {
            const remainingItems = [];
            checkItems.forEach((check) => {
              if (check.checked) {
                check.parentElement.parentElement.remove();
              } else {
                remainingItems.push(check);
              }
            });
            const updatedWishlistItems = wishlistItems.filter((item) =>
              remainingItems.some((remainingItem) =>
                remainingItem.parentElement
                  .querySelector(".product-name span:first-child")
                  .innerText.includes(item.name)
              )
            );
            localStorage.setItem(
              "wishlistItems",
              JSON.stringify(updatedWishlistItems)
            );
            location.reload();
          }
        });
        deleteProductBtns.forEach((btn, i, arr) => {
          btn.addEventListener("click", (e) => {
            if (
              confirm(
                `${
                  e.target.parentElement.parentElement.querySelector(
                    ".product-name span:first-child"
                  ).innerText
                }를 삭제하시겠습니까?`
              )
            ) {
              const storageIndex = Array.from(arr).indexOf(btn);
              e.target.parentElement.parentElement.remove();
              wishlistItems.splice(storageIndex, 1);
              localStorage.setItem(
                "wishlistItems",
                JSON.stringify(wishlistItems)
              );
              location.reload();
            }
          });
        });
      });

      searchProduct.addEventListener("submit", (e) => {
        e.preventDefault();
        const searchValue = searchProduct.children[0].value;
        const domWishlistItems = document.querySelector(".wishlistItems");

        const filteredProducts = wishlistData.filter((wishlist) => {
          return (
            wishlist.id.toString().includes(searchValue) ||
            wishlist.name.toLowerCase().includes(searchValue)
          );
        });

        const filteredItems = wishlistItems.filter((wishlist) =>
          filteredProducts.some(
            (product) =>
              product.name === wishlist.name && product.price === wishlist.price
          )
        );

        domWishlistItems.innerHTML = "";

        if (filteredProducts.length === 0) {
          domWishlistItems.style.textAlign = "center";
          domWishlistItems.style.lineHeight = "150px";
          domWishlistItems.innerHTML = "<h1>주문내역이 없습니다.<h1>";
          document.body.style.height = getComputedStyle(
            document.querySelector(".myPage-content")
          ).height;
        } else {
          domWishlistItems.style.textAlign = "";
          domWishlistItems.style.lineHeight = "";
          const domWishlistFilter = document.createElement("div");
          domWishlistFilter.className = "wishlistFilter";
          domWishlistFilter.innerHTML = `
          
          <div class="selectAll">
            <input type="checkbox" name="selectAll" id="selectAll" />
            <label for="selectAll">전체선택</label>
          </div>
          <div class="deleteOpt">
            <input class="deleteAllItems" type="button" value="전체삭제" />
            <input class="deleteSelectedItems" type="button" value="선택삭제" />
          </div>
        
          `;

          domWishlistItems.appendChild(domWishlistFilter);

          filteredProducts.forEach((product) => {
            const domWishlistItem = document.createElement("div");
            domWishlistItem.className = "wishlistItem";
            domWishlistItem.innerHTML = `
            <div class="item-content">
            <input type="checkbox" name="item" id="wishlistCheck" />
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
                alert(`${product.name}을(를) 장바구니에 담았습니다. `);
              });
          });
        }

        e.target.children[0].value = "";

        const checkAllBtn = document.querySelector("#selectAll");
        const checkItems = document.querySelectorAll("#wishlistCheck");
        const deleteAllItems = document.querySelector(".deleteAllItems");
        const deleteSelectedItems = document.querySelector(
          ".deleteSelectedItems"
        );
        const deleteProductBtns = document.querySelectorAll(
          ".item-delete-btn button"
        );
        console.log(deleteProductBtns);
        checkAllBtn.addEventListener("change", () => {
          checkItems.forEach((item) => {
            item.checked = checkAllBtn.checked;
          });
        });
        checkItems.forEach((item) => {
          item.addEventListener("change", () => {
            if (!item.checked) {
              checkAllBtn.checked = false;
            }
          });
        });
        deleteAllItems.addEventListener("click", () => {
          if (confirm("모든 찜목록을 삭제하시겠습니까?")) {
            localStorage.removeItem("wishlistItems");
            location.reload();
          }
        });
        deleteSelectedItems.addEventListener("click", () => {
          if (confirm("선택하신 목록을 삭제하시겠습니까?")) {
            const remainingItems = [];
            checkItems.forEach((check) => {
              if (check.checked) {
                check.parentElement.parentElement.remove();
              } else {
                remainingItems.push(check);
              }
            });
            const updatedWishlistItems = wishlistItems.filter((item) =>
              remainingItems.some((remainingItem) =>
                remainingItem.parentElement
                  .querySelector(".product-name span:first-child")
                  .innerText.includes(item.name)
              )
            );
            localStorage.setItem(
              "wishlistItems",
              JSON.stringify(updatedWishlistItems)
            );
            location.reload();
          }
        });
        deleteProductBtns.forEach((btn, i, arr) => {
          btn.addEventListener("click", (e) => {
            if (
              confirm(
                `${
                  e.target.parentElement.parentElement.querySelector(
                    ".product-name span:first-child"
                  ).innerText
                }를 삭제하시겠습니까?`
              )
            ) {
              const storageIndex = Array.from(arr).indexOf(btn);
              e.target.parentElement.parentElement.remove();
              wishlistItems.splice(storageIndex, 1);
              localStorage.setItem(
                "wishlistItems",
                JSON.stringify(wishlistItems)
              );
              location.reload();
            }
          });
        });
      });

      const checkAllBtn = document.querySelector("#selectAll");
      const checkItems = document.querySelectorAll("#wishlistCheck");
      const deleteAllItems = document.querySelector(".deleteAllItems");
      const deleteSelectedItems = document.querySelector(
        ".deleteSelectedItems"
      );
      const deleteProductBtns = document.querySelectorAll(
        ".item-delete-btn button"
      );
      console.log(deleteProductBtns);
      checkAllBtn.addEventListener("change", () => {
        checkItems.forEach((item) => {
          item.checked = checkAllBtn.checked;
        });
      });
      checkItems.forEach((item) => {
        item.addEventListener("change", () => {
          if (!item.checked) {
            checkAllBtn.checked = false;
          }
        });
      });
      deleteAllItems.addEventListener("click", () => {
        if (confirm("모든 찜목록을 삭제하시겠습니까?")) {
          localStorage.removeItem("wishlistItems");
          location.reload();
        }
      });
      deleteSelectedItems.addEventListener("click", () => {
        if (confirm("선택하신 목록을 삭제하시겠습니까?")) {
          const remainingItems = [];
          checkItems.forEach((check) => {
            if (check.checked) {
              check.parentElement.parentElement.remove();
            } else {
              remainingItems.push(check);
            }
          });
          const updatedWishlistItems = wishlistItems.filter((item) =>
            remainingItems.some((remainingItem) =>
              remainingItem.parentElement
                .querySelector(".product-name span:first-child")
                .innerText.includes(item.name)
            )
          );
          localStorage.setItem(
            "wishlistItems",
            JSON.stringify(updatedWishlistItems)
          );
          location.reload();
        }
      });
      deleteProductBtns.forEach((btn, i, arr) => {
        btn.addEventListener("click", (e) => {
          if (
            confirm(
              `${
                e.target.parentElement.parentElement.querySelector(
                  ".product-name span:first-child"
                ).innerText
              }를 삭제하시겠습니까?`
            )
          ) {
            const storageIndex = Array.from(arr).indexOf(btn);
            e.target.parentElement.parentElement.remove();
            wishlistItems.splice(storageIndex, 1);
            localStorage.setItem(
              "wishlistItems",
              JSON.stringify(wishlistItems)
            );
            location.reload();
          }
        });
      });
    }
  })
  .catch((error) => console.error("Error loading JSON data:", error));
