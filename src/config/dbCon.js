const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');

const clousterName = process.env.CLOUSTERNAME;
const dbName = process.env.DBNAME;
const mongoUser = process.env.MONGOUSER;
const mongoKey = process.env.MONGOKEY;

//* Se debe usar la direccion que proporciona Mongo Atlas para poder conectarse a su propia BD, la clave y usuario se declaran en el archivo .env
//? Recordar agregar el nombre de la BD a la direccion entre la / y el ? despues de .net

const dbCon = async () => {
    await mongoose.connect(`mongodb+srv://${mongoUser}:${mongoKey}@${clousterName}.jwbnwgf.mongodb.net/${dbName}?retryWrites=true&w=majority`);
};

module.exports = {
    dbCon,
};