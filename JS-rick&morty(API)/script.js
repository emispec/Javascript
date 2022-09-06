//RICK & MORTY API REST
// https://rickandmortyapi.com/
// Base url: https://rickandmortyapi.com/api

const url = "https://rickandmortyapi.com/api/character";
const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const character = document.getElementById("characters");
  const ul = document.createElement("ul");
  const input = document.getElementById("search").value.toLowerCase();
  let data = [];

  if (input) {
    let response = await fetch(url);
    let names = await response.json();
    data = names.results;
  }

  const newArray = data.flatMap((item) => ({
    name: item.name.toLowerCase(),
    image: item.image,
  }));

  const filterArray = newArray.filter((item) => item.name === input);

  filterArray &&
    filterArray.map((item) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      const span = document.createElement("span");
      span.appendChild(document.createTextNode(item.name));
      img.src = item.image;
      li.appendChild(img);
      li.appendChild(span);
      ul.appendChild(li);
      character.appendChild(ul);
    });
});
