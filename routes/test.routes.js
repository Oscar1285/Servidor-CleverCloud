const Router = require('express');
const router = new Router();
// rutas: Se establecen las rutas configuradas para este server, mediante los métodos GET, POST, PUT, DELETE.
// Estos métodos gestionan las peticiones (req) y respuestas (res) mediante un callback
// Ruta: En este caso devuelve al cliente un texto plano "Hello World!"
router.get('/hello_world', (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.send('Hello World !')
});

module.exports = router;