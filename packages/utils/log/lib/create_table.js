const { createTimestamp, getLabel, getLevel } = require('./segments')

module.exports = ({ tags, filename }, { color, show }, log) => row => {
    if (!show) return
    if (!row || !Array.isArray(row)) return log.error(new Error('ROW must be an array'))
    console.log(createTimestamp(), getLabel(tags, filename), getLevel('table', color))
    console.table(row)
}
