const domPointItems = document.querySelector(".pointsItems");
const pointDate = domPointItems.querySelector(".item-title span");
const current = new Date();
const year = current.getFullYear();
let month = current.getMonth() + 1;
let date = current.getDate();

month = month < 10 ? `0${month}` : month;
date = date < 10 ? `0${date}` : date;

pointDate.innerText = `${year}.${month}.${date}`;

fetch("../data.json")
  .then((response) => response.json())
  .then(({ data }) => {
    const pointItems = JSON.parse(localStorage.getItem("historyItems")) || [];

    const pointsData = pointItems.map((item) => {
      const localItem = data.find(
        (data) => data.name === item.name && data.detail.brands === item.brand
      );

      if (localItem) {
        return {
          ...item,
          coupon: localItem.detail.coupon,
        };
      }
    });

    if (pointItems) {
      domPointItems.innerHTML = "";
      domPointItems.style.textAlign = "";
      domPointItems.style.lineHeight = "";
      pointsData.forEach((item) => {
        const pointItem = document.createElement("div");
        pointItem.className = "pointsItem";
        pointItem.innerHTML = `
        <div class="pointsItem">
              <div class="item-content">
                <div class="item-info">
                  <p class="points-name">
                    <span>${item.name} (옵션 : ${item.options}) </span>
                    <span class="product-date">${year}.${month}.${date} ~ ${year}.${month}.${date}</span>
                  </p>
                  <div class="points-status">
                    <h4>+ ${new Intl.NumberFormat("ko-KR").format(
                      Math.abs(item.coupon) * item.quantity
                    )}원</h4>
                    <div class="points-desc">
                      <span>(적립)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `;
        domPointItems.appendChild(pointItem);
      });
      let pointValue = [];
      const totalPoints = document.querySelector(".total-points");
      const myPoints = document.querySelectorAll(".points-status h4");
      myPoints.forEach((point) => {
        pointValue.push(Number(point.innerText.replace(/[^0-9]/g, "")));
      });

      const totalMyPoints = pointValue.reduce((a, b) => a + b);

      totalPoints.innerText = `${new Intl.NumberFormat("ko-KR").format(
        totalMyPoints
      )} 원`;
    } else {
      domPointItems.innerHTML = "<h1>쿠폰이 없습니다.<h1>";
      domPointItems.style.textAlign = "center";
      domPointItems.style.lineHeight = "150px";
    }

    parentFrame.style.height = ``;
    parent.document.body.style.height = ``;

    const frameHeight = document.body.scrollHeight;

    console.log(frameHeight);

    const parentFrame = parent.document.querySelector(".pageBox");
    parentFrame.style.height = `${frameHeight}px`;
    parent.document.body.style.height = `${frameHeight + 1000}px`;
  })
  .catch((err) => console.log(err));
