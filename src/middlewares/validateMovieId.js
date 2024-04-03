const mongoose = require("mongoose");

const validateMovieId = (req, res, next) =>{
    const {id} = req.params;
    
    if (mongoose.Types.ObjectId.isValid(id)) {
        next();
    } else {
        next({message: 'Id de pelicula invalido', statusCode: 400});
    };
};

module.exports = validateMovieId;