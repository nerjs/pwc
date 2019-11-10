const { ApolloError } = require('apollo-server-errors')
const { UNKNOWN } = require('./error_codes')

class UnknownError extends ApolloError {
    constructor(message) {
        super(message, UNKNOWN)
    }

    get name() {
        return 'UnknownError'
    }
}

module.exports = UnknownError
