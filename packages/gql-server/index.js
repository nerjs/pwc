require('./config')
const log = require('@pw/log')(module)
const { createApp } = require('@pw/express')
const path = require('path')
const routes = require('./routes')
const errorMdw = require('./mdw/error')
const notFoundErrorMdw = require('./mdw/not_found')

const { GQL_SERVER_PORT } = process.env

const app = createApp({
    logger: 'dev',
    favicon: path.join(__dirname, 'root', 'favicon.ico'),
    views: path.join(__dirname, 'views'),
    static: path.join(__dirname, 'root'),
})

app.use(routes)
// routes(app)

app.use(notFoundErrorMdw)
app.use(errorMdw)

app.listen(Number(GQL_SERVER_PORT), err => {
    if (err) return log.error(err)
    log.info(`Start server \n\thttp://localhost:${GQL_SERVER_PORT}`.yellow)
})
