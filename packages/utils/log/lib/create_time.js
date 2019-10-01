const prettyTyme = require('pretty-time')
const { createTimestamp, getLabel, getLevel } = require('./segments')

const timers = new Map()

module.exports = ({ tags, filename }, { color, show }, log) => {
    const time = tag => {
        if (!show) return
        if (timers.has(tag)) return log.error(new Error(`timer with tag [${tag}] is already set`))
        timers.set(tag, {
            t: Date.now(),
            l: { tags, filename },
        })
    }

    const timeEnd = tag => {
        if (!show) return
        if (!timers.has(tag)) return log.error(new Error(`timer with tag [${tag}] not set yet`))
        const { t, l } = timers.get(tag)
        timers.delete(tag)
        const diffTime = prettyTyme(1000000 * (Date.now() - t), 'ms')

        const labelBefore = getLabel(l.tags, l.filename)
        const labelAfter = getLabel(tags, filename)
        const label = labelBefore === labelAfter ? [labelBefore] : [labelBefore, '=>', labelAfter]
        console.log(createTimestamp(), ...label, getLevel('time', color), diffTime.yellow)
    }

    return { time, timeEnd }
}
