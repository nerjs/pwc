require('./config')

const log = require('@pw/utils/log')(module)
const app = require('./app')
const routes = require('./routes')
const errorMdw = require('./mdw/error')
const notFoundErrorMdw = require('./mdw/not_found')

const { GQL_SERVER_PORT } = process.env

app.use(routes)
// routes(app)

app.use(notFoundErrorMdw)
app.use(errorMdw)

app.listen(Number(GQL_SERVER_PORT), err => {
    if (err) return log.error(err)
    log.info(`Start server \n\thttp://localhost:${GQL_SERVER_PORT}`.yellow)
})
