const webpack = require('webpack')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackDevMiddleware = require('webpack-dev-middleware')

console.log('HOT')

module.exports = (app, configPath) => {
    const config = require(configPath)
    const compiler = webpack(config)

    app.use(
        webpackDevMiddleware(compiler, {
            publicPath: config.output.publicPath,
            noInfo: true,
            stats: {
                colors: true,
            },
        }),
    )
    app.use(webpackHotMiddleware(compiler))
}
