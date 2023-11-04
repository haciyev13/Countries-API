let input = document.querySelector("input");
let filterSelect = document.querySelector(".filter-selected");
let filterOptions = document.querySelector(".filter-options");
let ionIcon = document.querySelector(".ion-icon");
let countryCard = document.querySelector(".country-card");
let mainContainer = document.querySelector(".main-container");

ionIcon.style.transform = "rotate(180deg)";

filterSelect.addEventListener("click", function (e) {
  if (!filterOptions.classList.contains("active")) {
    filterOptions.classList.add("active");
    ionIcon.style.transform = "rotate(0deg)";
    ionIcon.style.transition = "All .5s";
    filterOptions.style.transition = "All .9s";
  } else {
    filterOptions.classList.remove("active");
    ionIcon.style.transform = "rotate(180deg)";
  }
});

fetch("/assets/database/data.json")
  .then((res) => res.json())
  .then((datas) => {
    datas.map((data) => {
      mainContainer.innerHTML += `
      <div class="country-card">
        <div class="card-img-container">
          <img src="${data.flags.png}" alt="country-img" />
        </div>

        <div class="card-content">
          <p class="card-header">${data.name}</p>

          <div class="card-info">
            <p>Population: <span>${data.population}</span></p>
            <p>Region: <span>${data.region}</span></p>
            <p>Capital: <span>${data.capital}</span></p>
          </div>
        </div>
        </div>
        `;
    });
  });

