// header
import "./header/header.js";

// JSON 데이터 불러오기
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    // 데이터를 활용하여 원하는 작업 수행
    console.log(data);

    // 예를 들어, 데이터로 상품 목록을 생성하거나 총 가격을 계산할 수 있습니다.
  })
  .catch((error) => console.error("Error loading JSON data:", error));