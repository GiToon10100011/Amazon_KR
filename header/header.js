// Header

const lnb = document.querySelector(".lnb-content");

const Top = document.querySelector(".Top");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  if (scroll > 60) {
    lnb.classList.add("active");
    Top.classList.add("active");
    sideMenu_trigger_alt.classList.add("active");
  } else {
    lnb.classList.remove("active");
    Top.classList.remove("active");
    sideMenu_trigger_alt.classList.remove("active");
  }
});

// sideMenu
const sideMenu = document.querySelector(".main-sideMenu-container");
const sideMenu_trigger = document.querySelector(".category-trigger");
const sideMenu_trigger_alt = document.querySelector(".sideMenu-trigger-btn");
const sideMenu_close = document.querySelector(".menu-close-btn");

sideMenu_trigger.addEventListener("click", () => {
  sideMenu.classList.add("active");
});

sideMenu_trigger_alt.addEventListener("click", () => {
  sideMenu.classList.add("active");
});

sideMenu_close.addEventListener("click", () => {
  sideMenu.classList.remove("active")
})