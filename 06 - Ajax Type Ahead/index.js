const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
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
  //   console.log('resss', cities)
}

if (cities != undefined) {
  const searchParam = document.getElementById("searchInput");
  searchParam.addEventListener("change", findMatches(cities));
}

function findMatches(cities) {
  console.log("im called");
  const searchVal = document.getElementById("searchInput").value;
  console.log("searchVal", searchVal);

  console.log("resss", cities);
  const filteredCities = cities.filter((cities) =>
    console.log("cities", cities)
  );
  console.log("filteredcities", filteredCities);
}

// findMatches();
