import translateApiKey from "../envTranslate.js";
document
  .getElementById("language-select")
  .addEventListener("change", function () {
    const targetLanguage = this.value;

    // 부모 문서의 Slick Slider에 접근하여 이벤트 리스너 추가
    $(parent.document)
      .find(".slick-slider")
      .on("afterChange", function (event, slick, currentSlide) {
        const slickElements = slick.$slides[currentSlide].querySelectorAll("*");
        translateElements(slickElements, targetLanguage);
      });

    // 부모 문서의 모든 요소에 접근
    const allElements = parent.document.querySelectorAll("*");
    translateElements(allElements, targetLanguage);
  });

// 요소들에 대한 번역을 수행하는 함수
function translateElements(elements, targetLanguage) {
  elements.forEach((element) => {
    if (
      element.classList.contains("material-icons") ||
      element.classList.contains("material-symbols-outlined")
    )
      return;

    element.childNodes.forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        let originalText = child.nodeValue.trim();

        // 정규표현식을 사용해 숫자와 특수기호를 제외한 문자만 추출
        const textOnly = originalText.replace(
          /[^a-zA-Z가-힣ㄱ-ㅎㅏ-ㅣ一-龥ぁ-ゔァ-ヴー々〆〤]/g,
          ""
        );

        if (textOnly) {
          translateText(textOnly, targetLanguage)
            .then((translatedText) => {
              child.nodeValue = child.nodeValue.replace(
                textOnly,
                translatedText
              );
            })
            .catch((error) => {
              console.error("Translation error:", error);
            });
        }
      }
    });
  });
}

// Google Translate API로 텍스트를 번역하는 함수
function translateText(text, targetLanguage) {
  const apiKey = translateApiKey;

  return fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: text,
        target: targetLanguage,
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return data.data.translations[0].translatedText;
    });
}

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
