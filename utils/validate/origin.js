const yup = require('yup')

module.exports = yup.object().shape({
    title: yup
        .string()
        .min(2)
        .max(50),
    url: yup.string().url(),
})
