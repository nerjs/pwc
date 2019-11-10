const { ApolloError } = require('apollo-server-errors')
const { VALIDATION } = require('./error_codes')

class ValidationError extends ApolloError {
    constructor(error) {
        super(error.message, VALIDATION)

        this.details = []

        if (error.inner && Array.isArray(error.inner)) {
            this.details = error.inner.map(({ path, message, type }) => ({ path, message, type }))
        }
    }

    get name() {
        return 'ValidationError'
    }
}

module.exports = ValidationError
