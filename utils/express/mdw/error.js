const HttpError = require('@pw/errors/http')

module.exports = (err, req, res, next) => {
    const error = err instanceof HttpError ? err : new HttpError(err.code, err.message)
    res.locals.message = error.message
    res.locals.error = req.app.get('env') === 'development' ? error : {}

    // render the error page
    res.status(error.code || error.status || 500)
    res.render('error')
}
