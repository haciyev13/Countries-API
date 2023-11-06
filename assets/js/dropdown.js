let filterSelect = document.querySelector(".filter-selected");
let ionIcon = document.querySelector(".ion-icon");
let filterOptions = document.querySelector(".filter-options");
let filterOpt = document.querySelectorAll(".filter-option");

ionIcon.style.transform = "rotate(180deg)";

filterOpt.forEach((item) => {
  item.addEventListener("click", function () {
    console.log(item);
    filterSelect.firstElementChild.textContent = item.textContent;
    filterOptions.classList.remove("active");
    ionIcon.style.transform = "rotate(180deg)";
  });
});

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
