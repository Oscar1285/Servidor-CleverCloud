// fetch que que demanda todos los mensajes cada vez que se ejecute la pagina principal
fetch('/getMensajes')
  .then(res => res.json())
  .then(resMensajes => {
    let cajaMensajes = document.getElementById("mensajes");
    cajaMensajes.innerHTML = "";
    for (let i = 0; i < resMensajes.length; i++) {
      let mensajePlantilla = `
        <div>
          <h5>Nombre: </h5>
          <p>${resMensajes[i].nombre}</p>
          <h5>Mensaje:</h5>
          <p>${resMensajes[i].mensaje}</p>
        </div>
      `;
      cajaMensajes.innerHTML += mensajePlantilla;
    }
  });

const nombre = document.querySelector("input");
const mensaje = document.querySelector("textarea");
const button = document.querySelector("button");
// escuchamos un click en el botón
button.addEventListener("click", () => {
  // validacion
  if (nombre.value.length === 0) {
    nombre.classList.add("error");
    alert("Introduce tu nombre!")
  } else if (mensaje.value.length === 0) {
    nombre.classList.remove("error");
    mensaje.classList.add("error");
    alert("Introduce tu mensaje!")
  } else {
    mensaje.classList.remove("error");
    // enviamos dato al servidor mediante el método "fetch"
    fetch('/mensaje', {
      method: "POST",
      body: JSON.stringify({
        nombre: nombre.value,
        mensaje: mensaje.value
      }),
      headers: { "Content-Type": "application/json" }
    })
      // gestión respuesta
      .then(res => res.json())
      .then(mensaje => {
        alert(mensaje);
        location.reload();
      });
  }
});
