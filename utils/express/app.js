const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const serveFavicon = require('serve-favicon')

module.exports = (settings = {}) => {
    if (!settings || typeof settings !== 'object') throw new Error('Settings must be an object')
    const app = express()

    if (settings.logger !== false)
        // dev, tiny, common
        app.use(
            morgan(
                typeof settings.logger === 'string' || typeof settings.logger === 'function'
                    ? settings.logger
                    : 'dev',
            ),
        )

    // VIEWS SETTINGS
    if (settings.views) {
        app.set('views', settings.views)
        app.set('view engine', 'ejs')
    }

    // BODY PARSING SETTINGS
    if (settings.bodyJson !== false) app.use(bodyParser.json())
    if (settings.bodyUrlcoded !== false)
        app.use(
            bodyParser.urlencoded(
                typeof settings.bodyUrlcoded === 'object'
                    ? settings.bodyUrlcoded
                    : { extended: false },
            ),
        )

    // COOKIES SETTINGS
    if (settings.cookies !== false) app.use(cookieParser())

    // FAVICON SETTINGS
    if (settings.favicon) app.use(serveFavicon(settings.favicon))

    // STATIC SETTINGS
    if (settings.static) app.use(express.static(settings.static))

    return app
}
