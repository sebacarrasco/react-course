const jwt = require("jsonwebtoken");

const generateJWT = ( uid, name ) => {

    return new Promise( (resolve, reject) => {

        const payload = { uid, name };
        jwt.sign(payload, process.env.SECRET_JWT_SEED, { expiresIn: '2h' }, 
        (error, token) => {
            // Este callback se ejecuta al terminar de firmar o al producirse un error

            if (error)
            {
                console.log(error);
                reject("No se pudo generar el token");
            }
            resolve(token);

        });

    });

}

module.exports = {
    generateJWT
}