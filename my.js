import "./header/header.js";

const myPages = [
  "./order/order.html",
  "./wishlist/wishlist.html",
  "./points/points.html",
  "./coupon/coupon.html",
];

const pageFrame = document.querySelector(".pageBox");
console.log(pageFrame);

const bannerMenus = document.querySelectorAll(".user-history-list li a");
console.log(bannerMenus);
const sideMenus = document.querySelectorAll(".working-list li a");

sideMenus.forEach((menu, index, arr) => {
  menu.addEventListener("click", () => {
    pageFrame.setAttribute("src", myPages[index]);
    arr.forEach((el, i) => {
      if (i !== index) {
        el.classList.remove("active");
      } else {
        el.classList.add("active");
      }
    });
  });
});

bannerMenus.forEach((menu, index) => {
  menu.addEventListener("click", () => {
    if (
      menu.classList.contains("order-history") ||
      menu.classList.contains("cancel-history")
    ) {
      pageFrame.setAttribute("src", myPages[0]);
    } else {
      pageFrame.setAttribute("src", myPages[index]);
    }
  });
});
