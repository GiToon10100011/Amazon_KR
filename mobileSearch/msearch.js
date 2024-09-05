const createHottestItems = (json) => {
  const rankingItems = document.querySelectorAll(".ranking p");

  rankingItems.forEach((item, index) => {
    const randomIdx = Math.floor(Math.random() * 1000);
    item.innerHTML = `
    <span>${index + 1} </span> ${json[randomIdx].name}
    `;
    item.addEventListener("click", () => {
      location.href = `../detail/detail.html?name=${item.innerText
        .trim()
        .slice(2, item.innerText.length)}&category=${json[randomIdx].category}`;
    });
  });
};

fetch("./data.json")
  .then((response) => response.json())
  .then(({ data }) => {
    createHottestItems(data);
  })
  .catch((err) => console.log(err));

const recentSearchItems =
  JSON.parse(localStorage.getItem("recentSearch")) || [];

const searchBar = document.querySelector("#searchForm");

const domRecentSearchItems = document.querySelector(".recent-search-items");

if (recentSearchItems) {
  domRecentSearchItems.innerHTML = "";
  recentSearchItems.forEach(({ searched }) => {
    const searchItem = document.createElement("span");
    searchItem.innerText = searched;
    domRecentSearchItems.appendChild(searchItem);
  });
}

searchBar.addEventListener("submit", (e) => {
  const searchInput = document.querySelector("#searchBar").value;
  const localSearchItem = { searched: searchInput };
  if (searchInput) {
    recentSearchItems.push(localSearchItem);
    localStorage.setItem("recentSearch", JSON.stringify(recentSearchItems));
  }
});
