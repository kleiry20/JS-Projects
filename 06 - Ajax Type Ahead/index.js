const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
// const filteredCities = [];
fetchData();
// fetch(endpoint)
//   .then((res) => res.json())
//   .then((data) => {
//     cities.push(...data);
//   });

async function fetchData() {
  const res = await fetch(endpoint);
  const result = await res.json();
  cities.push(...result);
}

// function handleChange() {
//   if (cities != undefined) {
//     const searchParam = document.getElementById("searchInput");
//     searchParam.addEventListener("change", findMatches(cities));
//   }
// }

function findMatches(searchVal, cities) {
  const filterRes = cities.filter((city) => {
    if (city.city.toLowerCase().includes(searchVal)) {
      return city;
    }
  });

  return filterRes;
}

// display function
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

function displayMatches() {
  const filteredCities = findMatches(searchInput.value, cities);
  console.log("res", filteredCities);
//   const html = filteredCities.map((place) => {
//     return `
//     <li>
//         <span class='name'>${place.city}, ${place.state}</span>
//         <span class='population'>${place.city}, ${place.state}</span>
//     </li>
//     `;
//   });
}
