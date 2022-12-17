const mongoose = require("mongoose");

const dbConnection = async() => {

    try {
        
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("Conección establecida con la base de datos");

    } catch (error) {
        console.log(error);
        throw new Error("Error al inicilizar DB");
    }

}

module.exports = {
    dbConnection
}