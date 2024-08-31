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

sideMenus.forEach((menu, index, arr) => {
  menu.addEventListener("click", () => {
    document.body.classList.add("active");
    mainContent.classList.add("active");
    mobilePageFrame.classList.add("active");
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

window.addEventListener("scroll", () => {
  const scrollValue = window.scrollY;
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

if (iframeSrc) {
  pageFrame.setAttribute("src", `./${iframeSrc}/${iframeSrc}.html`);
}

//image change event
const initialProfile = localStorage.getItem("profileimg");

const profileImg = document.querySelector(".profile-pic");

if (initialProfile !== null) {
  profileImg.querySelector("img").src = initialProfile;
}

profileImg.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      if (
        e.target.result.includes("jpeg") ||
        e.target.result.includes("jpg") ||
        e.target.result.includes("png") ||
        e.target.result.includes("avif") ||
        e.target.result.includes("webp")
      )
        profileImg.querySelector("img").src = e.target.result;
      else alert("올바른 파일 유형이 아닙니다.");
      localStorage.setItem("profileimg", e.target.result);
    };

    reader.readAsDataURL(file);
  }
});

