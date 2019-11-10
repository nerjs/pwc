const { ApolloError } = require('apollo-server-errors')
const { GQL_VALIDATION } = require('./error_codes')

class GqlValidationError extends ApolloError {
    constructor(msg, current, expected) {
        super(msg, GQL_VALIDATION)

        this.current = current
        this.expected = expected
    }

    get name() {
        return 'GqlValidationError'
    }
}

module.exports = GqlValidationError
