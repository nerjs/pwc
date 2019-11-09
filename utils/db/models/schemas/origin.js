const { Schema } = require('mongoose')

module.exports = new Schema({
    url: String,
    stream: String,
    title: String,
})
