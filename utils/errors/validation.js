const { ApolloError } = require('apollo-server-errors')
const { VALIDATION } = require('./error_codes')

class ValidationError extends ApolloError {
    constructor(message, details) {
        super(message, VALIDATION)

        this.details = []

        if (details && Array.isArray(details)) {
            this.details = details.map(({ path, message, type, value }) => ({
                path,
                message,
                type,
                value,
            }))
        }
    }

    get name() {
        return 'ValidationError'
    }
}

module.exports = ValidationError
