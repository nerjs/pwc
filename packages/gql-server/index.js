require('./config').default

const app = require('./app')
const routes = require('./routes')
const errorMdw = require('./mdw/error')
const notFoundErrorMdw = require('./mdw/not_found')

const { SERVER_HOST, SERVER_PORT } = process.env

app.use(routes)
// routes(app)

app.use(notFoundErrorMdw)
app.use(errorMdw)

app.listen(Number(SERVER_PORT), SERVER_HOST, err => {
    if (err) return console.error(err)
    console.info(`Start server \n\thttp://${SERVER_HOST}:${SERVER_PORT}`.yellow)
})
