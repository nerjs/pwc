const UnknownError = require('@pw/errors/unknown')
const ValidationError = require('@pw/errors/validation')
const yup = require('yup')

const formatError = err => {
    if (!err || !(err instanceof Error)) return new UnknownError('UnknownError')

    if (
        err.name === 'ValidationError' &&
        err.errors &&
        typeof err.errors === 'object' &&
        !Array.isArray(err.errors) &&
        Object.keys(err.errors).every(key => err.errors[key].name === 'ValidatorError')
    )
        return new ValidationError(
            err._message || err.message,
            Object.keys(err.errors).map(key => {
                const { message, path, kind } = err.errors[key]

                return { message, path, type: kind }
            }),
        )

    if (err instanceof yup.ValidationError && err.inner && Array.isArray(err.inner))
        return new ValidationError(err.message, err.inner)

    return err
}

module.exports = async (resolver, parent, args, ctx, info) => {
    try {
        const result = await resolver(parent, args, ctx, info)
        return result
    } catch (err) {
        throw formatError(err, ctx)
    }
}
