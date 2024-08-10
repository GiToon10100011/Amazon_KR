//Ascii Art
console.log(`
  @          @@@                  @@@@          @@@           @@         @@@           @@@@@@@@@@@@@@@
              @@                   @@@          @@@           @@          @@            @@@@@@@@@@@@@@
              @@                   @@           @@@           @           @@            @@@@@@@@@@@@@@
              @@                   @             @@           @            @            @@@@@@@@@@@@@@
       @@      @                   @      @      @@@@@@      @      @      @            @@@@@@@@@@@@@@
  @@@          @     @@     @@     @@@@@         @@@@@      @@     @@@     @     @@     @@@@@  @@@@@@@
  @            @     @@     @@     @@@           @@@@       @@     @@@     @     @@     @@@@   @@@@@@@
               @     @@     @@     @@            @@@@      @@@     @@@     @     @@     @@@@   @@@@@@@
               @     @@     @@     @             @@@      @@@@     @@@     @     @@     @@@@   @      
       @@      @     @@     @@     @      @@     @@       @@@@     @@@     @     @@     @@@@          
       @@      @     @@     @@     @     @@      @@          @      @@     @     @@     @@@@          
       @       @     @@     @@     @      @                         @      @     @@     @@@@     @   @
               @     @@     @@     @                          @           @@     @@     @@@@     @   @
               @     @@     @@     @                          @@          @@     @@     @            @
               @     @@     @@     @@            @     @@@    @@         @@@     @@     @            @
  @      @@   @@     @@     @@     @@@      @@  @@@ @     ,@  @@@       @@@@     @@     @   @  @     @
  @@@@@@@@@@@.   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@.    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-         @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@       @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@        @@@@@@@@@@@@@@@@@@@@@@@@@@@@.        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@        @@@@@@@@@@@@@@@@@@@@@@@            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@             . @@@@@@@@ .            @   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@                                 @@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@                            @@@@   @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@                       -@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@.                  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`);

// Insert Header
const body = document.querySelector("#header");
body.innerHTML = `
const body = document.querySelector("#header");
    <header>
      <div class="inner">
        <div class="gnb-content">
          <nav class="gnb">
            <div class="logo_container">
              <i class="fa-solid fa-bars sideMenu-trigger-btn"></i>
              <a href="../main.html"
                ><img src="../logo/png/amazon_kr_ezen2.png" alt="logo"
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
              <div class = "ranking-container">
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
                </div>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </nav>
          <div class="icon-menu">
            <div class="items">
              <div class="item">
                <a href="../my/my.html"><i class="fa-regular fa-user"></i></a>
                <span>회원정보</span>
              </div>
              <div class="item">
                <a href="#none">
                  <span class="material-symbols-outlined"> shopping_cart </span>
                </a>
                <span>장바구니</span>
              </div>
              <div class="item">
                <a href="./my/my.html"><i class="fa-regular fa-heart"></i></a>
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
    <div class="Top">
      <a href = "#" class = "desktop-top">
        <i class="fa-solid fa-chevron-up"></i>
        <span>TOP</span>
      </a>
      <div class = "mobile-top">
        <div class = "mobile-top-menu">
        <span class="material-symbols-outlined">
        schedule
        </span>
        <a class = "mobile-top-btn" href = "#">
        <span class="material-symbols-outlined">north</span>
        </a>
        </div>
      </div>
    </div>`;

// Header

const lnb = document.querySelector(".lnb-content");

const Top = document.querySelector(".Top");

const desktopTop = document.querySelector(".desktop-top");
const mobileTop = document.querySelector(".mobile-top-btn");

const ranking = document.querySelector(".hottest-items");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  if (scroll > 60) {
    lnb.classList.add("active");
    Top.classList.add("active");
    sideMenu_trigger_alt.classList.add("active");
    ranking.classList.add("active");
    ranking.classList.add("active");
  } else {
    lnb.classList.remove("active");
    Top.classList.remove("active");
    sideMenu_trigger_alt.classList.remove("active");
    ranking.classList.remove("active");
    ranking.classList.remove("active");
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

// ranking auto scroll
let scrollIndex = 0;
let scrollLength = 0;

setInterval(() => {
  const rankingMenu = ranking.querySelector(".ranking");
  if (scrollIndex === 0) {
    rankingMenu.classList.remove("active");
  } else {
    rankingMenu.classList.add("active");
  }
  if (scrollIndex > 19) {
    scrollLength = 0;
    scrollIndex = 0;
  }
  rankingMenu.style.bottom = `${scrollLength}px`;
  scrollLength += 56;
  scrollIndex++;
  setTimeout(() => {
    rankingMenu.classList.remove("active");
  }, 200);
}, 3000);

desktopTop.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

mobileTop.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
