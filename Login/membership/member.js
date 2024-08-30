import "../header/header.js"

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
      if(othertitle !== title) {
        othertitle.classList.remove("active");
      }
    });

    // 4. 선택받은 아이템의 콘텐츠를 끌어오는 함수
    let content = title.nextElementSibling;

    // 3. 선택받은 애가 다시 클릭당하면 액티브 제거, 최초로 클릭받은 아이템에게는 액티브 부여
    // 5. 선택받은 아이템의 콘텐츠에 opacity값을 1로 부여해서 보여지도록 한다.
    if(title.classList.contains("active")) {
      title.classList.remove("active");
      content.style.display = "none";
    } else {
      title.classList.add("active");
      content.style.display = "block";
    }
  });
});

// 배송정보 입력
// 사용자로부터 정보값 받기
  const elZonecode = document.querySelector("#zonecode");
  const elRoadAddress = document.querySelector("#roadAddress");
  const elRoadAddressDetail = document.querySelector("#roadAddressDetail");
  const elResults = document.querySelectorAll(".el_result");

  // 주소검색창 열기
  const onClickSearch = () => {
    console.log(1);
    new daum.Postcode({
      oncomplete: function (data) {
        console.log(data);
        elZonecode.setAttribute("value", data.zonecode);
        elRoadAddress.setAttribute("value", data.address);
      },
    }).open();
  };

  // 사용자로부터 입력받은 정보값 재확인
  const register = () => {
    console.log(`우편번호: ${elZonecode.getAttribute("value")}`);
    console.log(`주소: ${elRoadAddress.getAttribute("value")}`);
    console.log(`상세주소: ${elRoadAddressDetail.getAttribute("value")}`);
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
  const results = document.querySelectorAll(".el_result2")
  const name = document.querySelector("#name");
  const phone = document.querySelector("#num");

  const register2 = () => {
    console.log(`성명: ${name.value}`);
    console.log(`휴대폰번호: ${phone.value}`);
    results[0].innerHTML = name.value;
    results[1].innerHTML = phone.value;
  };

  document.querySelector(".el_btn2").addEventListener("click", () => {
    register2();
  });