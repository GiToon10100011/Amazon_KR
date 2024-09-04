// import translateApiKey from "../envTranslate";
// parent.window.addEventListener("load", () => {
//   document
//     .getElementById("language-select")
//     .addEventListener("change", function () {
//       const targetLanguage = this.value;

//       // 부모 문서의 모든 요소를 선택
//       const allElements = parent.document.querySelectorAll("*");

//       allElements.forEach((element) => {
//         element.childNodes.forEach((child) => {
//           if (child.nodeType === Node.TEXT_NODE) {
//             let originalText = child.nodeValue.trim();

//             // 정규표현식을 사용해 숫자와 특수기호를 제외한 문자만 추출
//             const textOnly = originalText.replace(
//               /[^a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ一-龥ぁ-ゔァ-ヴー々〆〤]/g,
//               ""
//             );

//             // 번역할 텍스트가 있을 경우에만 처리
//             if (textOnly) {
//               translateText(textOnly, targetLanguage)
//                 .then((translatedText) => {
//                   // 번역된 텍스트로 노드를 대체
//                   child.nodeValue = child.nodeValue.replace(
//                     textOnly,
//                     translatedText
//                   );
//                 })
//                 .catch((error) => {
//                   console.error("Translation error:", error);
//                 });
//             }
//           }
//         });
//       });
//     });

//   function translateText(text, targetLanguage) {
//     const apiKey = translateApiKey;

//     return fetch(
//       `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           q: text,
//           target: targetLanguage,
//         }),
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         return data.data.translations[0].translatedText;
//       });
//   }
// });

const currencyChanger = document.querySelectorAll("#currencyChanger");

const currencyValue = localStorage.getItem("currency");
if (currencyValue) {
  currencyChanger.forEach((curr) => {
    curr.value = currencyValue;
  });
}

currencyChanger.forEach((item) => {
  item.addEventListener("change", (e) => {
    const currency = e.target.value;
    localStorage.setItem("currency", currency);
    alert(`통화가 ${currency}로 변경되었습니다.`);
    parent.location.reload();
  });
});

const familySites = document.querySelectorAll("#family-site");

familySites.forEach((site) => {
  site.addEventListener("change", (e) => {
    const siteValue = e.target.value;
    if (siteValue === "member") {
      parent.location.href = `../Login/membership/${siteValue}.html`;
    } else {
      parent.location.href = `../${siteValue}/${siteValue}.html`;
    }
  });
});
