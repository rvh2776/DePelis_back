const dotenv = require('dotenv');
dotenv.config();

const { dbCon } = require('./src/config/dbCon');
const app = require('./src/server');

// console.log(process.env)

const port = process.env.PORT;

const clousterName = process.env.clousterName;
const dbName = process.env.dbName;
const mongoUser = process.env.mongoUser;
const mongoKey = process.env.mongoKey;

console.log(clousterName, dbName, mongoKey, mongoUser)

dbCon()
    .then(() => {
        app.listen(port, () => {
            console.log(`Servidor escuchando en el puerto: ${port}`);
        });
    })
    .catch((error) => {
        console.log(`Error al conectar con la base de datos: ${error}`);
    });
