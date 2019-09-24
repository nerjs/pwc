const createMethod = require('./lib/create_method')
const createTable = require('./lib/create_table')
const createTime = require('./lib/create_time')

module.exports = (tags, { time: timeLevel, table: tableLevel, ...levels }) => {
    const log = {}
    Object.keys(levels).forEach(key => {
        log[key] = createMethod(key, tags, levels[key])
    })

    const { time, timeEnd } = createTime(tags, timeLevel, log)

    const table = createTable(tags, tableLevel, log)

    log.time = time
    log.timeEnd = timeEnd
    log.table = table

    log.clear = console.clear.bind(console)

    return log
}
