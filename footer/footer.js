const currencyChanger = document.querySelectorAll("#currencyChanger");

const currencyValue = localStorage.getItem("currency");
if (currencyValue) {
  currencyChanger.forEach((curr) => {
    curr.value = currencyValue;
  });
}

currencyChanger.forEach((item) => {
  item.addEventListener("change", (e) => {
    const currency = e.target.value;
    localStorage.setItem("currency", currency);
    alert(`통화가 ${currency}로 변경되었습니다.`);
    parent.location.reload();
  });
});

const familySites = document.querySelectorAll("#family-site");

familySites.forEach((site) => {
  site.addEventListener("change", (e) => {
    const siteValue = e.target.value;
    if (siteValue === "member") {
      parent.location.href = `../Login/membership/${siteValue}.html`;
    } else{
      parent.location.href = `../${siteValue}/${siteValue}.html`;
    }
  });
});
