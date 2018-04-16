var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Movie = new Schema({
    "url": { type: String },
    "imdb_code": { type: String },
    "title": { type: String },
    "title_english": { type: String },
    "title_long": { type: String },
    "slug": { type: String },
    "summary": { type: String },
    "synopsis": { type: String },
    "yt_trailer_code": { type: String },
    "language": { type: String },
    "mpa_rating": { type: String },
    "background_image": { type: String },
    "background_image_original": { type: String },
    "small_cover_image": { type: String },
    "medium_cover_image": { type: String },
    "medium_cover_image": { type: String },
    "large_cover_image": { type: String },
    "state": { type: String },
    "date_uploaded": { type: String },
    "date_uploaded_unix": { type: Number },
    "year": { type: Number },
    "rating": { type: Number },
    "runtime": { type: Number },
    "date_uploaded_unix": { type: Number },
    "genres": { type: Array },
    "torrents": { type: Array },
},{
    collection: 'movies'
});

module.exports = mongoose.model('Movie', Movie);