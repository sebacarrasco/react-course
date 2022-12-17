
const express = require('express');
require('dotenv').config();
const cors = require("cors");
const { dbConnection } = require('./database/config');

// Se crea el servidor de express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio público
// El use en express es para pasar middlewares -> función que se ejecuta cuando alguien hace una
// petición al servidor.
// Con esto, al acceder a "/" se podrá acceder a los archivos dentro del directorio
// public (ej: "/styles.cssa")
app.use(express.static('public'));


// Lectura y parseo del body (se pasa por este middleware antes de ir al resto de middlewares)
// (esto es para poder acceder al body como un objeto con req.body)
app.use(express.json());


// Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

// Escuchar peticiones
// puerto, callback que se ejecutará cuando el servidor esté arriba
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
});
// process.env.port es posible gracias a dotenv