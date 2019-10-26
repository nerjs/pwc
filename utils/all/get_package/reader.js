const fs = require('fs')

module.exports = pathPackage => JSON.parse(fs.readFileSync(pathPackage))
