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
} else {
  domCouponItems.innerHTML = "<h1>쿠폰이 없습니다.<h1>";
  domCouponItems.style.textAlign = "center";
  domCouponItems.style.lineHeight = "150px";
}
