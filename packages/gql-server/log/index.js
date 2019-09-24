const levels = require('./lib/levels')
const getPathModule = require('./lib/get_path')
const createLogger = require('./logger')
const merge = require('merge')

const currentLevels = merge(true, levels)

module.exports = (mod = {}) => {
    const tags = getPathModule(mod)
    return createLogger(tags, currentLevels)
}
