const searchBar = document.querySelector(".search-bar");
const searchBarInput = document.querySelector(".search-bar__input");
const searchBarIcon = document.querySelector(".search-bar__icon");

const addClass = () => {
  searchBar.classList.add("search-bar--active");
  searchBarInput.classList.add("search-bar__input--active");
  searchBarIcon.classList.add("search-bar__icon--active");
};

const removeClass = () => {
  searchBar.classList.remove("search-bar--active");
  searchBarInput.classList.remove("search-bar__input--active");
  searchBarIcon.classList.remove("search-bar__icon--active");
};

searchBar.addEventListener("mouseover", addClass);

searchBar.addEventListener("mouseout", removeClass);

document.addEventListener("click", (event) => {
  // when input targer is active, the mouseover should be disabled

  if (event.target.classList[0] === "search-bar__input") {
    searchBar.removeEventListener("mouseout", removeClass);
  } else {
    if (searchBar.classList.contains("search-bar--active")) {
      removeClass();
    }
    searchBar.addEventListener("mouseout", removeClass);
    searchBarInput.value = "";
  }
});
