const dotenv = require('dotenv');
dotenv.config();

const { dbCon } = require('./src/config/dbCon');
const app = require('./src/server');

// console.log(process.env)

const port = process.env.PORT;

const clousterName = process.env.CLOUSTERNAME;
const dbName = process.env.DBNAME;
const mongoUser = process.env.MONGOUSER;
const mongoKey = process.env.MONGOKEY;

console.log(clousterName, dbName, mongoKey, mongoUser, port)

dbCon()
    .then(() => {
        app.listen(port, () => {
            console.log(`Servidor escuchando en el puerto: ${port}`);
        });
    })
    .catch((error) => {
        console.log(`Error al conectar con la base de datos: ${error}`);
    });
