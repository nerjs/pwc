require('colors')
const moment = require('moment')
const terminalLink = require('terminal-link')

let lastTime

exports.createTimestamp = () => {
    const curTime = moment()
    let format = '..HH:mm:ss'

    if (!lastTime || lastTime.dayOfYear() != curTime.dayOfYear()) {
        format = 'D/M/YYYY HH:mm:ss'
    }

    lastTime = curTime
    return moment().format(format).gray.bgBlack
}

exports.getLevel = (name, color) => `${name || 'log'}: `[color || 'white'].bold

exports.getLabel = (tags = [], filename) => {
    if (tags.length === 0) {
        tags.push('.')
    }

    const txt = tags
        .map((tag, i) => {
            if (i === 0) return `${tag}`.yellow.italic.dim
            if (i === tags.length - 1) return `${tag}`.cyan.italic
            return `${tag}`.grey.dim
        })
        .join('/'.gray)
    // return `[ ${terminalLink.isSupported ? terminalLink(txt, `code file://${filename}`) : txt} ]`
    return `[${terminalLink.isSupported ? terminalLink(txt, `file://${filename}`) : txt}]`
}
