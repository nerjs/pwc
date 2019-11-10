const { ApolloError } = require('apollo-server-errors')
const { DUPLICATE_ITEM } = require('./error_codes')

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

module.exports = DuplicateItemError
