const { createTimestamp, getLabel, getLevel } = require('./segments')

module.exports = (name, { tags, filename }, { color, show }) => (...msgs) => {
    if (!show) return
    console.log(createTimestamp(), getLabel(tags, filename), getLevel(name, color), ...msgs)
}
