let countryCard = document.querySelector(".country-card");
let mainContainer = document.querySelector(".main-container");
let input = document.getElementById("country");
let main = document.querySelector(".country-detail-container");
let back = document.querySelector(".link-back");
let darkModeTheme = document.querySelector(".dark-mode-theme");
let body = document.querySelector("body");
let filterSelect = document.querySelector(".filter-selected");
let ionIcon = document.querySelector(".ion-icon");
let filterOptions = document.querySelector(".filter-options");
let filterOpt = document.querySelectorAll(".filter-option");
let inputCountries = document.getElementById("country");
let allOpt = document.querySelector("all-options");

let countriesArray = [];

let mode = localStorage.getItem("theme");
console.log(mode);
if (mode === "true") {
  body.classList.add("dark-mode");
} else {
  body.classList.remove("dark-mode");
}
darkModeTheme.addEventListener("click", function (e) {
  e.preventDefault();
  body.classList.toggle("dark-mode");
  mode === "true" ? (mode = "false") : (mode = true);
  console.log(mode);
  localStorage.setItem("theme", mode);
});

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((datas) => {
    // console.log(datas);
    countriesArray = datas;
    createCountries(datas);
  });
// }

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

filterOpt.forEach((item) => {
  item.addEventListener("click", function () {
    console.log(item);
    filterSelect.firstElementChild.textContent = item.textContent;
    filterOptions.classList.remove("active");
    ionIcon.style.transform = "rotate(180deg)";
    console.log(filterCountries(filterSelect.firstElementChild.textContent));
  });
});

function filterCountries(region) {
  mainContainer.innerHTML = "";
  fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then((res) => res.json())
    .then((datas) => {
      countriesArray = datas;
      createCountries(datas);
      allOpt.addEventListener("click", function () {
        window.location.href = "/index.html";
      });
      
    });
}

function createCountries(datas) {
  mainContainer.innerHTML = "";
  datas.map((data) => {
    let ancor = document.createElement("a");
    ancor.className = "country-card-container";
    ancor.href = `/country-details.html?name=${data.name.common}`;
    ancor.innerHTML = `
        <div class="country-card">
            <div class="card-img-container">
              <img src="${data.flags.png}" alt="country-img" />
            </div>

          <div class="card-content">
            <p class="card-header">${data.name.common}</p>

            <div class="card-info">
              <p>Population: <span>${data.population.toLocaleString(
                "en-UK"
              )}</span></p>
              <p class="region-name">Region: <span>${data.region}</span></p>
              <p>Capital: <span>${data.capital?.[0] || "None"}</span></p>
            </div>
          </div>
        </div>
        `;
    mainContainer.appendChild(ancor);
  });
}

inputCountries.addEventListener("keyup", function (e) {
  let countreisFiltered = countriesArray.filter((country) => {
    return country.name.common.toLowerCase().includes(e.target.value);
  });
  console.log(countreisFiltered);
  createCountries(countreisFiltered);
});

