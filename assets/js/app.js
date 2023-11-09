let countryCard = document.querySelector(".country-card");
let mainContainer = document.querySelector(".main-container");
let input = document.getElementById("country");
let main = document.querySelector(".country-detail-container");
let back = document.querySelector(".link-back");
let darkModeTheme = document.querySelector(".dark-mode-theme");
let body = document.querySelector("body");

// if () {
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((datas) => {
    // console.log(datas);
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
  });
// }
  let mode = localStorage.getItem("theme");
  console.log(mode)

  if (mode==='true') {
    body.classList.add("dark-mode")
  }else{
    body.classList.remove("dark-mode")
  }
darkModeTheme.addEventListener("click", function (e) {
  e.preventDefault();

  body.classList.toggle("dark-mode");
  mode === "true"? mode="false": mode=true;
  console.log(mode);

  localStorage.setItem("theme", mode);
});
