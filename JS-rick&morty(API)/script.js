//RICK & MORTY API REST
// https://rickandmortyapi.com/
// Base url: https://rickandmortyapi.com/api

const url = "https://rickandmortyapi.com/api/character";

window.addEventListener("load", () => {
  const character = document.getElementById("chracter");
  const ul = document.createElement("ul");
  const data = JSON.parse(localStorage.getItem("characters"));

  const getData = () => {
    return fetch(url)
      .then((response) => response.json())
      .then((characters) =>
        localStorage.setItem(
          "characters",
          JSON.stringify(
            characters.results.flatMap((item) => ({
              id: item.id,
              image: item.image,
            }))
          )
        )
      );
  };

  getData();

  if (data.length) {
    data.map((item) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      li.appendChild(document.createTextNode(item.image));
      ul.appendChild(li);
      character.appendChild(li);
    });
  }
});
