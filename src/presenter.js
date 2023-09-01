import controlador from "./Controlador";

const comandos = document.querySelector("#Comandos");
const form = document.querySelector("#Controlador-form");
const salida = document.querySelector("#salida-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  salida.innerHTML = "<p> Posicion Inicial:" + controlador(comandos.value) + "</p>";

});
