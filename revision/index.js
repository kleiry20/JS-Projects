// - Javascript array iteration functions (map,filter,reduce,forEach) and their uses

// const random = [1, 2, "apple", "banana", true];

const numbers = [1, 2];
const colorsArr = ["red", "pink", "purple", "white"];
const colorsObj = [
  {
    id: 1,
    color: "red",
    isPrimary: true,
  },
  {
    id: 2,
    color: "pink",
  },
  {
    id: 3,
    color: "purple",
  },
  {
    id: 4,
    color: "white",
  },
];

// map ->
// Returns a new array
// Used for transforming data
// Does not change the original array but creates a new one based on the transformation
colorsObj.map((item) => {
  console.log(item);
});

console.log("next");

// forEach ->
// Does not return a new array
// Used for side effects
// Does not change the original array
colorsObj.forEach((item) => console.log(item));

// filter -> iterates over each element, satisfies a condition, returns a new array, does not modify original
const res = colorsArr.filter((item) => item.startsWith("p"));
console.log("filterRes-->", res);

// reduce ->
// starts with an initial value
// It processes each item in the array and updates the result based on that item
// It gives you a single final value that combines all the items
const reduceRes = colorsArr.reduce(
  (item, newItem) => item + newItem,
  "your fave colors are: "
);
console.log("reduceRes-->", reduceRes);

const words = ["I", "love", "chocolate", "ice", "cream"];
const sentence = words.reduce((currentSentence, word) => {
  return currentSentence + " " + word;
}, "");
console.log(sentence.trim());

// -Fetching data from a simple api and rendering results in a table, with delete functionality

let status_code = 500;
// const url = `https://http.cat/500`;
let pokName = "bulbasaur";
const url = `https://pokeapi.co/api/v2/pokemon/${pokName}`;

// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => console.log(data));

// function getData() {
//   fetch(url)
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       } else throw new Error("some error while fetching");
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// }
// getData();

async function getData(pokName) {
  try {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokName}`);
    if (!result) {
      throw new Error("some err");
    }
    const data = await result.json();
    console.log("data", data);
    //   extract data
    const filterData = {
      name: data.name,
      species: data.species,
      sprites: data.sprites,
      types: data.types,
    };
    displayData(filterData);
  } catch (error) {
    console.error(error);
  }
}
getData(pokName);

function displayData(filterData) {
  const chosenPokemon = document.getElementById("pokemonName");
  chosenPokemon.innerHTML = pokName;

  //   updating table
  //   document.getElementById("species").innerHTML = filterData.species;
  console.log(filterData.species);
}
