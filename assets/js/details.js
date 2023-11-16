let countryName = new URLSearchParams(document.location.search).get("name");

let detailImg = document.querySelector(".details-img");
let detailtitle = document.querySelector(".detail-title");
let detailNativeName = document.querySelector(".detail-native-name");
let detailPopulation = document.querySelector(".detail-population");
let detailRegion = document.querySelector(".detail-region");
let detailSubRegion = document.querySelector(".detail-sub-region");
let detailCapital = document.querySelector(".detail-capital");
let detailDomain = document.querySelector(".detail-domain");
let detailcurrent = document.querySelector(".detail-current");
let detailLang = document.querySelector(".detail-lang");
let body = document.querySelector(".body");
let borderCountry = document.querySelector(
  ".border-countries-container"
).lastElementChild;

fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((country) => {
      console.log(country);
      detailImg.src = country.flags.svg;
      detailtitle.innerHTML = country.name.common;
      if (country.name.nativeName) {
        detailNativeName.innerHTML = `Native Name: <span>${
          Object.values(country.name.nativeName)[0].common
        }</span>`;
      } else {
        Object.values(country.name.nativeName)[0].common;
      }
      detailPopulation.innerHTML = `Population: <span>${country.population.toLocaleString()}</span>`;
      detailSubRegion.innerHTML = `Sub Region: <span>${
        country.subregion ? country.subregion : "None"
      }</span>`;
      detailRegion.innerHTML = `Region: <span>${country.region}</span>`;
      detailCapital.innerHTML = `Capital: <span>${
        country.capital?.[0] || "None"
      }</span>`;
      detailDomain.innerHTML = `Top Level Domain: <span>${country.tld}</span>`;
      // console.log(Object.values(country.currencies)[0].name);
      detailcurrent.innerHTML = `Currencies: <span>${
        Object.values(country.currencies)[0].name
      }</span>`;
      detailLang.innerHTML = `Languages: <span>${Object.values(
        country.languages
      )}</span>`;

      if (country.borders) {
        country.borders.forEach((elem) => {
          fetch(`https://restcountries.com/v3.1/alpha/${elem}`)
            .then((res) => res.json())
            .then((data) => {
              let ancorTag = document.createElement("a");
              ancorTag.href = `/country-details.html?name=${data[0].name.common}`
              ancorTag.innerHTML = data[0].name.common;
              borderCountry.appendChild(ancorTag)
            });
        });
      }
    });
  });

let local = localStorage.getItem("theme");
console.log(local);

if (local === "true") {
  body.classList.add("dark-mode");
} else {
  body.classList.remove("dark-mode");
}
