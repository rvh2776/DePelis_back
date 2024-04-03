// const mongoose = require("mongoose");

const validateMovie = (req, res, next) => {

    const {title, year, director, duration, genre, rate, poster, description} = req.body;

    if (!title || !year || year.length !== 4 || !director || !duration || (genre.length === 1 && genre[0].trim() === '') || !rate || !poster || !description) {
        
        // next('Hay un error en la carga de la pelicula, faltan datos.');
        // return res
        //     .status(400)
        //     .json({
        //         error: `Faltan datos`,
        //     });

        next({message: 'Faltan datos, todos los campos son obligatorios.', statusCode: 400});

    }else{
        
        next();
        console.log('todo bien desde el middleware, enviando datos a: movieControlller')
    }


};

module.exports = validateMovie;