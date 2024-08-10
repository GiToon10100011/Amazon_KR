const fs = require("fs");

// Extensive array of product data organized by category
const productsData = [
  // 컴퓨터 (Computers)
  {
    name: "Gaming Laptop",
    brands: ["Asus", "Acer", "MSI", "Dell", "HP", "Razer"],
    category: "컴퓨터",
    images: [
      "https://m.media-amazon.com/images/I/81Ne5q2k9HL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81kJhbfHnhL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81nzxODnaJL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81V6vAIpaxL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81UgHsBA5-L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81vlA84pgdL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81jRVvMDoSL._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Mechanical Keyboard",
    brands: [
      "Logitech",
      "Razer",
      "Corsair",
      "SteelSeries",
      "Ducky",
      "Keychron",
    ],
    category: "컴퓨터",
    images: [
      "https://m.media-amazon.com/images/I/71a2LJyfFjL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71NgTOYOLTL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71sLkPuw4vL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71zgD4WxJIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71WxfIoDWSL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71gV-ybepBL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71f+7vPU8sL._AC_SL1500_.jpg",
    ],
  },
  // 예술 및 공예 (Arts & Crafts)
  {
    name: "Watercolor Paint Set",
    brands: [
      "Winsor & Newton",
      "Arteza",
      "Prang",
      "Crayola",
      "Faber-Castell",
      "Schmincke",
    ],
    category: "예술 및 공예",
    images: [
      "https://m.media-amazon.com/images/I/81gDChEc8HL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81hG8xytFcL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71PQqIb0ksL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81nb2u-7nFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Vi9f-KM8L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71RJjQblv4L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71+88bZjOqL._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Knitting Yarn Set",
    brands: [
      "Lion Brand",
      "Red Heart",
      "Bernat",
      "Caron",
      "Patons",
      "Premier Yarns",
    ],
    category: "예술 및 공예",
    images: [
      "https://m.media-amazon.com/images/I/81HgCS32ygL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81DExTOkFFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81MjgJeA7EL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81BlftuOupL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81o7zUQoJzL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81mtL7Fb1gL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81dGnsN1CFL._AC_SL1500_.jpg",
    ],
  },
  // 자동차 용품 (Automotive Accessories)
  {
    name: "Car Tire Inflator",
    brands: ["AstroAI", "EPAuto", "VIAIR", "JACO", "Audew", "Kensun"],
    category: "자동차 용품",
    images: [
      "https://m.media-amazon.com/images/I/81Kx6PfcZzL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81yCHtfXfdL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81fRynX8dbL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81W9PSdnKDL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81UMCV-wNrL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81cDyys3jEL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Xm3Lf9aLL._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Car Seat Cover",
    brands: [
      "FH Group",
      "Leader Accessories",
      "BDK",
      "Motor Trend",
      "Copap",
      "OxGord",
    ],
    category: "자동차 용품",
    images: [
      "https://m.media-amazon.com/images/I/81ZB95ZCP5L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81DiQK1UuWL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Md2kfr4WL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81yJDf3SPDL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81xE4dLVsWL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81D8a5y8hxL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Uqls6kBtL._AC_SL1500_.jpg",
    ],
  },
  // 유아 (Baby)
  {
    name: "Baby Stroller",
    brands: ["Graco", "Evenflo", "UPPAbaby", "Chicco", "Baby Jogger", "Britax"],
    category: "유아",
    images: [
      "https://m.media-amazon.com/images/I/81FY3aVQbcL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81q5CbnHnFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81ztPyViCQL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81ScTPT9lML._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81JOncvXgnL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81bYX8qzJzL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81a63tVbgwL._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Baby Monitor",
    brands: [
      "Infant Optics",
      "VTech",
      "Motorola",
      "Nanit",
      "Owlet",
      "Summer Infant",
    ],
    category: "유아",
    images: [
      "https://m.media-amazon.com/images/I/81y8fGLctnL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Fwyc5Rb5L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81cQWakgP-L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Gp59eLiaL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Em+WqL5kL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71PjHVITKeL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71xgsqGjq0L._AC_SL1500_.jpg",
    ],
  },
  // 뷰티 및 퍼스널케어 (Beauty & Personal Care)
  {
    name: "Facial Cleanser",
    brands: ["Revlon", "Neutrogena", "CeraVe", "Olay", "L'Oréal", "Clinique"],
    category: "뷰티 및 퍼스널케어",
    images: [
      "https://m.media-amazon.com/images/I/71eNswZTpUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71jsK8pAwqL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71FEIVKS+iL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71HO69fhsUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71txjEavFLL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71JxDlWqFRL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Sw5NZVYQL._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Hair Dryer",
    brands: [
      "Dyson",
      "Conair",
      "Revlon",
      "BaBylissPRO",
      "Remington",
      "Panasonic",
    ],
    category: "뷰티 및 퍼스널케어",
    images: [
      "https://m.media-amazon.com/images/I/71fWofssA6L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71MAQQr7+FL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71I2klCTO3L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71c33GxCaxL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71zU7Dr9ftL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71XO9Ta13HL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71S9TJKFmrL._AC_SL1500_.jpg",
    ],
  },
  // 여성패션 (Women's Fashion)
  {
    name: "Women's Handbag",
    brands: [
      "Michael Kors",
      "Kate Spade",
      "Coach",
      "Tory Burch",
      "Fossil",
      "Dooney & Bourke",
    ],
    category: "여성패션",
    images: [
      "https://m.media-amazon.com/images/I/71Sbkg8hz+L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71w1ZcmUZ-L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71yk7CxTsuL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Z5zHnzz1L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71J8W+lE5SL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Ed9U2FbOL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71cRYMVDm0L._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Women's Dress",
    brands: [
      "Calvin Klein",
      "Tommy Hilfiger",
      "Ralph Lauren",
      "Adrianna Papell",
      "Eliza J",
      "Kate Spade",
    ],
    category: "여성패션",
    images: [
      "https://m.media-amazon.com/images/I/71C7YgF1zRL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71WcbfdO1LL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71J4VErcYqL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71qZ1OuwNrL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71A+7tLoE9L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71I3QUSf1pL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71TtX9t5V1L._AC_SL1500_.jpg",
    ],
  },
  // 남성패션 (Men's Fashion)
  {
    name: "Men's Suit",
    brands: [
      "Hugo Boss",
      "Calvin Klein",
      "Tommy Hilfiger",
      "Ralph Lauren",
      "Kenneth Cole",
      "Perry Ellis",
    ],
    category: "남성패션",
    images: [
      "https://m.media-amazon.com/images/I/71QVtUAl2kL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71pH1xDiGjL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71BdOhTxDZL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71q4nWmXcBL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71AxavcB2ML._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71JZwX3lPPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71XZ1yxCKmL._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Men's Running Shoes",
    brands: ["Nike", "Adidas", "Asics", "New Balance", "Brooks", "Saucony"],
    category: "남성패션",
    images: [
      "https://m.media-amazon.com/images/I/81rsGHqBoVL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81swOLOc1PL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81wOFOZ0jtL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81npyD3CnsL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81QknOFWvWL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81TCD8FwYlL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81yA0TphMnL._AC_SL1500_.jpg",
    ],
  },
  // 아동용 의류 (Children's Clothing)
  {
    name: "Children's T-shirt",
    brands: [
      "Hanes",
      "Carter's",
      "Fruit of the Loom",
      "Garanimals",
      "Gerber",
      "The Children's Place",
    ],
    category: "아동용 의류",
    images: [
      "https://m.media-amazon.com/images/I/71sH3xUpOFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71qx2Y-v25L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71xbzJzMd5L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71JYB5hv0BL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71FblTA3riL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71OhU8iTWGL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71WEbJeaMPL._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Children's Winter Coat",
    brands: [
      "Columbia",
      "The North Face",
      "Patagonia",
      "Carhartt",
      "London Fog",
      "OshKosh B'Gosh",
    ],
    category: "아동용 의류",
    images: [
      "https://m.media-amazon.com/images/I/81yK7SzJcUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81hxEmUBl4L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81t5h0jZt8L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81iEY2PZjbL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81F8QFhs4-L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81QwJHBl+JL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81vZ2M9axHL._AC_SL1500_.jpg",
    ],
  },
  // 건강 및 가정용품 (Health & Household)
  {
    name: "Electric Toothbrush",
    brands: [
      "Oral-B",
      "Philips Sonicare",
      "Fairywill",
      "Colgate",
      "AquaSonic",
      "Brio",
    ],
    category: "건강 및 가정용품",
    images: [
      "https://m.media-amazon.com/images/I/71QuUMAy-GS._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71U+BtU8XtL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71AUnvXTTFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71JQinb0h+L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71pfnNClOyL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71yw5dJOSBL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71SHk6PUAeL._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Blood Pressure Monitor",
    brands: [
      "Omron",
      "iHealth",
      "Withings",
      "Beurer",
      "A&D Medical",
      "Greater Goods",
    ],
    category: "건강 및 가정용품",
    images: [
      "https://m.media-amazon.com/images/I/71VgVAAEsmL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Zq3yzn3QL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71q9PQsHn3L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71AQHQ1tFLL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71bfk5o5MEL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Fyr+Z9u9L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71a9wUkgdnL._AC_SL1500_.jpg",
    ],
  },
  // 가정 및 주방 (Home & Kitchen)
  {
    name: "Blender",
    brands: [
      "Nutribullet",
      "Vitamix",
      "Ninja",
      "Oster",
      "KitchenAid",
      "Breville",
    ],
    category: "가정 및 주방",
    images: [
      "https://m.media-amazon.com/images/I/71sCQKmgTbL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71PEPdrLqUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81c--1AQbLL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81QlddDeHoL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71IKLkLytAL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81APN2ZnpzL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71xspt1zncL._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Cookware Set",
    brands: [
      "T-fal",
      "Cuisinart",
      "Calphalon",
      "All-Clad",
      "GreenPan",
      "Le Creuset",
    ],
    category: "가정 및 주방",
    images: [
      "https://m.media-amazon.com/images/I/81CdxQ7JHmL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81z24lOpItL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81UUMnT2ltL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81-5Bz1UEUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81TRFCcyuUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81XgD6qjGxL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81jvXSPHZEL._AC_SL1500_.jpg",
    ],
  },
  // 산업용 및 과학용 (Industrial & Scientific)
  {
    name: "Digital Caliper",
    brands: ["Mitutoyo", "Neiko", "iGaging", "Fowler", "Vinca", "Starrett"],
    category: "산업용 및 과학용",
    images: [
      "https://m.media-amazon.com/images/I/71A3n46z1WL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71KDSOBxaUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71r8v8ujGzL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71q1MJDvOVL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71X4b3ZBOBL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71r+OQ4yStL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71CrlrZfZSL._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Microscope",
    brands: [
      "AmScope",
      "Celestron",
      "OMAX",
      "Swift",
      "National Geographic",
      "Carson",
    ],
    category: "산업용 및 과학용",
    images: [
      "https://m.media-amazon.com/images/I/81RyDhWYZtL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81r8dUYZrtL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71PQq5J9fBL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81w9rO6n8nL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81oFzSA4WlL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81aY8uQFznL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81kQvUYJ1qL._AC_SL1500_.jpg",
    ],
  },
  // 여행 가방 (Luggage & Travel Gear)
  {
    name: "Rolling Suitcase",
    brands: [
      "Samsonite",
      "American Tourister",
      "Travelpro",
      "Delsey",
      "SwissGear",
      "Briggs & Riley",
    ],
    category: "여행 가방",
    images: [
      "https://m.media-amazon.com/images/I/81ZRJUWwkpL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81rK1w88OAL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81BdJhUGSvL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81X2ZTq9IcL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81ZoeJPIKEL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81tBJx26mAL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81tycrCKbvL._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Travel Backpack",
    brands: [
      "Osprey",
      "The North Face",
      "Patagonia",
      "Deuter",
      "Timbuk2",
      "Eagle Creek",
    ],
    category: "여행 가방",
    images: [
      "https://m.media-amazon.com/images/I/81Mjrs9iW5L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81AV7rzzbRL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81v5eJ0TWgL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81yw4S8woTL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81K9LyJjM8L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81b6r-B3xPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81BtO6HtRxL._AC_SL1500_.jpg",
    ],
  },
  // 영화 및 TV (Movies & TV)
  {
    name: "Blu-ray Movie",
    brands: [
      "Warner Bros.",
      "Universal Pictures",
      "Disney",
      "Sony Pictures",
      "Lionsgate",
      "Paramount",
    ],
    category: "영화 및 TV",
    images: [
      "https://m.media-amazon.com/images/I/81-Dxarv4mL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81yZ2Hfu0xL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81dCv6g4CeL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81sbDW9MHML._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81HdWmfWE0L._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81lDmfIpzML._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Uo9dH5JPL._SL1500_.jpg",
    ],
  },
  {
    name: "Streaming Device",
    brands: ["Amazon", "Roku", "Google", "Apple", "NVIDIA", "TiVo"],
    category: "영화 및 TV",
    images: [
      "https://m.media-amazon.com/images/I/81qg7h8zS6L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81P03u5a-fL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81ox+vc7k3L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81WfNRRrHmL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81wCMO+M1yL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81EP8lQDlRL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81mrtrAmNLL._AC_SL1500_.jpg",
    ],
  },
  // 애왕동물 용품 (Pet Supplies)
  {
    name: "Automatic Pet Feeder",
    brands: [
      "PetSafe",
      "WOPET",
      "SureFeed",
      "Cat Mate",
      "HoneyGuaridan",
      "Arf Pets",
    ],
    category: "애왕동물 용품",
    images: [
      "https://m.media-amazon.com/images/I/71ZFOogkOEL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71NGr1VKrJL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71FyIidFT9L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71ALuZheYfL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71vdsGsJzUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71LknFZ4XEL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71V5vv7yAHL._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Pet Grooming Kit",
    brands: ["Wahl", "Andis", "Oster", "Furminator", "Hertzko", "Pet Neat"],
    category: "애왕동물 용품",
    images: [
      "https://m.media-amazon.com/images/I/81VgDS5HPuL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81p4Z6oWzuL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81BYJepK6DL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81s8QhZjK+L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Gw71ClRUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81cs2dEDmrL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81oKOBTzJBL._AC_SL1500_.jpg",
    ],
  },
  // 소프트웨어 (Software)
  {
    name: "Antivirus Software",
    brands: [
      "Norton",
      "McAfee",
      "Bitdefender",
      "Kaspersky",
      "Trend Micro",
      "Avast",
    ],
    category: "소프트웨어",
    images: [
      "https://m.media-amazon.com/images/I/81ynlz1FT7L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81uS-gud5hL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81f6V6svbsL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81u9ic2RllL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81TJr8X42LL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81E8OlJjwrL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81uIjLkh4JL._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Photo Editing Software",
    brands: ["Adobe", "Corel", "CyberLink", "DxO", "Affinity", "Skylum"],
    category: "소프트웨어",
    images: [
      "https://m.media-amazon.com/images/I/81ws09yqA8L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81e-Vyq5iUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81vZsYkmc4L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81YEmuMv+UL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Dz7jUGc6L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81HbD28jZLL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81rRY6Q-yML._AC_SL1500_.jpg",
    ],
  },
  // 스포츠 및 야외 활동 (Sports & Outdoors)
  {
    name: "Yoga Mat",
    brands: [
      "Manduka",
      "Lululemon",
      "Gaiam",
      "BalanceFrom",
      "JadeYoga",
      "Alo Yoga",
    ],
    category: "스포츠 및 야외 활동",
    images: [
      "https://m.media-amazon.com/images/I/71Sfwj1vYlL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71viQ8oKy9L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71RvQClKi6L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Wb3X8z18L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71OiwW9QFvL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71SnDejQsXL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71pME08Bd2L._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Camping Tent",
    brands: ["Coleman", "REI", "The North Face", "MSR", "Kelty", "Big Agnes"],
    category: "스포츠 및 야외 활동",
    images: [
      "https://m.media-amazon.com/images/I/81vYFuifZHL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81ElGJPeCtL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71N1yI3T0uL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/715P0vO2-KL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71AKUQQV+LL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71lT4PHsIHL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71TQL7QFHCL._AC_SL1500_.jpg",
    ],
  },
  // 공구 및 주택 개조 (Tools & Home Improvement)
  {
    name: "Power Drill",
    brands: ["DeWalt", "Makita", "Bosch", "Milwaukee", "Ryobi", "Black+Decker"],
    category: "공구 및 주택 개조",
    images: [
      "https://m.media-amazon.com/images/I/81isTbtgR9L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Th0pp7K8L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81bYTDmVcML._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81ywZkL2cvL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81ZYTqPXlML._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81X8b1QnP8L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81sCSwvC3GL._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Screwdriver Set",
    brands: [
      "Klein Tools",
      "Wiha",
      "Wera",
      "Craftsman",
      "Stanley",
      "Irwin Tools",
    ],
    category: "공구 및 주택 개조",
    images: [
      "https://m.media-amazon.com/images/I/81jzDQD4Z4L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81v2VvNjztL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81kRkFsSY4L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81yZ7Y9a5zL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81xMhRZcLfL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81uHZDFh2zL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81K9Knw0b9L._AC_SL1500_.jpg",
    ],
  },
  // 장난감 및 게임 (Toys & Games)
  {
    name: "Building Block Set",
    brands: [
      "LEGO",
      "Mega Bloks",
      "K'NEX",
      "Magna-Tiles",
      "Playmobil",
      "Melissa & Doug",
    ],
    category: "장난감 및 게임",
    images: [
      "https://m.media-amazon.com/images/I/91KwsI1hWCL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81P9j2b7zRL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81cZLOK7nhL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91U6dXp+YTL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81DCJco4RXL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91EmAH5YyHL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91xtYI8RzrL._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Board Game",
    brands: [
      "Hasbro",
      "Mattel",
      "Ravensburger",
      "Asmodee",
      "Days of Wonder",
      "CMON",
    ],
    category: "장난감 및 게임",
    images: [
      "https://m.media-amazon.com/images/I/91yAGltm+UL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91bE1XFSOIL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91X2mFqJFeL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91Oqx10HHCL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91FqAow0E2L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91LbAE4A3yL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/91EdXwSDr9L._AC_SL1500_.jpg",
    ],
  },
  // 비디오 게임 (Video Games)
  {
    name: "Video Game Console",
    brands: ["Sony", "Microsoft", "Nintendo"],
    category: "비디오 게임",
    images: [
      "https://m.media-amazon.com/images/I/81xrEy7DJeL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81LqF8KfHhL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81L2eJzLz1L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81ZK0H-p2nL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81FdfuYdzUL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81QJ1eM1lPL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81Y7n6LaCdL._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Video Game",
    brands: [
      "Sony",
      "Microsoft",
      "Nintendo",
      "Activision",
      "Electronic Arts",
      "Ubisoft",
    ],
    category: "비디오 게임",
    images: [
      "https://m.media-amazon.com/images/I/81z7G+7TzKL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81ZfCvtnTrL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81r2Xxy7stL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81nxarT2-rL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81G-2afC8ZL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81JKZ56J8SL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81ytLNzpFPL._AC_SL1500_.jpg",
    ],
  },
  // 전자 (Electronics)
  {
    name: "Smartphone",
    brands: ["Samsung", "Apple", "Google", "OnePlus", "Xiaomi", "Huawei"],
    category: "전자",
    images: [
      "https://m.media-amazon.com/images/I/71L5lksNkFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71L5lksNkFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71L5lksNkFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71L5lksNkFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71L5lksNkFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71L5lksNkFL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71L5lksNkFL._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Laptop",
    brands: ["Dell", "HP", "Lenovo", "Asus", "Acer", "Apple"],
    category: "전자",
    images: [
      "https://m.media-amazon.com/images/I/71u8eXS4ErL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71u8eXS4ErL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71u8eXS4ErL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71u8eXS4ErL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71u8eXS4ErL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71u8eXS4ErL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71u8eXS4ErL._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Wireless Earbuds",
    brands: ["Apple", "Samsung", "Sony", "Bose", "Jabra", "Anker"],
    category: "전자",
    images: [
      "https://m.media-amazon.com/images/I/71Taw0+mfNL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Taw0+mfNL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Taw0+mfNL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Taw0+mfNL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Taw0+mfNL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Taw0+mfNL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71Taw0+mfNL._AC_SL1500_.jpg",
    ],
  },
  {
    name: "Smartwatch",
    brands: ["Apple", "Samsung", "Garmin", "Fitbit", "Huawei", "Fossil"],
    category: "전자",
    images: [
      "https://m.media-amazon.com/images/I/71avpJ3Vh7L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71avpJ3Vh7L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71avpJ3Vh7L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71avpJ3Vh7L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71avpJ3Vh7L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71avpJ3Vh7L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71avpJ3Vh7L._AC_SL1500_.jpg",
    ],
  },
];

function generateProduct(i) {
  const randomProduct =
    productsData[Math.floor(Math.random() * productsData.length)];
  const randomBrand =
    randomProduct.brands[
      Math.floor(Math.random() * randomProduct.brands.length)
    ];

  return {
    name: `${randomBrand} ${randomProduct.name}`,
    price: Math.floor(Math.random() * (2000000 - 50000 + 1)) + 50000,
    category: randomProduct.category,
    "image-url": randomProduct.images[0],
    href: `https://www.amazon.com/dp/B0${Math.floor(
      100000 + Math.random() * 900000
    )}X9R6J8`,
    detail: {
      "more-img": randomProduct.images,
      "product-num": `B0${Math.floor(100000 + Math.random() * 900000)}X9R6J8`,
      "category-path": [randomProduct.category, "Best Sellers", "New Arrivals"],
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

let data = [];

for (let i = 0; i < 500; i++) {
  const product = generateProduct(i);
  data.push(product);
}

const jsonStructure = {
  data: data,
};

fs.writeFile(
  "product_data.json",
  JSON.stringify(jsonStructure, null, 2),
  "utf8",
  (err) => {
    if (err) {
      console.log("An error occurred while writing JSON to file.");
      return console.log(err);
    }
    console.log("JSON file with 500 products has been saved.");
  }
);
