const getPathModule = require('./get_path')
const createLogger = require('./logger')

module.exports = (mod = {}) => {
    const tags = getPathModule(mod)
    return createLogger(tags)
}
