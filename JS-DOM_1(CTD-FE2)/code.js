let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);

function obtenerDatosDelUsuario() {
  const usuario = prompt(
    "Ingrese nombre, año de nacimiento, y ciudad (Separe los datos con una coma)"
  );

  const datos = usuario.split(",");

  let interes = window.confirm("Te interesa JavaScript ?") ? "Si" : "No";

  datosPersona = {
    nombre: datos[0],
    edad: 2022 - Number(datos[1]),
    ciudad: datos[2],
    interesPorJs: interes,
  };
}

function renderizarDatosUsuario() {
  obtenerDatosDelUsuario();

  document.querySelector("#nombre").innerText = datosPersona.nombre;
  document.querySelector("#edad").innerText = datosPersona.edad;
  document.querySelector("#ciudad").innerText = datosPersona.ciudad;
  document.querySelector("#javascript").innerText = datosPersona.interesPorJs;

  /*let template = `
  <h3>Nombre: <span id="nombre">${datosPersona.nombre}</span></h3>
  <h3>Edad: <span id="edad">${datosPersona.edad}</span></h3>
  <h3>Ciudad: <span id="ciudad">${datosPersona.ciudad}</span></h3>
  <h3>Interes en Javascript: <span id="javascript">${datosPersona.interesPorJs}</span></h3>
  `;

  const card = document.querySelector(".card-header");

  card.innerHTML = template;
  */
}

function recorrerListadoYRenderizarTarjetas() {
  listado.forEach((materia) => {
    let template = `
    <div class="caja">
    <img src="${materia.imgUrl}" alt="${materia.lenguajes}" />
    <p class="lenguajes">${materia.lenguajes}</p>
    <p class="bimestre">${materia.bimestre}</p>
  </div>
    `;

    const fila = document.querySelector("#fila");
    fila.innerHTML += template;
  });
  materiasBtn.disabled = true;
}

function alternarColorTema() {
  const sitio = document.querySelector("#sitio");
  sitio.classList.toggle("dark");
}

const sobreMi = document.querySelector("#sobre-mi");

window.addEventListener("keydown", (e) => {
  if (e.key == "f") {
    sobreMi.classList.remove("oculto");
  }
});
