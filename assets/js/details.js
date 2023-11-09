let countryName = new URLSearchParams(document.location.search).get("name");

let detailImg = document.querySelector(".details-img");
let detailtitle = document.querySelector(".detail-title");
let detailNativeName = document.querySelector(".details-native-name");
let detailPopulation = document.querySelector(".details-population");
let detailRegion = document.querySelector(".detail-region");
let detailSubRegion = document.querySelector(".detail-sub-region");
let detailCapital = document.querySelector(".detail-capital");
let detailDomain = document.querySelector(".detail-domain");
let detailcurrent = document.querySelector(".detail-current");
let detailLang = document.querySelector(".detail-lang");

fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  .then((res) => res.json())
  .then((data) => {
    data.map((country) => {
      console.log(country);
      detailImg.src = country.flags.svg;
      detailtitle.innerHTML = country.name.common;
      console.log(Object.values(country.name.nativeName));
      if (country.name.nativeName) {
        detailNativeName.innerHTML = `Native Name: <span>${
          Object.values(country.name.nativeName)[0].common
        }</span>`;
      } else {
        detailNativeName.innerHTML = `Native Name: <span>${country.name.common}</span>`;
      }
    });
  });
