// Fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//         Simplifies asynchronous data fetching in JavaScript and
//         used for interacting with APIs to retrieve and send
//         data asynchronously over the web.
//         fetch(url, {options})

//  -----------------------------------------

//   basic fetch api example
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("could not find response");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.name))
//   .catch((error) => console.error(error));

// -----------------------------------------

// fetch with async and await
async function fetchData() {
  const pokemonName = document
    .getElementById("pokemon-name")
    .value.toLowerCase();

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not find the pokemon. Try again!");
    }
    const data = await response.json();

    // filter the response object
    const result = {
      name: data.name,
      id: data.id,
      experience: data.base_experience,
      moves: data.moves[0].move.name,
      front_default: data.sprites.front_default,
      front_shiny: data.sprites.front_shiny,
      back_default: data.sprites.back_default,
      back_shiny: data.sprites.back_shiny,
      species: data.species.name,
      type: data.types[0].type.name,
      audio: data.cries.latest,
    };

    // call display function
    displayPokemon(result, data);
  } catch (error) {
    ErrorMessage();
    console.error(error);
  }
}

const displayPokemon = (result, data) => {
  const vowelCheck = result.type.charAt(0);
  // console.log
  console.log("result pokemon-->", result, vowelCheck);
  let article = isVowel(vowelCheck);
  function isVowel(vowelCheck) {
    const vowels = ["a", "e", "i", "o", "u", "E"];
    for (let i = 0; i < vowels.length; i++) {
      console.log(vowelCheck, vowels[i]);
      if (vowelCheck === vowels[i]) {
        return "an";
      }
    }
    return "a";
  }

  // change bg img
  document.querySelector(".page").style.backgroundImage = "none";
  document.querySelector(".result-div").style.display = "block";

  // update the UI - basic info
  document.getElementById("display-name").innerHTML = result.name.toUpperCase();
  document.getElementById("display-experience").innerHTML = result.experience;
  document.getElementById("display-moves").innerHTML = result.moves;
  document.getElementById("display-species").innerHTML = result.species;
  document.getElementById("display-type").innerHTML = result.type.toUpperCase();
  document.getElementById("display-article").innerHTML = article + " ";

  // update imgs
  const images = document.querySelectorAll(".sprite-img");
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "block";
    console.log("img updated");
  }
  document.getElementById("pokemonSpriteFrontDefault").src =
    result.front_default;
  document.getElementById("pokemonSpriteFrontShiny").src = result.front_shiny;
  document.getElementById("pokemonSpriteBackDefault").src = result.back_default;
  document.getElementById("pokemonSpriteBackShiny").src = result.back_shiny;

  // "dynamically" creating and updating the abilities li element (not from 'result')
  const abilitiesElement = document.getElementById("display-abilities");

  data.abilities.map((item) => {
    const li = document.createElement("li");
    const capitalizeStr =
      item.ability.name[0].toUpperCase() + item.ability.name.slice(1);
    li.textContent = capitalizeStr;
    abilitiesElement.appendChild(li);
  });

  // update audio
  document.getElementById("audio").src = result.audio;
};

//  error message function
function ErrorMessage() {
  const errorEl = document.getElementById("error");
  errorEl.style.display = "block";
  errorEl.innerText = "Could not find the pokemon. Please try again! :(";
}
