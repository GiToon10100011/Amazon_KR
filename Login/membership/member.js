import "./header/header.js";

const accountValid = JSON.parse(localStorage.getItem("account")) || [];

const memberName = document.querySelector(".member-name");
const mobileMemberName = document.querySelector(".pmobile > b");
console.log(mobileMemberName);

if (accountValid) {
  memberName.innerText = accountValid.id;
  mobileMemberName.innerText = accountValid.id;
}

// Accordian Event
const firstContent = document.querySelectorAll(".accordion .content");
firstContent[0].style.display = "block";
const titles = document.querySelectorAll(".title");
titles.forEach((title) => {
  // 1. 선택된 아이템 1개가 누구인지 알게 하는 함수(모두의 액티브를 제거)
  title.addEventListener("click", () => {
    document.querySelectorAll(".content").forEach((item) => {
      item.style.display = "none";
    });

    // 2. 미선택 아이템 6개를 구별하기 위한 함수(반복문)
    titles.forEach((othertitle) => {
      if (othertitle !== title) {
        othertitle.classList.remove("active");
      }
    });

    // 4. 선택받은 아이템의 콘텐츠를 끌어오는 함수
    let content = title.nextElementSibling;

    // 3. 선택받은 애가 다시 클릭당하면 액티브 제거, 최초로 클릭받은 아이템에게는 액티브 부여
    // 5. 선택받은 아이템의 콘텐츠에 opacity값을 1로 부여해서 보여지도록 한다.
    if (title.classList.contains("active")) {
      title.classList.remove("active");
      content.style.display = "none";
    } else {
      title.classList.add("active");
      content.style.display = "block";
    }
  });
});

// 카드번호 4자리 단락회로평가
function autoTab(event) {
  const input = event.target;
  const nextInput = input.nextElementSibling;

  // 4자릿수가 모두 입력되면 포커스 자동이동
  if (input.value.length === 4 && nextInput) {
    nextInput.focus();
  }

  // 마지막 카드번호 입력 후 cvv인풋박스 활성화
  if (input.id === "cardNum4" && input.value.length === 4) {
    document.getElementById("cvv").focus();
  }
}

document.getElementById("cardNum1").addEventListener("input", autoTab);
document.getElementById("cardNum2").addEventListener("input", autoTab);
document.getElementById("cardNum3").addEventListener("input", autoTab);
document.getElementById("cardNum4").addEventListener("input", autoTab);

document.getElementById("exDate").addEventListener("input", function () {
  const input = this.value;
  const submitBtn = document.getElementById("submitBtn");

  // 날짜형식이 MM/YY임을 검증하는 정규표현식
  const datePattern = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;

  // 사용자 입력값이 형식에 옳으면 카드 등록버튼 자동 활성화
  if (datePattern.test(input)) {
    submitBtn.focus();
  }
});

// 배송정보 입력
// 사용자로부터 정보값 받기
const elZonecode = document.querySelector("#zonecode");
const elRoadAddress = document.querySelector("#roadAddress");
const elRoadAddressDetail = document.querySelector("#roadAddressDetail");
const elResults = document.querySelectorAll(".el_result");

// 주소검색창 열기
const onClickSearch = () => {
  new daum.Postcode({
    oncomplete: function (data) {
      elZonecode.setAttribute("value", data.zonecode);
      elRoadAddress.setAttribute("value", data.address);
    },
  }).open();
};

// 사용자로부터 입력받은 정보값 재확인
const register = () => {
  elResults[0].innerHTML = elZonecode.getAttribute("value");
  elResults[1].innerHTML = elRoadAddress.getAttribute("value");
  elResults[2].innerHTML = elRoadAddressDetail.getAttribute("value");
};

// 이벤트 추가
document.querySelector("#search-btn").addEventListener("click", () => {
  onClickSearch();
});
document.querySelector("#register-btn").addEventListener("click", () => {
  register();
});
elRoadAddressDetail.addEventListener("change", (e) => {
  elRoadAddressDetail.setAttribute("value", e.target.value);
});

// 성명, 휴대전화 재확인
const results = document.querySelectorAll(".el_result2");
const name = document.querySelector("#name");
const phone = document.querySelector("#num");

const register2 = () => {
  results[0].innerHTML = name.value;
  results[1].innerHTML = phone.value;
};

document.querySelector(".el_btn2").addEventListener("click", () => {
  register2();
});

// address error
const adrBtn = document.querySelector("#register-btn");

adrBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const zonecode = document.querySelector("#zonecode").value;
  const roadAddress = document.querySelector("#roadAddress").value;
  const roadAddressDetail = document.querySelector("#roadAddressDetail").value;

  let isValid = true;

  if (zonecode === "") {
    document.querySelector(".code").innerText =
      "우편번호를 올바르게 입력해주세요!";
    isValid = false;
  } else {
    document.querySelector(".code").innerText = zonecode;
  }

  if (roadAddress === "") {
    document.querySelector(".adr").innerText = "주소를 입력해주세요!";
    isValid = false;
  } else {
    document.querySelector(".adr").innerText = roadAddress;
  }

  if (roadAddressDetail === "") {
    document.querySelector(".adrDetail").innerText = "상세주소를 입력해주세요!";
    isValid = false;
  } else {
    document.querySelector(".adrDetail").innerText = roadAddressDetail;
  }
});

// name, phone error
const namePhoneBtn = document.querySelector("#register-btn2");

namePhoneBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const errorname = document.querySelector("#name").value;
  const errorphone = document.querySelector("#num").value;

  let isValid = true;

  if (errorname === "") {
    document.querySelector(".errorname").innerText =
      "성명을 올바르게 입력해주세요!";
    isValid = false;
  } else {
    document.querySelector(".errorname").innerText = errorname;
  }

  if (errorphone === "") {
    document.querySelector(".errornum").innerText =
      "휴대폰 번호를 올바르게 입력해주세요!";
    isValid = false;
  } else {
    document.querySelector(".errornum").innerText = errorphone;
  }
});

const finalSubmitBtn = document.querySelector("#finalSubmitBtn");
finalSubmitBtn.addEventListener("click", () => {
  location.href = "../final/final.html";
});

const accountShortcut = document.querySelector(".accountShortcut");
accountShortcut.style.cursor = "pointer";
accountShortcut.addEventListener("click", () => {
  location.href = `../../my/my.html`;
});
