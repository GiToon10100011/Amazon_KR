const currencyChanger = document.querySelectorAll("#currencyChanger");

currencyChanger.forEach((item) => {
  item.addEventListener("change", (e) => {
    const currency = e.target.value;
    localStorage.setItem("currency", currency);
  });
});
