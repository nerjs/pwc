const yup = require('yup')

module.exports = yup.object().shape({
    input: yup
        .string()
        .strict(true)
        .required(),
})
