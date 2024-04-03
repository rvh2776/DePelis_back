const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
    // id: Number,
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: [],
    // genre: Array,
    rate: Number,
    // rate: mongoose.Types.Decimal128,
    poster: String,
    description: String,
});

const Movies = mongoose.model('Movies', moviesSchema);

module.exports = {
    Movies,
}