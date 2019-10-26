const fs = require('fs')
const path = require('path')

const getRootPath = targetPath => {
    if (!targetPath || targetPath.length === 0) return null
    const pathPackage = path.join(targetPath, 'package.json')

    try {
        fs.statSync(pathPackage)
        return pathPackage
    } catch (e) {
        if (e.code !== 'ENOENT') throw e

        const nextPath = path.resolve(targetPath, '..')
        if (nextPath == targetPath) return null

        return getRootPath(nextPath)
    }
}

module.exports = currentModule => getRootPath(currentModule.path) || null
