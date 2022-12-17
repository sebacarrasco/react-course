const { response } = require('express'); // Solo para la autocmpletacion, no es extrictamente necesario
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { generateJWT } = require('../helpers/jwt');

// El response = express.response es solo para la autocmpletacion, no es extrictamente necesario
const createUser = async(req, res = response) => {
    // request, response 

    const { email, password } = req.body;

    try {

        let user = await User.findOne({ email });

        // Si user no es null
        if (user)
        {
            return res.status(400).json({
                ok: false,
                msg: "Ese correo ya está asociado a un usuario"
            });
        }

        user = new User(req.body);

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        // Generar JWT
        const token = await generateJWT(user.id, user.name);

        // 201 por creado correctamente
        res.status(201).json({
            ok: true,
            msg: 'register',
            uid: user.id,
            name: user.name,
            token
        });
        
    } catch (error) {
        console.log(error);
        // 500 por internal server error
        res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador"
        });
    }
}


const loginUser = async(req, res = response) => {
    // request, response 

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        // Si user es null
        if (!user)
        {
            return res.status(400).json({
                ok: false,
                msg: "Ese correo no está asociado a ningún usuario"
            });
        }

        // Ver si las passwords calzan
        const passwordMatch = bcrypt.compareSync( password, user.password );
        if (!passwordMatch)
        {
            return res.status(400).json({
                ok: false,
                msg: "Contraseña incorrecta"
            });
        }

        // Generar JWT
        const token = await generateJWT(user.id, user.name);
        res.json({
            ok: true,
            uid: user.id,
            name: user.name,
            token
        });

    } catch (error) {
        console.log(error);
        // 500 por internal server error
        res.status(500).json({
            ok: false,
            msg: "Por favor hable con el administrador"
        });
    }
}


const renewToken = async(req, res = response) => {
    // request, response 

    const { uid, name } = req;

    // Generar un nuevo JWT
    const token = await generateJWT(uid, name);
    res.json({
        ok: true,
        token,
        uid,
        name
    });
}


// Recordar que las exportaciones tienen que ser así en node :c
module.exports = {
    createUser,
    loginUser,
    renewToken
}