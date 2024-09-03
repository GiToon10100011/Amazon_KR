const mediaQuery = window.matchMedia("(max-width: 768px)");
const couponItems = JSON.parse(localStorage.getItem("couponItems"));
const couponTotal = document.querySelector(".coupon-sort > span");
const domCouponItems = document.querySelector(".couponItems");

if (couponItems) {
  couponTotal.innerText = `전체 ${couponItems.length}개`;
  const current = new Date();

  //Get estimated delivery dates
  const future = new Date(current);
  future.setDate(current.getDate() + 2);

  const futureYear = future.getFullYear();
  const futureMonth = future.getMonth() + 1;
  const futureDate = future.getDate();

  domCouponItems.innerHTML = "";
  domCouponItems.style.textAlign = "";
  domCouponItems.style.lineHeight = "";
  couponItems.forEach((item) => {
    const couponItem = document.createElement("div");
    couponItem.className = "couponItem";
    couponItem.innerHTML = `
      <div class="item-content">
            <div class="item-info">
              <span class="coupon-rate"> ${item.discounts} </span>
              <p class="coupon-name">
                <span
                  >${item.name}
                </span>
              </p>
              <div class="coupon-desc">
                <span>${futureYear}.${futureMonth}.${futureDate} 까지</span>
                <span class = "couponValidItems">적용상품</span>
              </div>
            </div>
          </div>
    `;

    domCouponItems.appendChild(couponItem);
  });

  const couponValidItems = document.querySelectorAll(".couponValidItems");
  couponValidItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const validItem =
        e.target.parentElement.parentElement.querySelector(
          ".coupon-name span"
        ).innerText;
      parent.location.href = `../../search/search.html?searchBar=${validItem}`;
    });
  });
} else {
  domCouponItems.innerHTML = "<h1>쿠폰이 없습니다.<h1>";
  domCouponItems.style.textAlign = "center";
  domCouponItems.style.lineHeight = "150px";
}

console.log(
  document.querySelector(".coupon-rate").innerText.replace(/[^0-9]/g, "")
);
const sortFilter = document.querySelector(".sortFilter");
sortFilter.addEventListener("change", (e) => {
  let sortedItems;
  if (e.target.value === "recent") {
    sortedItems = [...document.querySelectorAll(".couponItem")].sort((a, b) => {
      const nameA = a
        .querySelector(".coupon-name span")
        .innerText[0].toUpperCase();
      const nameB = b
        .querySelector(".coupon-name span")
        .innerText[0].toUpperCase();

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }
  if (e.target.value === "high") {
    sortedItems = [...document.querySelectorAll(".couponItem")].sort(
      (a, b) =>
        Number(
          b.querySelector(".coupon-rate").innerText.replace(/[^0-9]/g, "")
        ) -
        Number(a.querySelector(".coupon-rate").innerText.replace(/[^0-9]/g, ""))
    );
  }
  if (e.target.value === "low") {
    sortedItems = [...document.querySelectorAll(".couponItem")].sort(
      (a, b) =>
        Number(
          a.querySelector(".coupon-rate").innerText.replace(/[^0-9]/g, "")
        ) -
        Number(b.querySelector(".coupon-rate").innerText.replace(/[^0-9]/g, ""))
    );
  }
  console.log(sortedItems);
  sortedItems.forEach((item) => {
    domCouponItems.appendChild(item);
  });
});
const parentFrame = parent.document.querySelector(".pageBox");
const parentMain = parent.document.querySelector("main");

const frameHeight = document.body.scrollHeight;

console.log(frameHeight);

if (frameHeight) {
  if (!mediaQuery.matches) {
    parentFrame.style.height = `${frameHeight}px`;
    parentMain.style.height = `${frameHeight + 1000}px`;
    parent.document.body.style.height = `${frameHeight}px`;
  }
}
