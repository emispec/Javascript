"use strict";

// Seleccionando los elementos
let player0El = document.querySelector(".player--0");
let player1El = document.querySelector(".player--1");
let score0El = document.getElementById("score--0");
let score1El = document.getElementById("score--1");
let current0El = document.getElementById("current--0");
let current1El = document.getElementById("current--1");

let diceEl = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--new");
let btnHold = document.querySelector(".btn--hold");
let btnRoll = document.querySelector(".btn--roll");

// declaro variables de valores.
let scores, currentScore, activePlayer, playing;

//funcion inicializadora de juego (resetea valores por default)
let init = () => {
  //reseteo variables
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  //reseteo parte visual
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

// ejecuto la funcion para inicializar todo.
init();

//funcion para el cambio de jugador
let switchPlayer = () => {
  // cambio de jugador (muestra el score en 0, lo resetea en 0 y cambia al otro jugador)
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // si el jugador activo es 0 cambia a 1 y si no es 0 cambia a 0.
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//funcionalidad de tirar dados
btnRoll.addEventListener("click", () => {
  if (playing) {
    //1. generar numero random ( entre 1 y el 6 incluido)
    let dice = Math.trunc(Math.random() * 6) + 1;
    //2. mostrar el dado
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    //3. chequear si es dado = 1. if true switchear a player 2. sino guardar el valor.
    if (dice !== 1) {
      // sumo dado al score.
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//fucionalidad boton "hold"
btnHold.addEventListener("click", () => {
  if (playing) {
    //1.agregar el score actual al jugador activo
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. chequear si el score >=100 para verificar si gano
    if (scores[activePlayer] >= 100) {
      // terminar juego
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      //si no gano, cambia jugador
      switchPlayer();
    }
  }
});

// funcionalidad New Game
btnNew.addEventListener("click", init);
