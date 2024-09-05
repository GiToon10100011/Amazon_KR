import "./header/header.js";

const faEye = document.querySelector(".fa-eye-slash");
const pwInput = document.querySelector("#password");

faEye.addEventListener("click", () => {
  const type =
    pwInput.getAttribute("type") === "password" ? "text" : "password";
  pwInput.setAttribute("type", type);
});

// 로그인 유효성검사
const LogInBtn = document.querySelector("#loginSubmit");

LogInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  ``;

  const id = document.querySelector("#id").value;
  const pw = document.querySelector("#password").value;

  let isValid = true;

  if (id === "") {
    document.querySelector("#error_id").innerText = "아이디를 입력해주세요!";
    isValid = false;
  } else {
    document.querySelector("#error_id").innerText = "";
  }

  if (pw === "") {
    document.querySelector("#error_pw").innerText = "비밀번호를 입력해주세요!";
    isValid = false;
  } else {
    document.querySelector("#error_pw").innerText = "";
  }

  if (id && pw) {
    location.href = "../main.html";
    const loginValid = {
      id: id,
      pw: pw,
      login: true,
    };
    localStorage.setItem("account", JSON.stringify(loginValid))
  }
});

document.getElementById("id").addEventListener("input", function () {
  const idInput = this.value;
  const errorDiv = document.getElementById("error_id");
  const idPattern = /^[a-zA-Z0-9]+$/; // 영문자와 숫자만 허용

  if (!idPattern.test(idInput) && idInput !== "") {
    errorDiv.textContent = "아이디를 양식에 맞게 입력해주세요!";
  } else {
    errorDiv.textContent = "";
  }
});

// 비밀번호 fa-eye 아이콘 변경
document.getElementById("toggleIcon").addEventListener("click", function () {
  const icon = this;
  if (icon.classList.contains("fa-eye-slash")) {
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
});

// 비회원 주문조회 유효성검사
const nonMemBtn = document.querySelector("#loginSubmit");

nonMemBtn.addEventListener("click", (e) => {
  e.preventDefault();
  ``;

  const name = document.querySelector("#name").value;
  const nonMail = document.querySelector("#nonMail").value;

  let isValid = true;

  if (name === "") {
    document.querySelector("#error_name").innerText =
      "주문자명을 올바르게 입력해주세요!";
    isValid = false;
  } else {
    document.querySelector("#error_name").innerText = "";
  }

  if (nonMail === "") {
    document.querySelector("#error_mail").innerText =
      "주문조회에 사용될 이메일을 입력해주세요!";
    isValid = false;
  } else {
    document.querySelector("#error_mail").innerText = "";
  }
});

// 비회원 주문조회 이메일형식 검증 정규표현식
document.getElementById("nonMail").addEventListener("input", function () {
  const emailInput = this.value;
  const errorDiv = document.getElementById("error_mail");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput) && emailInput !== "") {
    errorDiv.innerHTML = "이메일 형식이 올바르지 않습니다!";
  } else {
    errorDiv.innerHTML = "";
    const name = document.querySelector("#name");
    nonMemBtn.addEventListener("click", () => {
      if (name.value && emailInput) location.href = "../main.html";
    });
  }
});

// 회원, 비회원 클릭시 인풋박스 변경
const btns = document.querySelectorAll("h2");
const forms = document.querySelectorAll(".middle");

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
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
    } else {
      targetContent.classList.remove("active");
    }
  });
});
