const radioBtns = document.querySelectorAll(".radioBtns input[type = 'radio']");
const calendarBtns = document.querySelectorAll(
  ".calendarFilter input[type = 'date']"
);

calendarBtns.forEach((btn) => {
  btn.addEventListener("change", () => {
    radioBtns.forEach((radio) => {
      radio.checked = false;
    });
    btn.classList.add("active");
  });
});

radioBtns.forEach((radio) => {
  radio.addEventListener("click", () => {
    calendarBtns.forEach((btn) => {
      btn.classList.remove("active");
      btn.value = "";
    });
  });
});
