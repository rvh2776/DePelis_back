const {Router} = require('express');
const {getAllMovies, createMovie, getMovieById, delMovieById} = require('../controllers/moviesController');
const validateMovie = require('../middlewares/validateMovie');
const validateMovieId = require('../middlewares/validateMovieId');
const validateDelMovie = require('../middlewares/validateDelMovie');

const moviesRouter = Router();

moviesRouter.get('/', getAllMovies);

moviesRouter.get('/:id', validateMovieId ,getMovieById);

moviesRouter.post('/', validateMovie, createMovie);

moviesRouter.delete('/:id', validateDelMovie, delMovieById);

module.exports = {
    moviesRouter,
};