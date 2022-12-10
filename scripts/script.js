// Import the local .json file
import data from "../data.json" assert { type: "json" }; // The value for type property must be a lowercase.

// Select all li element from the DOM
const chartStatisticsDays = document.querySelectorAll(
  ".chart__statistics__days__flex__item"
);

// for while loop
let i = 0;
let j = 0;
let k = 0;
let l = 0;

// Active state mouseover & mouseout
for (let i = 0; i < chartStatisticsDays.length; i++) {
  chartStatisticsDays[i].addEventListener("mouseover", (e) => {
    e.target.style.opacity = ".7";
  });

  chartStatisticsDays[i].addEventListener("mouseout", (e) => {
    e.target.style.opacity = "1";
  });
}

// Get the value of poperty day from local data.json
while (i < data.length) {
  while (j < chartStatisticsDays.length) {
    chartStatisticsDays[j].innerText = data[i].day;
    j++;
    i++;
  }
}

// Set the height presudo element ::after to the class chartStatisticsDays
while (k < data.length) {
  while (l < chartStatisticsDays.length) {
    chartStatisticsDays[l].style.setProperty(
      "--heightAfter",
      `${Math.floor(data[k].amount * 2.8).toString()}px`
    );

    l++;
    k++;
  }
}
