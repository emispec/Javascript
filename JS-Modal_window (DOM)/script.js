"use strict";

let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let btnCloseModal = document.querySelector(".close-modal");
let btnsOpenModal = document.querySelectorAll(".show-modal");

let openModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

let closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);

//bloque para que desaparezca el modal si clickeamos fuera de la caja (en el overlay)
overlay.addEventListener("click", closeModal);

//bloque para cerrar modal con tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("Hidden")) {
    closeModal();
  }
});
