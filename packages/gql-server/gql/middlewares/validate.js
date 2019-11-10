const { isSchema } = require('yup')
const webcamSchema = require('@pw/validate/webcam')
const ValidationError = require('@pw/errors/validation')

const createValidateResolver = fields => async (resolver, parent, args, ctx, info) => {
    try {
        if (isSchema(fields)) {
            console.log(args)
            await fields.validate(args, { abortEarly: false })
        } else {
            await Promise.all(
                Object.keys(fields || {}).map(field =>
                    fields[field].validate(args[field], { abortEarly: false }),
                ),
            )
        }
    } catch (e) {
        throw new ValidationError(e)
    }

    return resolver(parent, args, ctx, info)
}

module.exports = {
    Query: {
        setWebcam: createValidateResolver({ input: webcamSchema }),
    },
}
