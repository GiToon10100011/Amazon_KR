// header
import "./header/header.js";

// JSON 데이터 불러오기
fetch('data.json') // 'path/to/data.json'을 실제 파일 경로로 바꿔주세요
  .then(response => response.json())
  .then(data => {
    // 데이터를 활용하여 원하는 작업 수행
    console.log(data);

    // 예를 들어, 데이터로 상품 목록을 생성하거나 총 가격을 계산할 수 있습니다.
  })
  .catch(error => console.error('Error loading JSON data:', error));


// 홈페이지 이동
document
  .querySelector(".checkout-button")
  .addEventListener("click", function () {
    window.location.href = "cart02.html";
  });
document.querySelectorAll(".cart-change-options").forEach(function (element) {
  element.addEventListener("click", function () {
    window.location.href = "cart02.html";
  });
});

// cart price 업데이트 및 수량증가 및 감소 기능
const quantityControls = document.querySelectorAll(".cart-options-control");

// 각 수량 조정 버튼에 이벤트 리스너 추가
quantityControls.forEach((control) => {
  const minusButton = control.querySelector(".fa-minus");
  const plusButton = control.querySelector(".fa-plus");
  const quantityDisplay = control.querySelector("span");

  minusButton.addEventListener("click", () => {
    let currentQuantity = parseInt(quantityDisplay.textContent);
    if (currentQuantity > 1) {
      currentQuantity -= 1;
      quantityDisplay.textContent = currentQuantity;
      updateCartItemPrice(control, currentQuantity);
      updateTotalPrice(); // 총 가격 업데이트
    }
  });

  plusButton.addEventListener("click", () => {
    let currentQuantity = parseInt(quantityDisplay.textContent);
    currentQuantity += 1;
    quantityDisplay.textContent = currentQuantity;
    updateCartItemPrice(control, currentQuantity);
    updateTotalPrice(); // 총 가격 업데이트
  });
});

// 각 아이템의 가격을 업데이트하는 함수
function updateCartItemPrice(control, quantity) {
  const itemPriceElement = control
    .closest(".cart-item")
    .querySelector(".cart-item-price");
  const unitPrice = parseFloat(
    itemPriceElement.getAttribute("data-unit-price").replace(/[^0-9.-]+/g, "")
  );
  const newPrice = unitPrice * quantity;
  itemPriceElement.textContent = `${newPrice.toLocaleString()}원`;
}

// 총 가격 업데이트 함수
function updateTotalPrice() {
  const totalPriceElement = document.querySelectorAll("#total-price");
  let total = 0;

  document.querySelectorAll(".cart-item-price").forEach((priceElement) => {
    const itemPrice = parseFloat(
      priceElement.textContent.replace(/[^0-9.-]+/g, "")
    );
    total += itemPrice;
  });

  totalPriceElement.forEach((element) => {
    element.textContent = `${total.toLocaleString()}원`;
  });
}

// 페이지 로드 시 초기 총 가격 계산
updateTotalPrice();

// modal

// 모달창 엘리먼트 가져오기
const deleteModal = document.getElementById("deleteModal");
const confirmDeleteBtn = document.getElementById("confirmDelete");
const cancelDeleteBtn = document.getElementById("cancelDelete");
let itemToDelete = null;

// 모든 삭제 버튼(X 버튼)에 이벤트 리스너 추가
document
  .querySelectorAll(".cart-item-header span, .options-title span")
  .forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
      itemToDelete = deleteButton.closest(".cart-item"); // 삭제할 항목을 지정
      deleteModal.style.display = "block"; // 모달창 보이기
      modalBackground.style.display = "block"; // 배경 보이기
    });
  });

// 삭제 확인 버튼 클릭 시
confirmDeleteBtn.addEventListener("click", () => {
  if (itemToDelete) {
    itemToDelete.remove(); // 해당 항목 삭제
    updateTotalPrice(); // 총 가격 업데이트
    itemToDelete = null;
    deleteModal.style.display = "none"; // 모달창 숨기기
    modalBackground.style.display = "none"; // 배경 숨기기
  }
});

// 삭제 취소 버튼 클릭 시
cancelDeleteBtn.addEventListener("click", () => {
  itemToDelete = null; // 삭제 항목 초기화
  deleteModal.style.display = "none"; // 모달창 숨기기
  modalBackground.style.display = "none"; // 배경 숨기기
});

// 모달창 외부를 클릭하면 모달창 숨기기
window.addEventListener("click", (event) => {
  if (event.target === deleteModal) {
    deleteModal.style.display = "none";
    modalBackground.style.display = "none";
  }
});
