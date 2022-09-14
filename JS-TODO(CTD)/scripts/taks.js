// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.

/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener("load", function () {
  /* ---------------- variables globales y llamado a funciones ---------------- */

  const btnCerrarSesion = document.querySelector("#closeApp");
  const nombreUsuario = document.querySelector(".user-info p");
  const contenedorTareasPendientes =
    document.querySelector(".tareas-pendientes");
  const contenedorTareasTerminadas =
    document.querySelector(".tareas-terminadas");

  const ENDPOINTBASE = "https://ctd-todo-api.herokuapp.com/v1";
  const JWT = localStorage.getItem("jwt");

  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener("click", function () {
    localStorage.removeItem("jwt");
    window.location.replace("./index.html");
  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  function obtenerNombreUsuario() {
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: JWT,
      },
    };

    fetch(`${ENDPOINTBASE}/users/getMe`, config)
      .then((res) => res.json())
      .then((data) => {
        nombreUsuario.textContent = `${data.firstName} ${data.lastName}`;
      });
  }

  obtenerNombreUsuario();

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  function consultarTareas() {
    const config = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: JWT,
      },
    };

    fetch(`${ENDPOINTBASE}/tasks`, config)
      .then((res) => res.json())
      .then((data) => {
        renderizarTareas(data);
      });
  }

  consultarTareas();

  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */

  formCrearTarea.addEventListener("submit", function (event) {});

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {
    const contadorPendientes = document.querySelector("#cantidad-pendientes");
    const contadorTerminadas = document.querySelector("#cantidad-terminadas");

    let tareasPendientes = listado.filter(
      (e) => element.completed === false
    ).length;
    let tareasFinalizadas = listado.filter(
      (e) => element.completed === true
    ).length;

    listado.forEach((element) => {
      let tarjeta = `
        <div>
          <p>${element.description}</p>
          <span>Tarea Numero ${element.id}</span>
        </div>
        `;

      if (element.completed) {
        contadorTerminadas.innerHTML = tareasFinalizadas;
        contenedorTareasTerminadas.innerHTML += tarjeta;
      } else {
        contadorPendientes.innerHTML = tareasPendientes;
        contenedorTareasPendientes.innerHTML += tarjeta;
      }
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {}

  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {}
});
