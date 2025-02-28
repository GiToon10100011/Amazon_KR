# 🛒 Jungle Korea - 이커머스 플랫폼 프로젝트

![Amazon Korea 메인 이미지](https://junglekoreakr1104.web.app/logo/png/amazon_kr_ezen2.png)

## 📋 프로젝트 정보

- **개발 기간**: 2024.07 ~ 2024.09
- **개발팀**: 전진우(PM, 메인페이지, 헤더&푸터, 마이페이지 담당), 박제한(상세페이지 담당), 해오름(장바구니 페이지 담당), 김예지(멤버십&로그인페이지 담당)
- **배포 주소**: [https://junglekoreakr1104.web.app](https://junglekoreakr1104.web.app)

## 🎯 프로젝트 소개

### 목적 및 용도

이 프로젝트는 세계적인 이커머스 플랫폼인 Amazon의 한국 버전 Jungle을 코딩한 웹 애플리케이션입니다. 사용자들이 상품을 검색하고, 장바구니에 담고, 결제 과정을 경험할 수 있는 종합적인 쇼핑 경험을 제공합니다. 반응형 디자인을 적용하여 모든 디바이스에서 최적의 사용자 경험을 제공합니다.

### 기술 스택

#### 프론트엔드
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)

#### 백엔드 및 인증
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

#### 기타 도구
![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)
![Kakao API](https://img.shields.io/badge/Kakao_API-FFCD00?style=for-the-badge&logo=kakao&logoColor=black)

## ✨ 주요 기능

### 1. 메인 페이지 및 카테고리 페이지

- 다이나믹한 메인 배너 슬라이더
- 카테고리별 상품 분류 및 표시
- 추천 상품 및 베스트셀러 섹션

```javascript
// src/js/main.js - 메인 배너 슬라이더 구현
const mainBanner = new Swiper('.main-banner-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// 카테고리 슬라이더 구현
const categorySlider = new Swiper('.category-slider', {
  slidesPerView: 2,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: '.category-next',
    prevEl: '.category-prev',
  },
});
```

### 2. 상품 상세 페이지

- 상품 이미지 갤러리 및 확대 기능
- 상품 정보 및 사양 표시
- 리뷰 및 평점 시스템
- 관련 상품 추천

### 3. 장바구니 및 결제 시스템

- 장바구니 상품 관리 (추가, 수량 조절, 삭제)
- 배송 정보 입력 및 주소 검색 (카카오 API 연동)
- 결제 수단 선택 및 주문 처리
- 주문 완료 및 주문 내역 확인

```javascript
// src/js/cart.js - 장바구니 기능 구현
function updateCart() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const cartContainer = document.querySelector('.cart-items-container');
  
  if (cartItems.length === 0) {
    cartContainer.innerHTML = '<div class="empty-cart">장바구니가 비어있습니다.</div>';
    return;
  }
  
  let cartHTML = '';
  let totalPrice = 0;
  
  cartItems.forEach(item => {
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;
    
    cartHTML += `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item-details">
          <h3>${item.name}</h3>
          <p class="price">₩${item.price.toLocaleString()}</p>
          <div class="quantity-controls">
            <button class="decrease-quantity">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="increase-quantity">+</button>
          </div>
        </div>
        <div class="cart-item-total">
          <p>₩${itemTotal.toLocaleString()}</p>
          <button class="remove-item">삭제</button>
        </div>
      </div>
    `;
  });
  
  cartContainer.innerHTML = cartHTML;
  document.querySelector('.cart-total-price').textContent = `₩${totalPrice.toLocaleString()}`;
  
  // 이벤트 리스너 추가
  addCartEventListeners();
}
```

### 4. 사용자 계정 관리

- 회원가입 및 로그인 기능
- 개인 정보 관리 및 수정
- 주문 내역 및 배송 상태 확인
- 위시리스트 관리

### 5. 검색 및 필터링 기능

- 키워드 검색 및 자동 완성
- 카테고리별 필터링
- 가격, 평점, 브랜드 등 다양한 필터 옵션
- 정렬 기능 (인기순, 가격순, 최신순)

### 6. 마이페이지 (사용자 계정 관리)

- 쿠폰 관리 시스템
- 주문 내역 및 배송 상태 추적
- 배송지 관리
- 개인 정보 관리
- 위시리스트 관리

```javascript
// my/coupon/coupon.js - 쿠폰 정렬 기능 구현
const sortFilter = document.querySelector(".sortFilter");
sortFilter.addEventListener("change", (e) => {
  let sortedItems;
  if (e.target.value === "recent") {
    sortedItems = [...document.querySelectorAll(".couponItem")].sort((a, b) => {
      const nameA = a
        .querySelector(".coupon-name span")
        .innerText[0].toUpperCase();
      const nameB = b
        .querySelector(".coupon-name span")
        .innerText[0].toUpperCase();

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }
  if (e.target.value === "high") {
    sortedItems = [...document.querySelectorAll(".couponItem")].sort(
      (a, b) =>
        Number(
          b.querySelector(".coupon-rate").innerText.replace(/[^0-9]/g, "")
        ) -
        Number(a.querySelector(".coupon-rate").innerText.replace(/[^0-9]/g, ""))
    );
  }
  if (e.target.value === "low") {
    sortedItems = [...document.querySelectorAll(".couponItem")].sort(
      (a, b) =>
        Number(
          a.querySelector(".coupon-rate").innerText.replace(/[^0-9]/g, "")
        ) -
        Number(b.querySelector(".coupon-rate").innerText.replace(/[^0-9]/g, ""))
    );
  }
  sortedItems.forEach((item) => {
    domCouponItems.appendChild(item);
  });
});

// my/coupon/coupon.js - 로컬 스토리지에서 쿠폰 데이터 로드
const couponItems = JSON.parse(localStorage.getItem("couponItems"));
const couponTotal = document.querySelector(".coupon-sort > span");
const domCouponItems = document.querySelector(".couponItems");

if (couponItems) {
  couponTotal.innerText = `전체 ${couponItems.length}개`;
  const current = new Date();

  //Get estimated delivery dates
  const future = new Date(current);
  future.setDate(current.getDate() + 2);

  const futureYear = future.getFullYear();
  const futureMonth = future.getMonth() + 1;
  const futureDate = future.getDate();

  domCouponItems.innerHTML = "";
  domCouponItems.style.textAlign = "";
  domCouponItems.style.lineHeight = "";
  couponItems.forEach((item) => {
    // ... 쿠폰 아이템 렌더링 ...
  });
}
```


## 📂 프로젝트 아키텍처

### 폴더 구조

```
Amazon_KR/
├── assets/               # 정적 파일
│   ├── images/           # 이미지 파일
│   ├── fonts/            # 폰트 파일
│   └── icons/            # 아이콘 파일
├── src/
│   ├── css/              # CSS 및 SCSS 파일
│   │   ├── main.scss     # 메인 스타일시트
│   │   ├── components/   # 컴포넌트별 스타일
│   │   └── pages/        # 페이지별 스타일
│   ├── js/               # JavaScript 파일
│   │   ├── main.js       # 메인 스크립트
│   │   ├── cart.js       # 장바구니 기능
│   │   ├── product.js    # 상품 관련 기능
│   │   └── auth.js       # 인증 관련 기능
│   └── data/             # JSON 데이터 파일
├── pages/                # HTML 페이지
│   ├── index.html        # 메인 페이지
│   ├── product/          # 상품 관련 페이지
│   ├── cart/             # 장바구니 관련 페이지
│   ├── account/          # 계정 관련 페이지
│   └── search/           # 검색 관련 페이지
└── firebase.json         # Firebase 설정
```

## 🚀 프로젝트 설치 및 사용 방법

```bash
# 저장소 클론
git clone https://github.com/GiToon10100011/Amazon_KR.git

# 디렉토리 이동
cd Amazon_KR

# SCSS 컴파일 및 개발 서버 실행

# 빌드 및 배포
firebase deploy
```

## 💡 배운 점

### 기술적 측면

- **모듈화된 SCSS 구조**: 유지보수가 용이한 모듈화된 SCSS 파일 구조를 설계하고 구현했습니다.
- **JavaScript 비동기 처리**: 상품 데이터 로딩 및 API 호출에서 비동기 처리 방법을 익혔습니다.
- **로컬 스토리지 활용**: 장바구니 데이터 및 사용자 설정을 로컬 스토리지에 저장하고 관리하는 방법을 학습했습니다.
- **외부 API 연동**: 카카오 우편번호 API 등 외부 서비스를 연동하는 방법을 배웠습니다.

### 디자인 측면

- **이커머스 UI/UX**: 사용자 친화적인 쇼핑 경험을 제공하는 UI/UX 디자인 패턴을 연구했습니다.
- **반응형 디자인**: 다양한 화면 크기에 대응하는 반응형 레이아웃 설계 방법을 익혔습니다.
- **마이크로 인터랙션**: 사용자 경험을 향상시키는 미세한 애니메이션과 인터랙션을 구현했습니다.

### 협업 측면

- **팀 프로젝트 관리**: 효율적인 작업 분담과 일정 관리 방법을 배웠습니다.
- **Git 워크플로우**: 팀 프로젝트에서의 효과적인 Git 브랜치 전략과 코드 리뷰 프로세스를 익혔습니다.
- **코드 컨벤션**: 일관된 코드 스타일과 명명 규칙을 통한 가독성 향상 방법을 학습했습니다.
