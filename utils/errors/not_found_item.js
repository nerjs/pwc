const { ApolloError } = require('apollo-server-errors')
const { NOT_FOUND_ITEM } = require('./error_codes')

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

module.exports = NotFoundItemError
