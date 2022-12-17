/**
Rutas de Usuarios / Auth
host + /api/auth 
*/

const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const { createUser, loginUser, renewToken } = require("../controllers/auth");
const { fieldValidator } = require("../middlewares/field-validator");
const { jwtValidator } = require("../middlewares/jwt-validator");

// El primer argumento se concatenará al path que se puso en index,js
// para crear el path real. En este caso es api/auth/new
router.post("/new",
    [ // Arreglo de middlewares que se ejecutarán antes que el controlador
        check("name", "name can't be empty").not().isEmpty(),
        check("email", "email is required").isEmail(),
        check("password", "password should be at least 6 characters long").isLength({ min: 6 }),
        fieldValidator
    ],
    createUser
);

router.post("/",
    [
        check("email", "email is required").isEmail(),
        check("password", "password should be at least 6 characters long").isLength({ min: 6 }),
        fieldValidator
    ],
    loginUser
);

router.get("/renew", jwtValidator, renewToken);

// En node las exportaciones no son iguales :c
module.exports = router;