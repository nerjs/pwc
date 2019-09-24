const levels = require('./levels')
const createMethod = require('./create_method')

module.exports = tags => {
    const log = {}
    Object.keys(levels).forEach(key => {
        log[key] = createMethod(key, tags, levels[key])
    })
    return log
}
