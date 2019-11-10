const yup = require('yup')

module.exports = yup.object().shape({
    title: yup
        .string()
        .min(2)
        .max(20)
        .required(),
    point: yup.object().shape({
        lat: yup.number().required(),
        lng: yup.number().required(),
    }),
    origin: yup.object().shape({
        url: yup
            .string()
            .url()
            .required(),
        stream: yup
            .string()
            .url()
            .required(),
        title: yup.string(),
    }),
})
