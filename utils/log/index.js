const levels = require('./lib/levels')
const getTagsModule = require('./lib/get_tags')
const createLogger = require('./logger')
const merge = require('merge')

const currentLevels = merge(true, levels)

module.exports = mod => {
    const tags = getTagsModule(mod || module)
    return createLogger(tags, currentLevels)
}
