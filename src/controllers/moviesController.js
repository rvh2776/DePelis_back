const {getMovies, createNewMovie, getByIdMovie, delByIdMovie} = require('../services/movieService');
const catchAsync = require('../utils/catchAsync');


const getAllMovies = async (req, res) => {
        
    const movies = await getMovies();
    res
    .status(200)
    .json(movies)
};

const getMovieById = async (req, res) => {

    const {id} = req.params;
    const movie = await getByIdMovie(id);

    res.status(200).json(movie);
};

const delMovieById = async (req, res) => {

    const {id} = req.params;
    const movie = await delByIdMovie(id);

    res.status(204)
    .json({
        message: `La pelicula: ${movie} se elimino`
    })
}

const createMovie = async (req, res) => {

    const {title, year, director, duration, genre, rate, poster, description} = req.body;
    
    // const yearNum = parseInt(year, 10);
    // const newNovie = await createNewMovie({title, year: yearNum, director, duration, genre, rate, poster, description});
    const newNovie = await createNewMovie({title, year, director, duration, genre, rate, poster, description});
    res
    .status(201)
    .json({newNovie});
};

module.exports = {
    getAllMovies: catchAsync(getAllMovies),
    getMovieById: catchAsync(getMovieById),
    delMovieById: catchAsync(delMovieById),
    createMovie: catchAsync(createMovie),
};