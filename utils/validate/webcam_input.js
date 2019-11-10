const yup = require('yup')

const originSchema = require('./origin')
const pointSchema = require('./point')

module.exports = yup.object().shape({
    title: yup
        .string()
        .min(2)
        .max(20)
        .required(),
    point: pointSchema,
    origin: originSchema,
    stream: yup
        .string()
        .url()
        .required(),
})
