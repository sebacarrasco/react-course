const { response } = require("express");
const jwt = require("jsonwebtoken");

const jwtValidator = (req, res = response, next) => {

    // El token vienen en x-token en headers
    // (Es convención usar x- antes de un header personalizado)
    const token = req.header("x-token");

    if (!token)
    {
        // 401 es cuando alguien trata de hacer algo que no está autorizado
        return res.status(401).json({
            ok: false,
            msg: "No hay token en la petición"
        });
    }

    try {

        // Esto retorna el payload que tiene uid, name, fecha creación y expiración
        // si es que el token es válido, en caso contrario lanza un error
        const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);
        // Se modifica la request para que sea más fácil acceder al uid y name desde los
        // middlewares que vienen después de este.
        req.uid = uid;
        req.name = name;
        
    } catch (error) {
        // 401 es cuando alguien trata de hacer algo que no está autorizado
        return res.status(401).json({
            ok: false,
            msg: "Token inválido"
        });
    }
    next();
}

module.exports = {
    jwtValidator
}