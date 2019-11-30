const { isSchema } = require('yup')
const webcamInput = require('@pw/validate/webcam_input')

const createValidateResolver = fields => async (resolver, parent, args, ctx, info) => {
    if (isSchema(fields)) {
        await fields.validate(args, { abortEarly: false })
    } else {
        await Promise.all(
            Object.keys(fields || {}).map(field =>
                fields[field].validate(args[field], { abortEarly: false }),
            ),
        )
    }

    return resolver(parent, args, ctx, info)
}

module.exports = {
    Mutation: {
        addWebcam: createValidateResolver({ input: webcamInput }),
    },
}
