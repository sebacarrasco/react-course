/**
Rutas para CRUD de Eventos
host + /api/events
*/

const express = require("express");
const { check } = require("express-validator");
const { getEvents, createEvent, updateEvent, deleteEvent } = require("../controllers/events");
const { isDate } = require("../helpers/isDate");
const { fieldValidator } = require("../middlewares/field-validator");
const { jwtValidator } = require("../middlewares/jwt-validator");


const router = express.Router();

// Como todas las rutas de este router usan el middleware jwtValidator,
// se puede "subir de nivel" para no ponerlo en cada una de las rutas por separado
router.use(jwtValidator);
// Todas las que están de acá para abajo usarán jwtValidator, si quiseramos que una
// ruta de este router no lo usara entonces basta con ponerla arriba de esto

router.get("/", getEvents);

router.post("/",
    [
        check("title", "title is required").not().isEmpty(),
        // Se pueden hacer validaciones personalizadas con express-validator
        check("start", "start date is required").custom(isDate),
        check("end", "end date is required").custom(isDate),
        fieldValidator
    ],
    createEvent
);

router.put("/:id",
    [
        check("title", "title is required").not().isEmpty(),
        // Se pueden hacer validaciones personalizadas con express-validator
        check("start", "start date is required").custom(isDate),
        check("end", "end date is required").custom(isDate),
        fieldValidator
    ],
    updateEvent
);

router.delete("/:id", deleteEvent);

module.exports = router;