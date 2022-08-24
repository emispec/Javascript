"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row">
        <span>👫</span>${(+data.population / 1000000).toFixed(1)}
      Million</p>
      <p class="country__row">
        <span>🗣️</span>${data.languages[0].name}
      </p>
      <p class="country__row">
        <span>💰</span>${data.currencies[0].name}
      </p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = (msg) => {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const getCountryData = (country) => {
  //country 1
  const request = fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) {
        throw new Error("No se encontro pais vecino.");
      }
      //country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err}`);
      renderError(`Algo salio mal ${err.message}. Pruebe de nuevo`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const whereAmI = async (country) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v2/name/${country}`
    );
    const data = await response.json();
    renderCountry(data[0]);
    console.log([data]);

    return `La capital de ${data[0].name} es ${data[0].capital} !`;
  } catch (err) {
    console.error(`${err} 👹`);
    renderError(`algo salio mal. ${err.message} 👹`);
  }
};

console.log("cargando...");
(async function () {
  try {
    let city = await whereAmI("argentina");
    console.log(city);
  } catch (err) {
    console.log(err.message);
  }
  console.log("fin de la ejecucion..");
})();
