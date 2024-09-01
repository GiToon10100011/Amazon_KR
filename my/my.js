// 해당 파일은 아마존코리아의 마이페이지 스크립트 파일입니다.
// This is the myPage script file of our Amazon.KR website.

import "./header/header.js";

const myPages = [
  "./order/order.html",
  "./wishlist/wishlist.html",
  "./points/points.html",
  "./coupon/coupon.html",
];

const mediaQuery = window.matchMedia("(max-width: 768px)");

const mainContent = document.querySelector("main");

const pageFrame = document.querySelector(".pageBox");

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

const params = new URLSearchParams(location.search);
const iframeSrc = params.get("iframesrc");

let indicator;

if (iframeSrc) {
  pageFrame.setAttribute("src", `./${iframeSrc}/${iframeSrc}.html`);
  switch (iframeSrc) {
    case "wishlist":
      indicator = "관심상품";
      break;
    case "points":
      indicator = "적립금";
      break;
    case "coupon":
      indicator = "쿠폰";
      break;
  }
  sideMenus.forEach((menu) => {
    if (menu.innerText === indicator) {
      menu.classList.add("active");
    }
  });
} else {
  sideMenus[0].classList.add("active");
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

const historyItems = JSON.parse(localStorage.getItem("historyItems")) || [];

document.querySelector(".order-history").innerText = historyItems.length;

let iframeSize;

pageFrame.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.querySelector(".loader-box");
    loader.classList.add("active");
  }, 1000);
  const iframeDoc =
    pageFrame.contentDocument || pageFrame.contentWindow.document;
  if (pageFrame.getAttribute("src") === myPages[0]) {
    setTimeout(() => {
      iframeSize = iframeDoc.querySelectorAll(".orderItem").length;
    }, 1000);
  }
  if (pageFrame.getAttribute("src") === myPages[1]) {
    setTimeout(() => {
      iframeSize = iframeDoc.querySelectorAll(".wishlistItem").length;
    }, 1000);
  }
  if (pageFrame.getAttribute("src") === myPages[2]) {
    setTimeout(() => {
      iframeSize = iframeDoc.querySelectorAll(".pointsItems").length;
    }, 1000);
  }
  if (pageFrame.getAttribute("src") === myPages[3]) {
    setTimeout(() => {
      iframeSize = iframeDoc.querySelectorAll(".couponItem").length;
    }, 1000);
  }
});

if (mediaQuery.matches) {
  sideMenus.forEach((menu) => {
    menu.classList.remove("active");
  });
}

window.addEventListener("scroll", () => {
  const scrollValue = window.scrollY;
  const sideMenu = document.querySelector(".profile-sideMenu");
  const myContent = document.querySelector(".pageBox");

  if (scrollValue > 350) {
    sideMenu.classList.add("fixed");
    myContent.classList.add("fixed");
    if (scrollValue > 320 * iframeSize) {
      sideMenu.classList.remove("fixed");
      myContent.classList.remove("fixed");
    }
  } else {
    myContent.classList.add("fixed");
    sideMenu.classList.remove("fixed");
    myContent.classList.remove("fixed");
  }
});
