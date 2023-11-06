let countryCard = document.querySelector(".country-card");
let mainContainer = document.querySelector(".main-container");
let input = document.getElementById("country");
let main = document.querySelector(".country-detail-container");
let back = document.querySelector(".link-back");

fetch("/assets/database/data.json")
  .then((res) => res.json())
  .then((datas) => {
    datas.map((data) => {
      let ancor = document.createElement("a");
      ancor.className = "country-card-container";
      ancor.href = "/country-details.html";
      ancor.innerHTML = `
            <div class="country-card">
                <div class="card-img-container">
                  <img src="${data.flags.png}" alt="country-img" />
                </div>

              <div class="card-content">
                <p class="card-header">${data.name}</p>

                <div class="card-info">
                  <p>Population: <span>${data.population.toLocaleString(
                    "en-UK"
                  )}</span></p>
                  <p class="region-name">Region: <span>${data.region}</span></p>
                  <p>Capital: <span>${data.capital ?? "None"}</span></p>
                </div>
              </div>
            </div>
            `;
      mainContainer.appendChild(ancor);
    });
  });
