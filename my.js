import "./header/header.js";

const myPages = [
  "./order/order.html",
  "./wishlist/wishlist.html",
  "./points/points.html",
  "./coupon/coupon.html",
];

const mainContent = document.querySelector("main");

const pageFrame = document.querySelector(".pageBox");

const mobilePageFrame = document.getElementById("mobile-pageBox");

const bannerMenus = document.querySelectorAll(".user-history-list li a");
const sideMenus = document.querySelectorAll(".working-list li a");

const myShortcut = document.querySelector(".mobile-my-shortcut .fa-user");
console.log(myShortcut);

sideMenus.forEach((menu, index, arr) => {
  menu.addEventListener("click", () => {
    document.body.classList.add("active");
    mainContent.classList.add("active");
    mobilePageFrame.classList.add("active");
    myShortcut.classList.remove("active");
    pageFrame.setAttribute("src", myPages[index]);
    mobilePageFrame.setAttribute("src", myPages[index]);
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
    document.body.classList.add("active");
    mainContent.classList.add("active");
    mobilePageFrame.classList.add("active");
    myShortcut.classList.remove("active");
    sideMenus.forEach((el, i) => {
      if (i !== index) {
        el.classList.remove("active");
      } else if (
        menu.classList.contains("order-history") ||
        menu.classList.contains("cancel-history")
      ) {
        sideMenus[0].classList.add("active");
      } else {
        el.classList.add("active");
      }
    });
    if (
      menu.classList.contains("order-history") ||
      menu.classList.contains("cancel-history")
    ) {
      pageFrame.setAttribute("src", myPages[0]);
      mobilePageFrame.setAttribute("src", myPages[0]);
    } else {
      pageFrame.setAttribute("src", myPages[index]);
      mobilePageFrame.setAttribute("src", myPages[index]);
    }
  });
});

myShortcut.addEventListener("click", () => {
  document.body.classList.remove("active");
  mainContent.classList.remove("active");
  mobilePageFrame.classList.remove("active");
  myShortcut.classList.add("active");
  sideMenus.forEach((menu) => {
    menu.classList.remove("active");
  });
  // location.reload();
});

if (
  !mainContent.classList.contains("active") ||
  !mobilePageFrame.classList.contains("active")
) {
  myShortcut.classList.add("active");
} 
