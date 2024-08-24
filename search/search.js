import "./header/header.js"

const colors = document.querySelectorAll(".color");
colors.forEach((color) => {
  color.style.background = color.getAttribute("data-color")
})