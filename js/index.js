// Escribe tu codigo JS acá

function envioFormulario() {

  let nombre = document.querySelector("#floatingName").value;
  document.getElementById("data-nombre").innerText = nombre;

  let email = document.querySelector("#floatingInput").value;
  document.getElementById("data-email").innerText = email;

  let mensaje = document.querySelector("#floatingTextarea").value;
  document.getElementById("data-mensaje").innerText = mensaje;
}

const form = document.querySelector('form');

// escucha el evento del formulario onSubmit, para llamar la funcion que setea los campos del formulario en el modal
form.addEventListener('submit', event => {
  event.preventDefault();// cancela el evento submit para evitar que se refresque la pagina
  envioFormulario();
});