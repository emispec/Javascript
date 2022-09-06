//RICK & MORTY API REST
// https://rickandmortyapi.com/
// Base url: https://rickandmortyapi.com/api

const url = "https://rickandmortyapi.com/api/character";

window.addEventListener("load", () => {
  const character = document.getElementById("characters");
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
              name: item.name,
              image: item.image,
            }))
          )
        )
      );
  };

  getData();

  data &&
    data.map((item) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      const span = document.createElement("span");
      span.appendChild(document.createTextNode(item.name));
      li.appendChild(span);
      img.src = item.image;
      li.appendChild(img);
      ul.appendChild(li);
      character.appendChild(ul);
    });
});
