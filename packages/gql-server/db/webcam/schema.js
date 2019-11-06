const { Schema } = require('mongoose')

const pointSchema = require('../schemas/point')
const originSchema = require('../schemas/origin')

module.exports = new Schema(
    {
        point: {
            type: pointSchema,
            required: true,
        },
        title: {
            type: String,
            required: true,
            default: 'pw',
        },
        origin: {
            type: originSchema,
            get: obj => obj || null,
        },
        stream: {
            type: String,
            get: str => str || null,
        },
        isReady: Boolean,
    },
    { timestamps: true },
)
