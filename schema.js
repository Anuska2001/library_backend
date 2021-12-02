const mongoose = require('mongoose')
const {Schema} = mongoose

const librarySchema = new Schema({
    book_name: String,
    issuer_name: String,
    date: Date
});

module.exports = mongoose.model('library', librarySchema, 'librarySchema');