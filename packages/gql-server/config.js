require('dotenv').config()
require('colors')
const fs = require('fs')

require.extensions['.gql'] = function(module, path) {
    const file = fs.readFileSync(path, {
        encoding: 'utf8',
    })
    module.exports = file
    return 1
}
