require('dotenv').config()
require('colors')
const fs = require('fs')
const { connect } = require('@pw/db')

const { DB_PROTOCOL, DB_HOST, DB_PORT, DB_NAME, DB_MAX_TRY_CONNECT } = process.env

require.extensions['.gql'] = function(module, path) {
    const file = fs.readFileSync(path, {
        encoding: 'utf8',
    })
    module.exports = file
    return 1
}

connect({
    dbProtocol: DB_PROTOCOL,
    dbHost: DB_HOST,
    dbPort: DB_PORT,
    dbName: DB_NAME,
    dbMaxTryConnect: DB_MAX_TRY_CONNECT,
})
