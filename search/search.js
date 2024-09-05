import "./header/header.js";

//Apply colors for filter menus
const colors = document.querySelectorAll(".color");
colors.forEach((color) => {
  color.style.background = color.getAttribute("data-color");
});

//Filter Menu Toggle Event
const filterTriggerBtn = document.querySelector(".fa-sliders");
const filterSidebar = document.querySelector(".filter-sidebar");
const bgFilter = document.querySelector(".bgFilter");

filterTriggerBtn.addEventListener("click", () => {
  filterSidebar.classList.add("active");
  bgFilter.classList.add("active");
});

const filterRemoveBtn = document.querySelector(".filter-sidebar h4 .fa-x");
filterRemoveBtn.addEventListener("click", () => {
  filterSidebar.classList.remove("active");
  bgFilter.classList.remove("active");
});

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
    const keyword = params.get("searchBar");
    const cateSearch = params.get("search_type");
    const filteredKeyword = params.get("searchBar").toLowerCase().trim();

    const searchKey = document.querySelector(".products-heading h4");
    searchKey.innerText = `'${keyword}'에 대한 검색결과`;

    const categoryFilters = document.querySelectorAll(
      ".categories li  div span"
    );

    categoryFilters.forEach((filter, index) => {
      filter.addEventListener("click", () => {
        if (index === 0) {
          location.href = `search.html?searchBar=${keyword}`;
        } else {
          location.href = `search.html?searchBar=${keyword}&search_type=${filter.innerText}`;
        }
      });
    });

    //Filter out the Items that matches the Search Query
    let searchProducts = products.data.filter((product) => {
      return (
        product.name.toLowerCase().includes(filteredKeyword) ||
        product.category.toLowerCase().includes(filteredKeyword) ||
        product.detail["category-path"].some((path) =>
          path.toLowerCase().includes(filteredKeyword)
        ) ||
        product.detail.brands.toLowerCase().includes(filteredKeyword) ||
        product.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(filteredKeyword) ||
        product.category
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(filteredKeyword) ||
        product.detail.brands
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(filteredKeyword)
      );
    });

    if (cateSearch) {
      const domCategoriesFilter = [
        ...document.querySelectorAll(".categories div span"),
      ];
      let matchedCate;
      domCategoriesFilter.forEach((filter) => {
        filter.parentElement.parentElement.classList.remove("active");
        matchedCate = domCategoriesFilter.find(
          (cate) => cate.innerText === cateSearch
        );
      });
      matchedCate.parentElement.parentElement.classList.add("active");
      searchProducts = products.data.filter((product) => {
        return (
          (product.name.toLowerCase().includes(filteredKeyword) ||
            product.category.toLowerCase().includes(filteredKeyword) ||
            product.detail["category-path"].some((path) =>
              path.toLowerCase().includes(filteredKeyword)
            ) ||
            product.detail.brands.toLowerCase().includes(filteredKeyword) ||
            product.name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(filteredKeyword) ||
            product.category
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(filteredKeyword) ||
            product.detail.brands
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(filteredKeyword)) &&
          product.category === cateSearch
        );
      });
    }

    //Get all the brands data from the json file in a object structure for Set usages
    const brandsData = searchProducts.map((item) => item.detail.brands);

    const productLength = document.querySelector(".products-heading span");
    productLength.innerText = `검색결과 ${searchProducts.length}건`;

    const mobileProductLength = document.querySelector(
      ".mobile-sort-menu span"
    );

    mobileProductLength.innerText = `${searchProducts.length}건`;

    const productContent = document.querySelector(".content");

    //Calculate the height and apply it to the body for dynamic height applications
    setTimeout(() => {
      const loader = document.querySelector(".loader-box");
      loader.classList.add("active");
      const contentHeight = getComputedStyle(productContent).height;
      document.body.style.height = `${
        Number(contentHeight.replace(/[^0-9.-]+/g, "")) + 720
      }px`;
    }, 1000);

    const current = new Date();

    //Get estimated delivery dates
    const future = new Date(current);
    future.setDate(current.getDate() + 2);

    const futureMonth = future.getMonth() + 1;
    const futureDate = future.getDate();
    let futureDay = future.getDay();

    switch (futureDay) {
      case 0:
        futureDay = "일";
        break;
      case 1:
        futureDay = "월";
        break;
      case 2:
        futureDay = "화";
        break;
      case 3:
        futureDay = "수";
        break;
      case 4:
        futureDay = "목";
        break;
      case 5:
        futureDay = "금";
        break;
      case 6:
        futureDay = "토";
        break;
    }

    const brands = document.querySelectorAll(".brands li label");

    //Create Items from the Search Query
    if (searchProducts.length !== 0) {
      searchProducts.forEach((product, productIdx) => {
        const numericPrice = parseFloat(
          product.price.replace(/[^0-9.-]+/g, "")
        );
        const discount = parseFloat(product.detail.discount) / 100;
        const priceFormatter = new Intl.NumberFormat("ko-KR", {
          style: "currency",
          currency: "KRW",
        });
        const productItem = document.createElement("div");
        productItem.className = "item";
        productItem.innerHTML = `
                  <div class="img-box">
                    <img src=${product["image-url"]} alt="test" />
                  </div>
                  <span class="item-brand">${product.detail.brands}</span>
                  <span class="item-desc"> ${product.name}</span>
                  <p class="product-price">
                    <span class="item-discount"
                      >${product.detail.discount}
                      <span class="discount-price">${product.price}</span>
                    </span>
                    <span class="item-price"> ${priceFormatter.format(
                      Math.floor(
                        numericPrice - Math.abs(numericPrice * discount)
                      )
                    )}원 </span>
                    <span class="price-detail">(1개당 ${product.price}원)</span>
                  </p>
                  <span class="estimated-date"> ${futureMonth}/${futureDate}(${futureDay}) 도착 예정 </span>
                  <span class="item-reviews">리뷰 ${
                    product.detail.reviews
                  }개 <i class="fa-solid fa-star"></i> ${
          product.detail.ratings
        }</span>
                  <span class="item-points"
                    ><span class="material-symbols-outlined"> loyalty </span> 최대
                    ${Math.abs(product.detail.coupon)}원 적립</span
                  >
                `;
        productContent.appendChild(productItem);

        const setdataBrands = [...new Set(brandsData)];

        brands.forEach((brand, i) => {
          brand.innerText = setdataBrands[i];
        });

        productItem.addEventListener("click", () => {
          const url = `../detail/detail.html?category=${
            product.category
          }&name=${encodeURIComponent(product.name)}`;
          window.location.href = url;
        });
      });
    } else {
      productContent.style =
        "display : flex; justify-content : center; align-items : center; width : 100%; text-align: center; font-size : 24px";
      productContent.innerText = `죄송합니다. ${keyword}에 대한 검색결과가 존재하지 않습니다.`;
    }
  })
  .catch((err) => console.log(err));
