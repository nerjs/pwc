const Module = require('module')
const path = require('path')

const finderPackage = require('./finder')
const readerPackage = require('./reader')

module.exports = mod => {
    const currentModule = mod instanceof Module ? mod : module
    const pathPackage = finderPackage(currentModule)
    if (!pathPackage) return null
    const parsedPackage = readerPackage(pathPackage)
    return {
        ...parsedPackage,
        pathModule: currentModule.path,
        pathPackage: path.dirname(pathPackage),
    }
}
