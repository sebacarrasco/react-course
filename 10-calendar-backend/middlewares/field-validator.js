const { response } = require("express");
const { validationResult } = require("express-validator");

const fieldValidator = (req, res = response, next) => {

    // Manejo de errores
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        // 400 por bad request
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    // Llama al siguiente middleware si no hay errores
    next();

}

module.exports = {
    fieldValidator
}