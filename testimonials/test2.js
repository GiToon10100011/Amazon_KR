const fetch = require("node-fetch");
global.fetch = fetch;
const { createApi } = require("unsplash-js");
const fs = require("fs");

// Initialize Unsplash API
const unsplash = createApi({
  accessKey: "8rmCJ8WvgmMyDiWcZ_1T7YbRo_0OEC1OvQz39AEEMY4",
  fetch: fetch,
});

// Mapping for main categories to their middle categories
const middleCategories = {
  "전자": [
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
  "컴퓨터": [
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
  "유아": [
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
  "여성패션": [
    "의류",
    "신발",
    "보석",
    "시계",
    "핸드백",
    "액세서리",
  ],
  "남성패션": [
    "의류",
    "신발",
    "시계",
    "액세서리",
  ],
  "아동용 의류": [
    "의류",
    "신발",
    "보석",
    "시계",
    "액세서리",
    "교복",
  ],
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
  "소프트웨어": [
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

// Category to search term mapping
const categorySearchTerms = {
  "전자": "electronics",
  "컴퓨터": "computer",
  "예술 및 공예": "art craft",
  "자동차 용품": "car accessory",
  "유아": "baby product",
  "뷰티 및 퍼스널케어": "beauty product",
  "여성패션": "women fashion",
  "남성패션": "men fashion",
  "아동용 의류": "children clothing",
  "건강 및 가정용품": "health household",
  "가정 및 주방": "home kitchen",
  "산업용 및 과학용": "industrial scientific",
  "여행 가방": "luggage",
  "영화 및 TV": "movie tv",
  "애왕동물 용품": "pet supplies",
  "소프트웨어": "software",
  "스포츠 및 야외 활동": "sports outdoors",
  "공구 및 주택 개조": "tools home improvement",
  "장난감 및 게임": "toys games",
  "비디오 게임": "video games",
};

// Predefined product data for diversity
const productsData = [
  {
    name: "Gaming Laptop",
    brands: ["Asus", "Acer", "MSI", "Dell", "HP", "Razer"],
    category: "컴퓨터",
  },
  {
    name: "Mechanical Keyboard",
    brands: ["Logitech", "Razer", "Corsair", "SteelSeries", "Ducky", "Keychron"],
    category: "컴퓨터",
  },
  {
    name: "Watercolor Paint Set",
    brands: ["Winsor & Newton", "Arteza", "Prang", "Crayola", "Faber-Castell", "Schmincke"],
    category: "예술 및 공예",
  },
  {
    name: "Knitting Yarn Set",
    brands: ["Lion Brand", "Red Heart", "Bernat", "Caron", "Patons", "Premier Yarns"],
    category: "예술 및 공예",
  },
  {
    name: "Car Tire Inflator",
    brands: ["AstroAI", "EPAuto", "VIAIR", "JACO", "Audew", "Kensun"],
    category: "자동차 용품",
  },
  {
    name: "Car Seat Cover",
    brands: ["FH Group", "Leader Accessories", "BDK", "Motor Trend", "Copap", "OxGord"],
    category: "자동차 용품",
  },
  {
    name: "Baby Stroller",
    brands: ["Graco", "Evenflo", "UPPAbaby", "Chicco", "Baby Jogger", "Britax"],
    category: "유아",
  },
  {
    name: "Baby Monitor",
    brands: ["Infant Optics", "VTech", "Motorola", "Nanit", "Owlet", "Summer Infant"],
    category: "유아",
  },
  {
    name: "Facial Cleanser",
    brands: ["Revlon", "Neutrogena", "CeraVe", "Olay", "L'Oréal", "Clinique"],
    category: "뷰티 및 퍼스널케어",
  },
  {
    name: "Hair Dryer",
    brands: ["Dyson", "Conair", "Revlon", "BaBylissPRO", "Remington", "Panasonic"],
    category: "뷰티 및 퍼스널케어",
  },
  {
    name: "Women's Handbag",
    brands: ["Michael Kors", "Kate Spade", "Coach", "Tory Burch", "Fossil", "Dooney & Bourke"],
    category: "여성패션",
  },
  {
    name: "Women's Dress",
    brands: ["Calvin Klein", "Tommy Hilfiger", "Ralph Lauren", "Adrianna Papell", "Eliza J", "Kate Spade"],
    category: "여성패션",
  },
  {
    name: "Men's Suit",
    brands: ["Hugo Boss", "Calvin Klein", "Tommy Hilfiger", "Ralph Lauren", "Kenneth Cole", "Perry Ellis"],
    category: "남성패션",
  },
  {
    name: "Men's Running Shoes",
    brands: ["Nike", "Adidas", "Asics", "New Balance", "Brooks", "Saucony"],
    category: "남성패션",
  },
  {
    name: "Children's T-shirt",
    brands: ["Hanes", "Carter's", "Fruit of the Loom", "Garanimals", "Gerber", "The Children's Place"],
    category: "아동용 의류",
  },
  {
    name: "Children's Winter Coat",
    brands: ["Columbia", "The North Face", "Patagonia", "Carhartt", "London Fog", "OshKosh B'Gosh"],
    category: "아동용 의류",
  },
  {
    name: "Electric Toothbrush",
    brands: ["Oral-B", "Philips Sonicare", "Fairywill", "Colgate", "AquaSonic", "Brio"],
    category: "건강 및 가정용품",
  },
  {
    name: "Blood Pressure Monitor",
    brands: ["Omron", "iHealth", "Withings", "Beurer", "A&D Medical", "Greater Goods"],
    category: "건강 및 가정용품",
  },
  {
    name: "Blender",
    brands: ["Nutribullet", "Vitamix", "Ninja", "Oster", "KitchenAid", "Breville"],
    category: "가정 및 주방",
  },
  {
    name: "Cookware Set",
    brands: ["T-fal", "Cuisinart", "Calphalon", "All-Clad", "GreenPan", "Le Creuset"],
    category: "가정 및 주방",
  },
  {
    name: "Digital Caliper",
    brands: ["Mitutoyo", "Neiko", "iGaging", "Fowler", "Vinca", "Starrett"],
    category: "산업용 및 과학용",
  },
  {
    name: "Microscope",
    brands: ["AmScope", "Celestron", "OMAX", "Swift", "National Geographic", "Carson"],
    category: "산업용 및 과학용",
  },
  {
    name: "Rolling Suitcase",
    brands: ["Samsonite", "American Tourister", "Travelpro", "Delsey", "SwissGear", "Briggs & Riley"],
    category: "여행 가방",
  },
  {
    name: "Travel Backpack",
    brands: ["Osprey", "The North Face", "Patagonia", "Deuter", "Timbuk2", "Eagle Creek"],
    category: "여행 가방",
  },
  {
    name: "Blu-ray Movie",
    brands: ["Warner Bros.", "Universal Pictures", "Disney", "Sony Pictures", "Lionsgate", "Paramount"],
    category: "영화 및 TV",
  },
  {
    name: "Streaming Device",
    brands: ["Amazon", "Roku", "Google", "Apple", "NVIDIA", "TiVo"],
    category: "영화 및 TV",
  },
  {
    name: "Automatic Pet Feeder",
    brands: ["PetSafe", "WOPET", "SureFeed", "Cat Mate", "HoneyGuaridan", "Arf Pets"],
    category: "애왕동물 용품",
  },
  {
    name: "Pet Grooming Kit",
    brands: ["Wahl", "Andis", "Oster", "Furminator", "Hertzko", "Pet Neat"],
    category: "애왕동물 용품",
  },
  {
    name: "Antivirus Software",
    brands: ["Norton", "McAfee", "Bitdefender", "Kaspersky", "Trend Micro", "Avast"],
    category: "소프트웨어",
  },
  {
    name: "Photo Editing Software",
    brands: ["Adobe", "Corel", "CyberLink", "DxO", "Affinity", "Skylum"],
    category: "소프트웨어",
  },
  {
    name: "Yoga Mat",
    brands: ["Manduka", "Lululemon", "Gaiam", "BalanceFrom", "JadeYoga", "Alo Yoga"],
    category: "스포츠 및 야외 활동",
  },
  {
    name: "Camping Tent",
    brands: ["Coleman", "REI", "The North Face", "MSR", "Kelty", "Big Agnes"],
    category: "스포츠 및 야외 활동",
  },
  {
    name: "Power Drill",
    brands: ["DeWalt", "Makita", "Bosch", "Milwaukee", "Ryobi", "Black+Decker"],
    category: "공구 및 주택 개조",
  },
  {
    name: "Screwdriver Set",
    brands: ["Klein Tools", "Wiha", "Wera", "Craftsman", "Stanley", "Irwin Tools"],
    category: "공구 및 주택 개조",
  },
  {
    name: "Building Block Set",
    brands: ["LEGO", "Mega Bloks", "K'NEX", "Magna-Tiles", "Playmobil", "Melissa & Doug"],
    category: "장난감 및 게임",
  },
  {
    name: "Board Game",
    brands: ["Hasbro", "Mattel", "Ravensburger", "Asmodee", "Days of Wonder", "CMON"],
    category: "장난감 및 게임",
  },
  {
    name: "Video Game Console",
    brands: ["Sony", "Microsoft", "Nintendo"],
    category: "비디오 게임",
  },
  {
    name: "Video Game",
    brands: ["Sony", "Microsoft", "Nintendo", "Activision", "Electronic Arts", "Ubisoft"],
    category: "비디오 게임",
  },
  {
    name: "Smartphone",
    brands: ["Samsung", "Apple", "Google", "OnePlus", "Xiaomi", "Huawei"],
    category: "전자",
  },
  {
    name: "Laptop",
    brands: ["Dell", "HP", "Lenovo", "Asus", "Acer", "Apple"],
    category: "전자",
  },
  {
    name: "Wireless Earbuds",
    brands: ["Apple", "Samsung", "Sony", "Bose", "Jabra", "Anker"],
    category: "전자",
  },
  {
    name: "Smartwatch",
    brands: ["Apple", "Samsung", "Garmin", "Fitbit", "Huawei", "Fossil"],
    category: "전자",
  },
];

// Function to fetch images for a category
async function fetchImagesForCategory(category) {
  const searchTerm = categorySearchTerms[category] || category;
  const result = await unsplash.search.getPhotos({
    query: searchTerm,
    perPage: 10,
  });
  return result.response.results.map((photo) => photo.urls.regular);
}

// Fetch images for all categories
async function fetchAllImages() {
  const imagesByCategory = {};
  for (const category of Object.keys(categorySearchTerms)) {
    imagesByCategory[category] = await fetchImagesForCategory(category);
  }
  return imagesByCategory;
}

// Generate a product with diversity and ensure 7 images in more-img
function generateProduct(category, images) {
  const categoryProducts = productsData.filter((product) => product.category === category);
  const productData = categoryProducts[Math.floor(Math.random() * categoryProducts.length)];
  const randomBrand = productData.brands[Math.floor(Math.random() * productData.brands.length)];
  const uniqueId = Math.random().toString(36).substring(2, 7); // Generate a unique identifier
  const productName = `${randomBrand} ${productData.name} ${uniqueId}`; // Append the unique identifier to the name

  // Ensure there are at least 7 images
  let moreImages = images.slice(0, 7);
  if (moreImages.length < 7) {
    // If fewer than 7 images are available, fill the array by repeating the available images
    const placeholdersNeeded = 7 - moreImages.length;
    moreImages = moreImages.concat(images.slice(0, placeholdersNeeded));
  }

  // Select a random middle category
  const middleCategory = middleCategories[category][Math.floor(Math.random() * middleCategories[category].length)];

  return {
    name: productName,
    price: Math.floor(Math.random() * (2000000 - 50000 + 1)) + 50000,
    category: category,
    "image-url": images[Math.floor(Math.random() * images.length)],
    href: `https://example.com/product/${Math.random().toString(36).substring(7)}`,
    detail: {
      "more-img": moreImages,
      "product-num": `B0${Math.floor(100000 + Math.random() * 900000)}X9R6J8`,
      "category-path": [category, middleCategory],
      brands: randomBrand,
      discount: `-${Math.floor(Math.random() * (20 - 5 + 1)) + 5}%`,
      currency: "KRW",
      ratings: (Math.random() * (5 - 3.5) + 3.5).toFixed(1),
      reviews: Math.floor(Math.random() * 5000),
      options: ["Standard", "Pro", "Deluxe"],
      coupon: -Math.floor(Math.random() * (20000 - 1000 + 1)) + 1000,
    },
  };
}

// Main function to generate the product data
async function generateProductData() {
  const imagesByCategory = await fetchAllImages();
  let data = [];

  for (const [category, images] of Object.entries(imagesByCategory)) {
    for (let i = 0; i < 25; i++) {
      // Generate 25 products per category
      const product = generateProduct(category, images);
      data.push(product);
    }
  }

  const jsonStructure = { data: data };

  fs.writeFile(
    "product_data2.json",
    JSON.stringify(jsonStructure, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.log("An error occurred while writing JSON to file.");
        return console.log(err);
      }
      console.log("JSON file with products has been saved.");
    }
  );
}

generateProductData();
