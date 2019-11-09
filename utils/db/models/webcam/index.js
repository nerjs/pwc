const mongoose = require('mongoose')

const schema = require('./schema')
const WebcamClass = require('./class')

schema.loadClass(WebcamClass)

module.exports = mongoose.model('Webcam', schema)
