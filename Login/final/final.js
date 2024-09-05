import "./header/header.js";
setTimeout(() => {
  const loader = document.querySelector(".loader-box");
  loader.classList.add("active");
}, 1000);

const finalSubmit = document.querySelector(".finalSubmit");

const membershipValid = JSON.parse(localStorage.getItem("membership")) || [];
const accountValid = JSON.parse(localStorage.getItem("account")) || [];

const finalName = document.querySelector(".final-name");
const mobileFinalName = document.querySelector(".mobile-final-name");

if (accountValid) {
  finalName.innerText = accountValid.id;
  mobileFinalName.innerText = accountValid.id;
}

if (membershipValid.id === accountValid.id) {
  finalSubmit.addEventListener("click", () => {
    alert("이미 멤버십에 가입되어있는 유저입니다.");
  });
} else {
  finalSubmit.addEventListener("click", () => {
    const localMemberItem = {
      membership: true,
      id: accountValid.id,
    };
    localStorage.setItem("membership", JSON.stringify(localMemberItem));
  });
}
