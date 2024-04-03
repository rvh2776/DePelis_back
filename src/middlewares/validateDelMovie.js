const mongoose = require("mongoose");
const {Movies} = require('../models/Movies');

const validateDelMovie = async (req, res, next) =>{
    const {id} = req.params;
    
    if (mongoose.Types.ObjectId.isValid(id)) {
        try {
            const movie = await Movies.findById(id);
            if (!movie) {
                return next({message: 'La película no existe', statusCode: 404});
            }
            next();
        } catch (err) {
            return next({message: 'Error al buscar la película', statusCode: 500});
        }
    } else {
        next({message: 'ID de película inválido', statusCode: 400});
    }
};

module.exports = validateDelMovie;