const merge = require('merge')

const levels = require('./lib/levels')
const getTagsModule = require('./lib/get_tags')
const createLogger = require('./logger')
const prepareToDebug = require('./lib/prepare_to_debug')

const currentLevels = merge(true, levels)

module.exports = mod => {
    const tags = getTagsModule(mod || module)

    const preparedLevels = prepareToDebug(tags.name, currentLevels)

    return createLogger(tags, preparedLevels)
}
