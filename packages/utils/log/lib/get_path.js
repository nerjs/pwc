const path = require('path')

module.exports = mod => {
    const basepath = process.mainModule.path
    const filename = mod && mod.filename ? mod.filename : ''
    const rel = filename.replace(basepath, '')
    const tags = rel.replace(/^\//, '').split('/')
    return { tags, filename }
}
