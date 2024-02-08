const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    title: {type: String, required: true, unique: true},
    desc: {type: String, required: true},
    img: {type: String},
    imgLogo: {type: String},
    imgThumbnail: {type: String},
    trailer: {type: String},
    year: {type: String},
    genre: {type: String},
    isSeries: {type: Boolean, default: false},
    isTrending: {type: Boolean, default: false},
    isPopular: {type: Boolean, default: false},
    isTopRated: {type: Boolean, default: false},
    isRecommended: {type: Boolean, default: false},
    video: {type: String},
    cast: {type: Array},
    director: {type: Array},
    writer: {type: Array},
    duration: {type: String},
    rating: {type: Number},
    date: {type: Date},

}, {timestamps: true});

module.exports = mongoose.model('Movie', MovieSchema)