// 해당 파일은 아마존코리아의 마이페이지 스크립트 파일입니다.
// This is the myPage script file of our Amazon.KR website.

import "./header/header.js";

export const myPages = [
  "./order/order.html",
  "./wishlist/wishlist.html",
  "./points/points.html",
  "./coupon/coupon.html",
];

const mainContent = document.querySelector("main");

export const pageFrame = document.querySelector(".pageBox");

const mobilePageFrame = document.getElementById("mobile-pageBox");

const bannerMenus = document.querySelectorAll(".user-history-list li a");
const sideMenus = document.querySelectorAll(".working-list li a");

const bottomMenus = document.querySelectorAll(".mobile-navBar ul li a i");

const myShortcut = document.querySelector(".mobile-my-shortcut .fa-user");
const mySearch = document.querySelector(".mobile-search-shortcut span");

sideMenus.forEach((menu, index, arr) => {
  menu.addEventListener("click", () => {
    document.body.classList.add("active");
    mainContent.classList.add("active");
    mobilePageFrame.classList.add("active");
    myShortcut.classList.remove("active");
    mySearch.classList.remove("active");
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
    mySearch.classList.remove("active");
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
  mySearch.classList.remove("active");
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

mySearch.addEventListener("click", () => {
  mobilePageFrame.setAttribute("src", "../mobileSearch/msearch.html");
  document.body.classList.add("active");
  mainContent.classList.add("active");
  mobilePageFrame.classList.add("active");
  if (mobilePageFrame.getAttribute("src") === "./mobileSearch/msearch.html") {
    mySearch.classList.add("active");
    bottomMenus.forEach((menu) => {
      menu.classList.remove("active");
    });
  } else {
    mySearch.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  const scrollValue = window.scrollY;
  console.log(scrollValue);
  const sideMenu = document.querySelector(".profile-sideMenu");
  const myContent = document.querySelector(".pageBox");
  if (scrollValue > 350) {
    sideMenu.classList.add("fixed");
    myContent.classList.add("fixed");
    if (scrollValue > 4300) {
      sideMenu.classList.remove("fixed");
      myContent.classList.remove("fixed");
    }
  } else {
    myContent.classList.add("fixed");
    sideMenu.classList.remove("fixed");
    myContent.classList.remove("fixed");
  }
});

const params = new URLSearchParams(location.search);
const iframeSrc = params.get("iframesrc");

if (iframeSrc === "wishlist") {
  pageFrame.setAttribute("src", `./wishlist/wishlist.html`);
}
if (iframeSrc === "my") {
  pageFrame.setAttribute("src", `./wishlist/wishlist.html`);
}
