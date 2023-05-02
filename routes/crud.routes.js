const Router = require('express');
const router = new Router();
const db_connection = require('../database/connection.js');

// Ruta: En este caso devuelve al cliente un archivo html
// __dirname: ruta absoluta del server donde se alberga el proyecto
// ESTA RUTA LA UTILIZAMOS PARA EL ENVÍO DEL FORM AL CLIENTE
router.get('/crud', (req, res) => {
  res.sendFile(__dirname + '/public/crud.html');
});

// RUTA QUE RECOGE LOS DATOS (nombre y mensaje) DEL FORM DEL CLIENTE
router.post('/mensaje', (req, res) => {
  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;
  // INSERTAR LOS DATOS EN LA DATABASE
  const sql = `insert into mensajes values(default, '${nombre}', '${mensaje}');`;
  db_connection.query(sql, function (err, result) {
    if (err) {
      res.json("Ha ocurrido un error en la inserción de los datos");
    } else {
      res.json("Mensaje insertado ok!");
    }
  });
});

// RUTA que devuelve todos los mensajes de la base de datos
router.get('/getMensajes', (req, res) => {
  const sql = `select * from mensajes`;
  db_connection.query(sql, function (err, results) {
    if (err) {
      res.json("Ha ocurrido un error en la inserción de los datos");
    } else {
      res.json(results);
    }
  });
});

module.exports = router;