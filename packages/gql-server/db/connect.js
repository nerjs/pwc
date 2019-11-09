const mongoose = require('mongoose')
const waitPort = require('wait-port')
const sleep = require('@pw/lib/sleep')
const log = require('@pw/log')(module)

const { DB_PROTOCOL, DB_HOST, DB_PORT, DB_NAME, DB_MAX_TRY_CONNECT } = process.env

const dbUri = `${DB_PROTOCOL}://${DB_HOST}:${Number(DB_PORT)}/${DB_NAME}`

const paramsWaitPort = {
    host: DB_HOST,
    port: Number(DB_PORT),
}

const paramsDb = {
    bufferCommands: true, // default
    dbName: DB_NAME,
    autoIndex: true, // default
    useNewUrlParser: true, // default
    reconnectTries: 30, // default
    reconnectInterval: 1000, // deafault
    promiseLibrary: Promise,
    poolSize: 5, // default
    useUnifiedTopology: true, // default false
}

const connect = async (i = 0) => {
    i++
    await waitPort(paramsWaitPort)
    try {
        await mongoose.connect(dbUri, paramsDb)
        log.info('MongoDb connected!'.yellow)
    } catch (err) {
        err.tryCount = i
        if (i >= Number(DB_MAX_TRY_CONNECT)) throw err
        await sleep(i * 100)
        if (i >= Number(DB_MAX_TRY_CONNECT) / 2) log.debug(`[try:${i}] Next try db connect...`)
        await connect(i)
    }
}

exports.connect = connect
exports.connection = mongoose.connection
