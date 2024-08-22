// header
import "./header/header.js";

// 홈페이지 이동
document
  .querySelector(".checkout-button")
  .addEventListener("click", function () {
    window.location.href = "cart02.html";
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
      quantityDisplay.textContent = currentQuantity - 1;
      updateCartItemPrice(control, currentQuantity - 1);
    }
  });

  plusButton.addEventListener("click", () => {
    let currentQuantity = parseInt(quantityDisplay.textContent);
    quantityDisplay.textContent = currentQuantity + 1;
    updateCartItemPrice(control, currentQuantity + 1);
  });
});

// 각 아이템의 가격을 업데이트하는 함수
function updateCartItemPrice(control, quantity) {
  const itemPriceElement = control
    .closest(".cart-item")
    .querySelector(".cart-item-price");
  const unitPrice = parseFloat(
    itemPriceElement.getAttribute("data-unit-price")
  );
  const newPrice = unitPrice * quantity;
  itemPriceElement.textContent = newPrice.toLocaleString() + "원";
}

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
