import "../header/header.js"

const faEye = document.querySelector(".fa-eye-slash");
const pwInput = document.querySelector("#password");

faEye.addEventListener("click", () => {
  const type =
  pwInput.getAttribute("type") === "password" ? "text" : "password";
  pwInput.setAttribute("type", type);
});

// 로그인 유효성 검사
// 사용자로부터 아이디와 비밀번호의 값을 받는다.
// 아이디가 공란일 경우, 알림창에 "아이디를 입력하세요!"
// 비밀번호가 공란일 경우, 알림창에 "비밀번호를 입력하세요!"
// 아이디와 비밀번호가 둘 다 공란일 경우, 알림창에 "아이디와 비밀번호를 입력하세요!"

// const id = document.querySelector("#id");
// const pw = document.querySelector("#password");

const LogInBtn = document.querySelector("#loginSubmit");

LogInBtn.addEventListener("click", (e) => {
e.preventDefault();``

  const id = document.querySelector("#id").value;
  const pw = document.querySelector("#password").value;

  let isValid = true;

  if (id === "") {
    document.querySelector("#error_id").innerText = "아이디를 입력해주세요!";
    isValid = false;
  } else {
    document.querySelector("#error_id").innerText = "";
  };

  if (pw === "") {
    document.querySelector("#error_pw").innerText = "비밀번호를 입력해주세요!";
    isValid = false;
  } else {
    document.querySelector("#error_pw").innerText = "";
  };
});


// 회원, 비회원 클릭시 인풋박스 변경
const btns = document.querySelectorAll("h2");
const forms = document.querySelectorAll(".middle");

btns.forEach((btn) => {
  btn.addEventListener("click", function() {
    btns.forEach((sibling) => {
      if (sibling !== btn) {
        sibling.classList.remove("active");
      }
    });
    this.classList.add("active");

    const form = document.querySelector(".formMiddle");
    const contents = form.querySelectorAll(".mem");

    contents.forEach((content) => {
      content.classList.remove("active");
    });

    const targetId = btn.getAttribute("data-log");
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.add("active");
    } else{
      targetContent.classList.remove("active");
    }
  });
});