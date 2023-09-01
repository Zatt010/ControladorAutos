import controlador from "./Controlador";

const comandos = document.querySelector("#Comandos");
const form = document.querySelector("#Controlador-form");
const posicion_inicial = document.querySelector("#posicion_inicial");
const mensajes = document.querySelector("#mensajes");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!controlador(comandos.value)) {
    posicion_inicial.innerHTML = "<p> Posicion Inicial: 0 </p>" ;
    mensajes.innerHTML =  "<p> Mensajes: Error en el formato  </p>";
  } else {
    posicion_inicial.innerHTML = "<p> Posicion Inicial:" + controlador(comandos.value) + "</p>";
  }
});
