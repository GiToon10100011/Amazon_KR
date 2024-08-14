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
                    <span class="material-symbols-outlined micToggle"> mic </span>
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
                <a href="./my/my.html"><i class="fa-regular fa-user"></i></a>
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
                <li class="online-pharmacy" data-info = "&#x2022; 온라인 약국이란?&#10;&#10;온라인 약국 서비스는 집에서 간편하게 필요한 약을 주문할 수 있는 혁신적인 플랫폼입니다.&#10;&#10; 최신 기술을 활용하여 사용자는 손쉽게 약품을 검색하고 구매할 수 있으며, 안전하고 신뢰할 수 있는 배송 서비스를 제공합니다.&#10;&#10; 건강 관리의 편리함을 더하고 빠르고 효율적인 서비스로 여러분의 건강을 지원합니다. &#10;&#10;지금 바로 저희와 함께 건강한 생활을 시작해 보세요!">
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

const categories = {
  전자: [
    "엑세서리 및 용품",
    "카메라 및 사진",
    "자동차 및 엑세서리",
    "GPS 및 내비게이션",
    "헤드폰",
    "홈 오디오",
    "사무실 전자제품",
    "휴대용 오디오 및 비디오",
    "보안 및 감시",
    "서비스 플랜",
    "TV 및 비디오",
    "비디오 게임 콘솔 및 액세서리",
    "비디오 프로젝터",
    "웨어러블 테크 제품",
    "전자책 리더 및 액세서리",
  ],
  컴퓨터: [
    "컴퓨터 액세서리 및 주변기기",
    "컴퓨터 구성품",
    "컴퓨터 및 태블릿",
    "데이터 스토리지",
    "외부 구성 요소",
    "랩톱 액세서리",
    "모니터",
    "네트워킹 제품",
    "멀티 탭 및 서지 방지기",
    "프린터",
    "스캐너",
    "서버",
    "태블릿 액세서리",
    "태블릿 부품(교체용)",
    "품질보증 및 서비스",
  ],
  "예술 및 공예": [
    "회화, 드로잉 및 미술 용품",
    "비즈 및 주얼리 제작",
    "공예",
    "직물",
    "직물 장식",
    "뜨개질 및 코바늘 뜨개질",
    "바느질",
    "정리, 수납, 운반",
    "판화",
    "스크랩북 제작 및 스탬핑",
    "바느질",
    "파티 장식 및 용품",
    "선물 포장 용품",
  ],
  "자동차 용품": [
    "자동차 관리",
    "자동차 전자기기 및 액세서리",
    "실회용품 액세서리",
    "램프 및 조명 액세서리",
    "오토바이 및 파워스포츠 차량 용품",
    "오일 및 유체",
    "페인트 및 도장용품",
    "퍼포먼스 부품 및 액세서리",
    "교체용 부품",
    "RV 부품 및 액세서리",
    "타이어 및 휠",
    "공구 및 장비",
    "자동차 매니아용 상품",
    "대형차 및 상용차 장비",
  ],
  유아: [
    "놀이 및 오락",
    "의류 및 액세서리",
    "유아 및 아기 장난감",
    "유아",
    "아기 문구류",
    "카 시트 및 액세서리",
    "기저귀",
    "수유",
    "기프트",
    "유아용",
    "배변 훈련",
    "임신 및 임산부",
    "안전",
    "유모차 및 액세서리",
    "여행 용품",
  ],
  "뷰티 및 퍼스널케어": [
    "메이크업",
    "스킨 케어",
    "헤어 케어",
    "향수",
    "풋, 핸드 및 네일 케어",
    "도구 및 액세서리",
    "면도 및 제모",
    "퍼스널 케어",
    "구강 케어",
  ],
  여성패션: ["의류", "신발", "보석", "시계", "핸드백", "액세서리"],
  남성패션: ["의류", "신발", "시계", "액세서리"],
  "아동용 의류": ["의류", "신발", "보석", "시계", "액세서리", "교복"],
  "건강 및 가정용품": [
    "케어",
    "헬스 케어",
    "가정용품",
    "의료용품 및 장비",
    "구강 케어",
    "퍼스널 케어",
    "성 웰니스",
    "스포츠 영양",
    "문구류 및 선물 포장 제품",
    "시력 관리",
    "비타민 및 영양 보충제",
    "웰니스 및 휴식",
  ],
  "가정 및 주방": [
    "아동용품 매장",
    "주방 및 다이닝 용품",
    "침구",
    "욕실",
    "비품",
    "홈 데코",
    "벽면 장식 용품",
    "조명 및 천장 팬",
    "계절별 데코용품",
    "이벤트 및 파티 용품",
    "냉난방 및 공기 질",
    "다리미 및 스팀 건조기",
    "진공 청소용품 및 바닥 관리 용품",
    "수납 및 정리",
    "청소용품",
  ],
  "산업용 및 과학용": [
    "연마재 및 피니싱 제품",
    "적층 제조(3D 프린팅) 관련 제품",
    "상업용 도어 제품",
    "절삭 공구",
    "패스너",
    "여과",
    "외식 업소용 장비 및 용품",
    "유압, 공압 및 배관",
    "산업용 전기",
    "산업용 부속 장치",
    "산업용 전동 및 수공구",
    "일반 관리 및 위생 용품",
    "실험실 및 과학 제품",
    "재료 취급 제품",
    "작업 보건 및 안전 제품",
    "포장 및 배송 용품",
    "동력 변속기 부품",
    "전문 치과 용품",
    "전문의료 용품",
    "원자재",
    "소매점 설비 및 장비",
    "로봇 공학",
    "과학 교육",
    "테이프, 접착제 및 실런트",
    "테스트, 측정 및 검사",
  ],
  "여행 가방": [
    "캐리온",
    "백팩",
    "옷가방",
    "여행용 토트",
    "여행 가방 세트",
    "랩톱 백",
    "여행 가방",
    "아동용 러기지",
    "메신저 백",
    "우산",
    "더플",
    "여행 액세서리",
  ],
  "영화 및 TV": [
    "영화",
    "TV 프로그램",
    "블루레이",
    "4K 울트라 HD",
    "베스트셀러",
    "오늘의 딜",
    "신규 출시",
    "사전 주문",
    "어린이 및 가족",
  ],
  "애왕동물 용품": [
    "강아지",
    "고양이",
    "물고기 및 수중 애완동물",
    "조류",
    "말",
    "파충류 및 양서류",
    "소형 동물",
  ],
  소프트웨어: [
    "회계 및 재무",
    "안티바이러스 및 보안",
    "기업 및 사무소",
    "아동용",
    "디자인 및 일러스트레이션",
    "디지털 소프트웨어",
    "교육 및 참고 자료",
    "게임",
    "라이프스타일 및 취미",
    "음악",
    "네트워킹 및 서비스",
    "운영 체제",
    "사진",
    "프로그래밍 및 웹 개발",
    "세금 준비",
    "유틸리티",
    "비디오",
  ],
  "스포츠 및 야외 활동": [
    "스포츠 및 야외 활동",
    "야외 활동",
    "스포츠 및 피트니스",
  ],
  "공구 및 주택 개조": [
    "공구 및 주택 개조",
    "가전 제품",
    "건축 용품",
    "전기",
    "부속 장치",
    "주방 및 욕실 설비",
    "전구",
    "조명 및 천장 팬",
    "계량 및 레이아웃 용구",
    "도장 용품 및 벽면 처리",
    "전동 및 수공구",
    "거친 배관",
    "안전 및 보안",
    "수납용품 및 가정용 정리용품",
    "용접 및 납 땜",
  ],
  "장난감 및 게임": [
    "액션 피규어 및 조각상",
    "예술 및 공예",
    "유아 및 아기 장난감",
    "조립 장난감",
    "인형 및 액세서리",
    "드레스업 및 가상 놀이",
    "아동용 전자기기",
    "게임",
    "성인용 장난감",
    "취미",
    "아동용 가구, 데코 및 수납공간",
    "학습 및 교육",
    "이색 및 개그 토이",
    "파티용품",
    "꼭두각시",
    "퍼즐",
    "스포츠 및 실회 놀이",
    "동물 인형 및 봉제 장난감",
    "장난감 RC 및 놀이용 자동차",
    "세발 자전거, 스쿠터 및 왜건",
  ],
  "비디오 게임": [
    "비디오 게임",
    "PlayStation 4",
    "PlayStation 3",
    "Xbox One",
    "Xbox 360",
    "Nintendo Switch",
    "Wii U",
    "Wii",
    "PC",
    "Mac",
    "Nintendo 3DS 및 2DS",
    "Nintendo DS",
    "PlayStation Vita",
    "Sony PSP",
    "복고 게임 및 마이크로콘솔",
    "액세서리",
    "디지털 게임",
    "어린이 및 가족",
  ],
};

const categoriesKeys = [
  "전자",
  "컴퓨터",
  "예술 및 공예",
  "자동차 용품",
  "유아",
  "뷰티 및 퍼스널케어",
  "여성패션",
  "남성패션",
  "아동용 의류",
  "건강 및 가정용품",
  "가정 및 주방",
  "산업용 및 과학용",
  "여행 가방",
  "영화 및 TV",
  "애왕동물 용품",
  "소프트웨어",
  "스포츠 및 야외 활동",
  "공구 및 주택 개조",
  "장난감 및 게임",
  "비디오 게임",
];

const categoryItems = document.querySelectorAll(".categories-large li");

categoryItems.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    const middleCategoryItems = item.querySelector(".categories-middle");
    if(middleCategoryItems){
      middleCategoryItems.classList.add("active");
    }

    for (let i = 0; i < categories[categoriesKeys[index]].length; i++) {
      const lis = middleCategoryItems.querySelectorAll("li");
      if (lis.length < categories[categoriesKeys[index]].length) {
        const li = document.createElement("li");
        li.innerHTML = `<a>${categories[categoriesKeys[index]][i]}</a>`;
        middleCategoryItems.appendChild(li);
      } else {
        break;
      }
    }
  });

  item.addEventListener("mouseout", (e) => {
    const middleCategoryItems = item.querySelector(".categories-middle");
    if(!middleCategoryItems.contains(e.relatedTarget)){
      middleCategoryItems.classList.remove("active");
    }
  });
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

// Online pharmacy popup event
const onlinePharmacy = document.querySelector(".online-pharmacy");
const onlinePharmacyToggle = onlinePharmacy.querySelector(
  ".fa-circle-question"
);
onlinePharmacyToggle.addEventListener("click", () => {
  onlinePharmacy.classList.toggle("active");
});

//Speech Recognition Event

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Voice Recognition이 지원되지 않는 브라우저입니다.");
} else {
  const recognition = new SpeechRecognition();
  recognition.lang = "ko-KR";
  recognition.interimResults = false;

  let isRecognizing = false;

  const searchInput = document.getElementById("main-search");
  const startButton = document.querySelector(".micToggle");

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    searchInput.value = transcript;
    console.log("You said: ", transcript);
  };

  recognition.onerror = (event) => {
    console.error("Error occurred in recognition:", event.error);
  };

  startButton.addEventListener("click", () => {
    if (isRecognizing) {
      recognition.stop();
    } else {
      recognition.start();
      isRecognizing = true;
      console.log("Voice Recognition Started");
    }
  });

  recognition.onend = () => {
    isRecognizing = false;
    console.log("Speech recognition service disconnected");
  };
}

