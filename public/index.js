const input = document.querySelector("input");
const button = document.querySelector("button");
// escuchamos un click en el botón
button.addEventListener("click", () => {
  // validar el contenido del campo 
  if (input.value.length === 0) {
    input.classList.add("error");
    alert("Introduce un dato!")
  } else {
    // enviamos dato al servidor mediante el método "fetch"
    fetch('/dato', {
      method: "POST",
      body: JSON.stringify({dato: input.value}),
      headers: { "Content-Type": "application/json"}
    })
    // gestión respuesta
    .then(res => res.json())
    .then(mensaje => alert(mensaje))
  }
});