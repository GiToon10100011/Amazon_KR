import "./header/header.js";

//like
const like = document.querySelector("#fav");
const M_like = document.querySelector("#m_heart");
const bar_like = document.querySelector("#M_fav")

like.addEventListener("click", () => {
 like.classList.toggle("active");
});

M_like.addEventListener("click", () => {
 M_like.classList.toggle("active");
});

bar_like.addEventListener("click", () => {
 bar_like.classList.toggle("active");
});

//M_share
const M_share = document.querySelector(".share")
const M_shareIC = document.querySelector("#M_shareIc")
const popup = document.querySelector(".popup")

M_share.addEventListener("click",function(){
  popup.classList.toggle("popupaction")
})


M_shareIC.addEventListener("click",function(){
  M_shareIC.classList.toggle("popupaction")
})



//count
const minus = document.querySelector(".button_minus");
const plus = document.querySelector(".button_plus");
const result = document.querySelector(".count_result");
let i = 1;
plus.addEventListener("click", () => {
  i++;
  result.textContent = `${i}`;
});
minus.addEventListener("click", () => {
  if (i > 1) {
    i--;
    result.textContent = `${i}`;
  } else {
  }
});

//main info
const imgarea = document.querySelector(".img_area")
const moreBtn = document.querySelector(".moreimg_slide")
const infoIc = document.querySelector(".info_slideic")

console.log(moreBtn, imgarea)

moreBtn.addEventListener("click",()=>{
  console.log("click")
  imgarea.classList.toggle("infomore")
  infoIc.classList.toggle("infomore")
})



//subinfo
const plusBtn1 = document.querySelector(".sub_plus_1")
const subInfoArea1 = document.querySelector(".subinfo_area_1") 
const sub_ic =document.querySelector("#sub_ic")

plusBtn1.addEventListener("click",()=>{
  subInfoArea1.classList.toggle("subinfoMore")
  sub_ic.classList.toggle("subinfoMore")
})


const plusBtn2 = document.querySelector(".sub_plus_2")
const subInfoArea2 = document.querySelector(".subinfo_area_2") 
const sub_ic2 =document.querySelector("#sub_ic2")

plusBtn2.addEventListener("click",()=>{
  subInfoArea2.classList.toggle("subinfoMore")
  sub_ic2.classList.toggle("subinfoMore")
})


const plusBtn3 = document.querySelector(".sub_plus_3")
const subInfoArea3 = document.querySelector(".subinfo_area_3") 
const sub_ic3 =document.querySelector("#sub_ic3")

plusBtn3.addEventListener("click",()=>{
  subInfoArea3.classList.toggle("subinfoMore")
  sub_ic3.classList.toggle("subinfoMore")
})

//reviw
const reviwWarpper = document.querySelector(".user_reviw_warpper")
const reviwBtn = document.querySelector(".reviw_moreslide")
const reviwIc = document.querySelector(".reviw_moreic")

reviwBtn.addEventListener("click",()=>{
  reviwWarpper.classList.toggle("reviw_more")
  reviwIc.classList.toggle("reviw_more")
  if(reviwBtn.innerText===`리뷰 더 보기`){
    reviwBtn.innerText = `리뷰 접기`
  }else{
    reviwBtn.innerText = `리뷰 더 보기`
  }
})


//reviw
const M_reviwBtn = document.querySelector(".M_more_reviw")
const M_reviwWarpper= document.querySelector(".M_user_reviw_warpper")

M_reviwBtn.addEventListener("click",()=>{

  M_reviwWarpper.classList.toggle("M_reviw_more")
  if (M_reviwBtn.innerText===`리뷰 더 보기`) {
    M_reviwBtn.innerText = `리뷰 접기`
  }else{
    M_reviwBtn.innerText = `리뷰 더 보기`
  }
})


//reviw slide
const images = ['./img/main1.jpg', './img/main2.jpg','./img/main_info3.png']; // 이미지 경로들
let currentIndex = 0;

const mainImg = document.querySelector('.main_img');
const btnLeft = document.querySelector('.mainBtn_L');
const btnRight = document.querySelector('.mainBtn_R');

// 초기 이미지 설정
mainImg.style.backgroundImage = `url(${images[currentIndex]})`;

function showImage(index) {
    mainImg.style.backgroundImage = `url(${images[index]})`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

btnRight.addEventListener('click', nextImage);
btnLeft.addEventListener('click', previousImage);
