const { STATUS_CODES } = require('http')

class HttpError extends Error {
    constructor(code, message) {
        super('HTTPERROR')

        this.fromJSON(code && typeof code === 'object' ? code : { code, message })
    }

    get name() {
        return 'HttpError'
    }

    toString() {
        return `${this.name}[${this.code}]: ${this.message}`
    }

    toJSON() {
        const { name, code, message } = this

        return { name, code, message }
    }

    fromJSON({ code, message }) {
        this.code = code || 500
        this.message = message || STATUS_CODES[this.code]

        if (message && message != this.message) {
            this.originalMessage = STATUS_CODES[this.code]
        }
    }
}

module.exports = HttpError
