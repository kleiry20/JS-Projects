const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
fetchData();

async function fetchData() {
  const res = await fetch(endpoint);
  const result = await res.json();
  cities.push(...result);
}

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

  const html = filteredCities
    .map((place) => {
      //   to highlight the search text in the results with yellow bg, use regex
      //   gi =  global insensitive(uppercase or lowercase)
      const regex = new RegExp(searchInput.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${searchInput.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${searchInput.value}</span>`
      );

      return `
    <li>
        <span class='name'>${cityName}, ${stateName}</span>
        <span class='population'>${parseInt(
          place.population
        ).toLocaleString()}</span>
    </li>
    `;
    })
    .join("");

  suggestions.innerHTML = html;
}
