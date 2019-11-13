require('dotenv').config()
const log = require('@pw/log')(module)
const { createApp, notFoundErrorMdw, errorMdw } = require('@pw/express')
const path = require('path')

const { ADMIN_SERVER_PORT, BUILD_TYPE } = process.env

const app = createApp({
    logger: 'dev',
    favicon: path.join(__dirname, 'static', 'favicon.ico'),
    static: [path.join(__dirname, 'static'), path.join(__dirname, 'build')],
})

if (BUILD_TYPE === 'hot') require('@pw/express/hmr')(app, path.join(__dirname, 'webpack.config.js'))

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'))
})

app.use((err, req, res, next) => {
    log.error(err)
    res.end('Error!!!')
})

log.info('Start service')
app.listen(Number(ADMIN_SERVER_PORT), err => {
    if (err) return log.error(err)
    log.info(`Start server \n\thttp://localhost:${ADMIN_SERVER_PORT}`.yellow)
})
