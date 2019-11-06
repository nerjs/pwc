require('./config')
const log = require('@pw/log')(module)
const { createApp, notFoundErrorMdw, errorMdw } = require('@pw/express')
const path = require('path')
const { connect: connectDb } = require('./db')
const routes = require('./routes')
const gqlApp = require('./gql')

const { GQL_SERVER_PORT } = process.env

const app = createApp({
    logger: 'dev',
    favicon: path.join(__dirname, 'root', 'favicon.ico'),
    views: path.join(__dirname, 'views'),
    static: path.join(__dirname, 'root'),
})

gqlApp(app)
app.use(routes)

app.use(notFoundErrorMdw)
app.use(errorMdw)

// Start gql app
;(async () => {
    log.info('Start app'.yellow)
    await connectDb()
    app.listen(Number(GQL_SERVER_PORT), err => {
        if (err) return log.error(err)
        log.info(`Start server \n\thttp://localhost:${GQL_SERVER_PORT}`.yellow)
    })
})()
