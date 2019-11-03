const { ApolloError } = require('apollo-server-errors')
const { NOT_FOUND_ITEM, DUPLICATE_ITEM, GQL_VALIDATION } = require('./gql_codes')

class NotFoundItemError extends ApolloError {
    constructor(name, msg) {
        const message = msg || `Item [${name}] not found!`
        super(message, NOT_FOUND_ITEM)

        this.itemName = name
    }

    get name() {
        return 'NotFoundItemError'
    }
}
class DuplicateItemError extends ApolloError {
    constructor(name, msg) {
        const message = msg || `Item [${name}] already exists!`
        super(message, DUPLICATE_ITEM)

        this.itemName = name
    }

    get name() {
        return 'DuplicateItemError'
    }
}

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

exports.NotFoundItemError = NotFoundItemError
exports.DuplicateItemError = DuplicateItemError
exports.GqlValidationError = GqlValidationError
