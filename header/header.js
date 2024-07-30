// Insert Header
const body = document.querySelector("#header");
body.innerHTML = `<div class="main-sideMenu-container">
      <div class="sideMenu-header">
        <a href="#none" class="sideMenu-login">
          <span class="material-symbols-outlined"> lock </span>
          <span>로그인하세요.</span>
        </a>
        <i class="fa-solid fa-x menu-close-btn"></i>
      </div>
      <div class="main-sideMenu">
        <div class="sideMenu-category">
          <span class="category-title">카테고리</span>
          <ul class="categories-large">
            <li>
              <span><i class="fa-regular fa-hard-drive"></i>전자</span>
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <span><i class="fa-solid fa-computer"></i>컴퓨터</span>
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <span><i class="fa-regular fa-image"></i>예술 및 공예</span>
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <span><i class="fa-solid fa-car"></i>자동차 용품</span>
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <span><i class="fa-solid fa-baby-carriage"></i>유아</span>
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <span
                ><span class="material-symbols-outlined">
                  health_and_beauty </span
                >뷰티 및 퍼스널 케어</span
              >
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-0.5 -0.5 16 16"
                  fill="currentColor"
                  id="Dress--Streamline-Phosphor"
                  height="16"
                  width="16"
                >
                  <desc>Dress Streamline Icon: https://streamlinehq.com</desc>
                  <path
                    d="M12.99317578125 13.437023437499999c-0.0019394531249999998 -0.0054375 -0.0042714843750000005 -0.010734375 -0.00697265625 -0.015837890625l-2.881705078125 -6.13725 1.298923828125 -2.0389921875c0.002548828125 -0.0036562499999999998 0.004880859375 -0.007464843750000001 0.006966796875 -0.01140234375 0.192533203125 -0.320994140625 0.192533203125 -0.721951171875 0 -1.0429394531249998 -0.005701171875 -0.010142578125000001 -0.01266796875 -0.020279296875000002 -0.019007812500000002 -0.029783203124999998l-1.357212890625 -1.9388789062500003V0.65689453125c0 -0.39020507812500005 -0.4224140625 -0.63408984375 -0.76034765625 -0.438984375 -0.15683203125 0.09055078125 -0.253447265625 0.257888671875 -0.253447265625 0.438984375v1.5473027343749999l-0.333287109375 0.416923828125c-0.608765625 0.760875 -1.7660390625 0.760875 -2.374810546875 0l-0.33328125 -0.416923828125V0.65689453125c0 -0.39020507812500005 -0.4224140625 -0.63408984375 -0.76034765625 -0.438984375 -0.15683203125 0.09055078125 -0.253447265625 0.257888671875 -0.253447265625 0.438984375v1.565044921875L3.6079863281250004 4.160818359375c-0.00633984375 0.009503906250000001 -0.013306640625 0.019640625 -0.019007812500000002 0.029783203124999998 -0.192533203125 0.32098828125 -0.192533203125 0.7219453124999999 0 1.0429394531249998 0.0020859375 0.0039375 0.00441796875 0.00774609375 0.006966796875 0.01140234375l1.298923828125 2.0389921875L2.0131640625 13.421185546875c-0.00270703125 0.005103515625 -0.005033203125 0.010400390624999999 -0.00697265625 0.015837890625 -0.28646484375000003 0.668765625 0.20388867187499998 1.4126367187500002 0.931423828125 1.4129765625h9.12413671875c0.727810546875 0.0001171875 1.2186328124999999 -0.743958984375 0.9320566406249999 -1.4129765625ZM4.458304687499999 4.712068359375l1.04103515625 -1.484572265625 0.020912109375 0.02661328125c1.01462109375 1.2688242187499998 2.944236328125 1.2688242187499998 3.9588632812499998 0l0.02090625 -0.02661328125 1.0410410156249998 1.484572265625 -1.291318359375 2.02758984375H5.750255859375ZM2.937615234375 13.836205078125l2.85573046875 -6.0827578125h3.41141015625l2.85699609375 6.0827578125Z"
                    stroke-width="1"
                  ></path>
                </svg>
                여성패션
              </span>
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <span><i class="fa-solid fa-shirt"></i>남성패션</span>
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <span><i class="fa-solid fa-baby"></i>아동용 의류</span>
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <span><i class="fa-solid fa-hospital"></i>건강 및 가정용품</span>
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <span><i class="fa-solid fa-utensils"></i>가정 및 주방</span>
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <span><i class="fa-solid fa-atom"></i>산업용 및 과학용</span>
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <span><i class="fa-solid fa-suitcase-rolling"></i>여행 가방</span>
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <span><i class="fa-solid fa-tv"></i>영화 및 TV</span>
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <span
                ><span class="material-symbols-outlined"> pet_supplies </span
                >애완동물 용품</span
              >
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <span
                ><span class="material-symbols-outlined"> terminal </span
                >소프트웨어</span
              >
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <span
                ><i class="fa-regular fa-futbol"></i>스포츠 및 야외 활동</span
              >
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <span><i class="fa-solid fa-wrench"></i>공구 및 주택 개조</span>
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <span><i class="fa-solid fa-chess"></i>장난감 및 게임</span>
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <span><i class="fa-solid fa-gamepad"></i>비디오 게임</span>
              <i class="fa-solid fa-chevron-right"></i>
            </li>
          </ul>
        </div>
        <div class="sideMenu-misc">
          <span class="misc-title"> 프로그램 및 기능 </span>
          <ul class="misc-list">
            <li>
              기프트카드
              <i class="fa-solid fa-chevron-right"></i>
            </li>
            <li><a href="#none">커뮤니티</a></li>
            <li>
              Amazon Live
              <i class="fa-solid fa-chevron-right"></i>
            </li>
          </ul>
        </div>
        <div class="sideMenu-settings">
          <span class="settings-title"> 도움말 및 설정 </span>
          <ul class="settings-list">
            <li><a href="#none">계정</a></li>
            <li>
              <a href="#none"
                ><span class="material-symbols-outlined"> language </span
                >한국어</a
              >
            </li>
            <li>
              <a href="#none"><img src="./img/flag.png" alt="" />한국</a>
            </li>
            <li class="darkmode"><a href="#none"></a></li>
            <li><a href="#none">고객서비스</a></li>
            <li><a href="#none">로그아웃</a></li>
          </ul>
        </div>
      </div>
    </div>
    <figure class="bgFilter"></figure>
    <header>
      <div class="inner">
        <div class="gnb-content">
          <nav class="gnb">
            <div class="logo_container">
              <i class="fa-solid fa-bars sideMenu-trigger-btn"></i>
              <a href=""
                ><img src="./logo/png/amazon_kr_ezen2.png" alt="logo"
              /></a>
            </div>
            <div class="searchBar">
              <form action="https://localhost:3000" method="get">
                <select name="search_type" id="search_type">
                  <option value="" selected>카테고리</option>
                  <option value="">전자</option>
                  <option value="">컴퓨터</option>
                  <option value="">예술 및 공예</option>
                  <option value="">자동차 용품</option>
                  <option value="">유아</option>
                  <option value="">뷰티 및 퍼스널 케어</option>
                  <option value="">여성 패션</option>
                  <option value="">남성 패션</option>
                  <option value="">아동용 의류</option>
                  <option value="">건강 및 가정용품</option>
                  <option value="">가정 및 주방</option>
                  <option value="">산업용 및 과학용</option>
                  <option value="">여행 가방</option>
                  <option value="">영화 및 TV</option>
                  <option value="">애완동물 용품</option>
                  <option value="">소프트웨어</option>
                  <option value="">스포츠 및 야외 활동</option>
                  <option value="">공구 및 주택 개조</option>
                  <option value="">장난감 및 게임</option>
                  <option value="">비디오 게임</option>
                </select>
                <hr class="bar" />
                <div class="inputBox">
                  <div class="inputBox first">
                    <span class="material-symbols-outlined"> mic </span>
                    <input
                      type="search"
                      name="searchBar"
                      id="main-search"
                      placeholder="찾고 싶은 상품을 검색해보세요!"
                    />
                  </div>
                  <div class="inputBox second">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                </div>
              </form>
            </div>
            <div class="hottest-items">
              <div class="ranking">
                <p><span>1 </span> 갤럭시 Z플립</p>
                <p><span>2 </span> 갤럭시 Z플립Z플립</p>
                <p><span>3 </span> 갤럭시 Z플립Z플립Z플립</p>
                <p><span>4 </span> 갤럭시 Z플립Z플립Z플립Z플립</p>
                <p><span>5 </span> 갤럭시 Z플립Z플립Z플립Z플립Z플립</p>
                <p><span>6 </span> 갤럭시 Z플립Z플립Z플립Z플립Z플립Z플립</p>
                <p>
                  <span>7 </span> 갤럭시 Z플립Z플립Z플립Z플립Z플립Z플립Z플립
                </p>
                <p>
                  <span>8 </span> 갤럭시
                  Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립
                </p>
                <p>
                  <span>9 </span> 갤럭시
                  Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립
                </p>
                <p>
                  <span>10 </span>갤럭시
                  Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립
                </p>
                <p>
                  <span>11 </span>갤럭시
                  Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립
                </p>
                <p>
                  <span>12 </span>갤럭시
                  Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립
                </p>
                <p>
                  <span>13 </span>갤럭시
                  Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립
                </p>
                <p>
                  <span>14 </span>갤럭시
                  Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립
                </p>
                <p>
                  <span>15 </span>갤럭시
                  Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립
                </p>
                <p>
                  <span>16 </span>갤럭시
                  Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립
                </p>
                <p>
                  <span>17 </span>갤럭시
                  Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립
                </p>
                <p>
                  <span>18 </span>갤럭시
                  Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립
                </p>
                <p>
                  <span>19 </span>갤럭시
                  Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립플립
                </p>
                <p>
                  <span>20 </span>갤럭시
                  Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플립Z플Z플립
                </p>
              </div>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </nav>
          <div class="icon-menu">
            <div class="items">
              <div class="item">
                <a href="#none"><i class="fa-regular fa-user"></i></a>
                <span>회원정보</span>
              </div>
              <div class="item">
                <a href="#none">
                  <span class="material-symbols-outlined"> shopping_cart </span>
                </a>
                <span>장바구니</span>
              </div>
              <div class="item">
                <a href="#none"><i class="fa-regular fa-heart"></i></a>
                <span>찜목록</span>
              </div>
            </div>
          </div>
        </div>
        <div class="banner">
          <div class="lnb-content">
            <div class="lnb-main">
              <div class="main-category-menu">
                <div class="category-trigger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span>전체 카테고리</span>
              </div>
              <ul class="lnb">
                <li><a href="#none">자주구매</a></li>
                <li><a href="#none">세일중</a></li>
                <li><a href="#none">베스트</a></li>
                <li><a href="#none">이벤트/쿠폰</a></li>
                <li><a href="#none">선물하기</a></li>
                <li><a href="#none">장보기</a></li>
                <li class="online-pharmacy">
                  <a href="#none">온라인 약국</a>
                  <i class="fa-regular fa-circle-question"></i>
                </li>
              </ul>
            </div>
            <ul class="lnb-user-menu">
              <li><a href="#none">로그인</a></li>
              <li><a href="#none">회원가입</a></li>
              <li><a href="#none">고객센터</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <a href="#" class="Top">
      <i class="fa-solid fa-chevron-up"></i>
      <span>TOP</span>
    </a>`;

// Header

const lnb = document.querySelector(".lnb-content");

const Top = document.querySelector(".Top");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  if (scroll > 60) {
    lnb.classList.add("active");
    Top.classList.add("active");
    sideMenu_trigger_alt.classList.add("active");
  } else {
    lnb.classList.remove("active");
    Top.classList.remove("active");
    sideMenu_trigger_alt.classList.remove("active");
  }
});

// sideMenu
const sideMenu = document.querySelector(".main-sideMenu-container");
const sideMenu_trigger = document.querySelector(".category-trigger");
const sideMenu_trigger_alt = document.querySelector(".sideMenu-trigger-btn");
const sideMenu_close = document.querySelector(".menu-close-btn");
const bgFilter = document.querySelector(".bgFilter");

sideMenu_trigger.addEventListener("click", () => {
  sideMenu.classList.add("active");
  bgFilter.classList.add("active");
});

sideMenu_trigger_alt.addEventListener("click", () => {
  sideMenu.classList.add("active");
  bgFilter.classList.add("active");
});

sideMenu_close.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  bgFilter.classList.remove("active");
});

bgFilter.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  bgFilter.classList.remove("active");
});
