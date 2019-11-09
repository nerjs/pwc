const mongoose = require('mongoose')
const waitPort = require('wait-port')
const merge = require('merge')
const sleep = require('@pw/lib/sleep')
const log = require('@pw/log')(module)

const paramsDbDefault = {
    dbProtocol: 'mongodb',
    dbHost: 'localhost',
    dbPort: 27017,
    dbName: 'db',
    dbMaxTryConnect: 10,
    bufferCommands: true, // default
    autoIndex: true, // default
    useNewUrlParser: true, // default
    reconnectTries: 30, // default
    reconnectInterval: 1000, // deafault
    promiseLibrary: Promise,
    poolSize: 5, // default
    useUnifiedTopology: true, // default false
}

const connect = _params => {
    const { dbProtocol, dbHost, dbPort, dbName, dbMaxTryConnect, ...params } = merge(
        {},
        paramsDbDefault,
        _params,
    )

    const paramsWaitPort = {
        host: dbHost,
        port: Number(dbPort),
    }

    const dbUri = `${dbProtocol}://${dbHost}:${Number(dbPort)}/${dbName}`

    const tryConnect = async i => {
        i++
        await waitPort(paramsWaitPort)

        try {
            await mongoose.connect(dbUri, { dbName, ...params })
            log.info('MongoDb connected!'.yellow)
            return mongoose.connection
        } catch (err) {
            err.tryCount = i
            if (i >= Number(dbMaxTryConnect)) throw err
            await sleep(i * 100)
            if (i >= Number(dbMaxTryConnect) / 2) log.debug(`[try:${i}] Next try db connect...`)
            return await tryConnect(i)
        }
    }

    return tryConnect(0)
}

exports.connect = connect
exports.connection = mongoose.connection
