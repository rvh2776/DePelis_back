// const movies = require('./moviesData');
const { Movies } = require("../models/Movies");
const formatAge = require("../helpers/formatAge");

class Movie {
  constructor({id, title, year, director, duration, genre, rate, poster, description}){

    this.id = id;
    this.title = title;
    this.year = year;
    this.director = director; 
    this.duration = duration; 
    this.genre = genre; 
    this.rate = rate; 
    this.poster = poster; 
    this.description = description;
  };
};

const getMovies = async () => {

  const movies = await Movies.find();
  return movies.map((movie) => new Movie(movie));
};

const getByIdMovie = async (id) => {
  const movie = await Movies.findById(id);
  return movie;
};

const delByIdMovie = async (id) => {
  
  const movie = await Movies.findByIdAndDelete(id)
  return movie;
}

const createNewMovie = async (movie) => {
  
  const newMovie = await Movies.create({...movie, year: formatAge(movie.year)});
  return newMovie;
};

module.exports = {
  getMovies,
  getByIdMovie,
  delByIdMovie,
  createNewMovie,
};